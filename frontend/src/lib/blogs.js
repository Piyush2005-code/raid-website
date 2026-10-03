// Blog data loader — reads all .md files from src/content/blogs/
// Uses Vite's import.meta.glob to load them at build time.
//
// Supported frontmatter fields:
//   title, description, pubDate / date, heroImage, draft,
//   featured, tags, authors (array of {name, url}), author (string)

const rawFiles = import.meta.glob('../content/blogs/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

// ─────────────────────────────────────────────
// Minimal but robust YAML frontmatter parser
// Handles: strings, quoted strings, arrays (inline + block),
// nested block arrays with properties (authors: [{name, url}])
// ─────────────────────────────────────────────
function parseFrontmatter(raw) {
  const fmMatch = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!fmMatch) return { data: {}, content: raw };

  const yamlBlock = fmMatch[1];
  const content = fmMatch[2];
  const data = {};

  const lines = yamlBlock.split('\n');
  let i = 0;

  const unquote = (s) =>
    s.replace(/^["']|["']$/g, '').trim();

  while (i < lines.length) {
    const line = lines[i];
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) { i++; continue; }

    const key = line.slice(0, colonIdx).trim();
    const rest = line.slice(colonIdx + 1).trim();

    // Inline array: tags: ["a", "b"]
    if (rest.startsWith('[')) {
      const arrMatch = rest.match(/\[(.*)\]/s);
      data[key] = arrMatch
        ? arrMatch[1].split(',').map(s => unquote(s)).filter(Boolean)
        : [];
      i++;
      continue;
    }

    // Block array (next lines start with "  -")
    if (rest === '' && i + 1 < lines.length && lines[i + 1].match(/^\s+-/)) {
      const items = [];
      i++;
      while (i < lines.length && lines[i].match(/^\s+-/)) {
        const itemLine = lines[i];
        const itemVal = itemLine.replace(/^\s+-\s*/, '').trim();

        // Nested object: "- name: foo"
        if (itemVal.includes(':')) {
          const obj = {};
          // parse first prop from the "- " line
          const firstColon = itemVal.indexOf(':');
          obj[itemVal.slice(0, firstColon).trim()] = unquote(itemVal.slice(firstColon + 1).trim());
          i++;
          // parse indented sub-properties
          while (i < lines.length && lines[i].match(/^\s{4,}\S/)) {
            const sub = lines[i].trim();
            const sc = sub.indexOf(':');
            if (sc !== -1) {
              obj[sub.slice(0, sc).trim()] = unquote(sub.slice(sc + 1).trim());
            }
            i++;
          }
          items.push(obj);
        } else {
          items.push(unquote(itemVal));
          i++;
        }
      }
      data[key] = items;
      continue;
    }

    // Boolean
    if (rest === 'true')  { data[key] = true;  i++; continue; }
    if (rest === 'false') { data[key] = false; i++; continue; }

    // Plain / quoted string
    data[key] = unquote(rest);
    i++;
  }

  return { data, content };
}

function filePathToSlug(filePath) {
  return filePath.replace(/^.*\//, '').replace(/\.md$/, '');
}

export const allBlogs = Object.entries(rawFiles)
  .map(([filePath, raw]) => {
    const slug = filePathToSlug(filePath);
    const { data, content } = parseFrontmatter(raw);

    // Normalise author(s)
    let authors = [];
    if (Array.isArray(data.authors)) {
      authors = data.authors;
    } else if (data.author) {
      authors = [{ name: data.author, url: null }];
    }

    return {
      slug,
      title:      data.title      || slug,
      description: data.description || data.excerpt || '',
      date:       data.pubDate    || data.date || '',
      heroImage:  data.heroImage  || null,
      authors,
      tags:       Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      featured:   data.featured   === true,
      draft:      data.draft      === true,
      content,
    };
  })
  .filter(b => !b.draft)
  .sort((a, b) => (b.date > a.date ? 1 : -1));

export function getAllBlogs() {
  return allBlogs;
}

export function getBlog(slug) {
  return allBlogs.find(b => b.slug === slug) ?? null;
}
