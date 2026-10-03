import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllBlogs } from '@/lib/blogs';
import { FiArrowRight, FiUser } from 'react-icons/fi';

export default function BlogList() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen pb-40 pt-32">
      {/* ── Ambient glow ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.03] blur-[160px]" />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="mb-4 block font-mono text-[0.65rem] tracking-[0.22em] text-cyan-500 uppercase">
            Club Blog
          </span>
          <h1 className="font-head text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Latest{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(105deg, #e2e8f0 0%, #38bdf8 60%, #818cf8 100%)', WebkitBackgroundClip: 'text' }}
            >
              Insights
            </span>
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-gradient-to-r from-cyan-500 to-transparent" />
          <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-gray-500 sm:text-base">
            Articles, tutorials, and technical deep-dives from the minds at RAID — the AI Society of IIT Jodhpur.
          </p>
        </motion.div>

        {/* ── Blog grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  to={`/blogs/${blog.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/25 hover:bg-white/[0.04] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.07)]"
                >
                  {/* Top shimmer on hover */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100 z-10" />

                  {/* Optional Hero Image */}
                  {blog.heroImage && (
                    <div className="relative h-48 w-full overflow-hidden border-b border-white/[0.05]">
                      <img
                        src={blog.heroImage}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,6,8,0.8)] to-transparent" />
                    </div>
                  )}

                  <div className="flex flex-grow flex-col p-7">
                    {/* Date */}
                    {blog.date && (
                      <time className="mb-4 inline-block w-fit rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-[0.65rem] font-bold uppercase tracking-widest text-cyan-400">
                        {blog.date}
                      </time>
                    )}

                    {/* Title */}
                    <h3 className="mb-3 font-head text-xl font-bold leading-snug text-gray-100 transition-colors duration-200 group-hover:text-white">
                      {blog.title}
                    </h3>

                    {/* Description */}
                    {blog.description && (
                      <p className="mb-5 flex-grow font-body text-sm leading-relaxed text-gray-500">
                        {blog.description}
                      </p>
                    )}

                    {/* Tags */}
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="mb-5 flex flex-wrap gap-1.5">
                        {blog.tags.map(tag => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2.5 py-0.5 font-mono text-[0.6rem] font-semibold uppercase tracking-wider text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between border-t border-white/[0.05] pt-4">
                      {blog.authors && blog.authors.length > 0 ? (
                        <span className="flex items-center gap-1.5 font-mono text-[0.65rem] uppercase tracking-wider text-gray-600">
                          <FiUser size={10} />
                          {blog.authors.length > 2 
                            ? `${blog.authors[0].name} & ${blog.authors.length - 1} others`
                            : blog.authors.map(a => a.name).join(', ')}
                        </span>
                      ) : <span />}
                      <span className="flex items-center gap-1.5 font-mono text-[0.65rem] font-bold uppercase tracking-wider text-cyan-500 transition-transform duration-300 group-hover:translate-x-1">
                        Read more <FiArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {blogs.length === 0 && (
          <div className="py-32 text-center">
            <p className="font-mono text-sm text-gray-600">No posts yet. Check back soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
