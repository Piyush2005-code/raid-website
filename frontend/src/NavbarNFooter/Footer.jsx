import React from 'react';
import { DivOrigami } from './Logoorigami';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/[0.05] bg-[#050608] px-6 py-12 sm:px-14 lg:px-24">
      {/* ── Matte dark gradient background ── */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-[#0a0b0f] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <DivOrigami />
            </div>
            <p className="font-head text-lg font-semibold tracking-wide text-gray-200">
              Realm of AI and Data
            </p>
            <p className="mt-1 font-body text-sm text-gray-500">
              IIT Jodhpur
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link to="/#about" className="font-mono text-[0.75rem] tracking-widest text-gray-500 uppercase transition-colors hover:text-white">
              About Us
            </Link>
            <Link to="/projects" className="font-mono text-[0.75rem] tracking-widest text-gray-500 uppercase transition-colors hover:text-white">
              Projects
            </Link>
            <Link to="/teams" className="font-mono text-[0.75rem] tracking-widest text-gray-500 uppercase transition-colors hover:text-white">
              Team
            </Link>
            <Link to="/contactus" className="font-mono text-[0.75rem] tracking-widest text-gray-500 uppercase transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-white/[0.05]" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="font-mono text-xs text-gray-600">
            © {new Date().getFullYear()} RAID, IIT Jodhpur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;