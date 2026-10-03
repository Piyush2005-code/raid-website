import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import 'highlight.js/styles/github-dark.css';
import 'katex/dist/katex.min.css';
import { getBlog } from '@/lib/blogs';
import { FiArrowLeft, FiCalendar, FiUser, FiTag } from 'react-icons/fi';
import './blog.css';

export default function BlogPost() {
  const { slug } = useParams();
  const blog = getBlog(slug);

  if (!blog) return <Navigate to="/blogs" replace />;

  return (
    <div className="relative min-h-screen overflow-x-hidden pb-32 pt-28">
      {/* ── Ambient glow behind article ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.025] blur-[200px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-indigo-500/[0.025] blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-8">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-cyan-500 transition-colors hover:text-cyan-300"
          >
            <FiArrowLeft size={14} />
            Back to Blogs
          </Link>
        </motion.div>

        {/* ── Article header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h1 className="mb-6 font-head text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.07] pt-6">
            {blog.date && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-cyan-400">
                <FiCalendar size={10} />
                {blog.date}
              </span>
            )}
            
            {/* Multiple authors rendering */}
            {blog.authors && blog.authors.length > 0 && (
              <div className="flex flex-wrap items-center gap-3">
                {blog.authors.map((author, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-gray-500">
                    <FiUser size={11} />
                    {author.url ? (
                      <a href={author.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                        {author.name}
                      </a>
                    ) : (
                      author.name
                    )}
                  </span>
                ))}
              </div>
            )}

            {blog.tags && blog.tags.length > 0 && (
              <div className="ml-auto flex flex-wrap gap-2">
                {blog.tags.map(tag => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gray-500"
                  >
                    <FiTag size={8} />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* ── Article body — liquid glass card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8 backdrop-blur-xl md:p-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_64px_rgba(0,0,0,0.5)]"
        >
          {/* Top shimmer */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          {/* Hero Image if available */}
          {blog.heroImage && (
            <div className="mb-10 w-full overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl">
              <img 
                src={blog.heroImage} 
                alt="Blog Hero" 
                className="w-full object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          )}

          {/* Prose content using separate Notion-style CSS */}
          <div className="notion-blog">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeHighlight, rehypeKatex]}
              components={{
                // Handle YouTube embeds and external links
                a({ node, children, href = '', ...props }) {
                  const isYT =
                    href.includes('youtube.com/watch') ||
                    href.includes('youtu.be/') ||
                    href.includes('youtube.com/playlist');

                  if (isYT && typeof children === 'string' && children.includes('http')) {
                    let embedUrl = '';
                    if (href.includes('youtube.com/watch')) {
                      const vid = new URL(href).searchParams.get('v');
                      if (vid) embedUrl = `https://www.youtube.com/embed/${vid}`;
                    } else if (href.includes('youtu.be/')) {
                      const vid = href.split('youtu.be/')[1]?.split('?')[0];
                      if (vid) embedUrl = `https://www.youtube.com/embed/${vid}`;
                    } else if (href.includes('youtube.com/playlist')) {
                      const list = new URL(href).searchParams.get('list');
                      if (list) embedUrl = `https://www.youtube.com/embed/videoseries?list=${list}`;
                    }
                    if (embedUrl) {
                      return (
                        <span className="relative my-8 block aspect-video w-full overflow-hidden rounded-2xl border border-white/[0.08] shadow-2xl">
                          <iframe
                            className="absolute inset-0 h-full w-full"
                            src={embedUrl}
                            title="YouTube video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </span>
                      );
                    }
                  }

                  const isExternal = href.startsWith('http');
                  return (
                    <a
                      href={href}
                      {...props}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  );
                },
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </div>
        </motion.div>

        {/* ── Back footer ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-start"
        >
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-gray-600 transition-colors hover:text-cyan-400"
          >
            <FiArrowLeft size={12} />
            All Posts
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
