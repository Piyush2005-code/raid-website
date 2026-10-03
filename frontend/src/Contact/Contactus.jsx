import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { LiquidButton } from '@/components/ui/liquid-glass-button';
import { FiMail, FiUser, FiMessageSquare } from 'react-icons/fi';

function Contactus() {
  useEffect(() => {
    Aos.init({ duration: 700 });
  }, []);
  
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);
    formData.append('access_key', '2fbd56fe-8b2d-40bc-b0ef-11d4f0710404');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult('Message sent successfully.');
        event.target.reset();
      } else {
        setResult(data.message || 'Error sending message.');
      }
    } catch (err) {
      setResult('Failed to send. Please try again.');
    }
  };

  return (
    <div className="min-h-screen pb-40 pt-32">
      {/* ── Header Section ── */}
      <div className="flex flex-col items-center justify-center px-6 text-center" data-aos="fade-up">
        <span className="mb-4 block font-mono text-[0.65rem] tracking-[0.22em] text-gray-500 uppercase">
          Get in touch
        </span>
        <h1 className="font-head text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Contact Us
        </h1>
        <p className="mt-6 max-w-2xl font-body text-sm leading-relaxed text-gray-400 sm:text-base">
          Got questions, feedback, or ideas? We're here to listen and collaborate. Connect with us and be a part of our AI journey at IIT Jodhpur.
        </p>
      </div>

      {/* ── Contact Form Card (Liquid Glass) ── */}
      <div className="mx-auto mt-16 max-w-xl px-6" data-aos="fade-up" data-aos-delay="100">
        <div className="
          relative overflow-hidden rounded-3xl
          border border-white/[0.08] bg-white/[0.03]
          backdrop-blur-2xl
          shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(0,0,0,0.25),0_12px_48px_rgba(0,0,0,0.6)]
          p-8 sm:p-10
        ">
          {/* Top shimmer accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <form onSubmit={onSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block font-mono text-xs uppercase tracking-wider text-gray-400">
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <FiMail className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="hello@example.com"
                  className="
                    block w-full rounded-xl border border-white/[0.1]
                    bg-black/40 py-3 pl-11 pr-4 text-sm text-gray-200
                    placeholder:text-gray-600 focus:border-white/[0.25]
                    focus:bg-black/60 focus:outline-none focus:ring-0
                    transition-all
                  "
                />
              </div>
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label htmlFor="name" className="block font-mono text-xs uppercase tracking-wider text-gray-400">
                Name
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <FiUser className="h-4 w-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="
                    block w-full rounded-xl border border-white/[0.1]
                    bg-black/40 py-3 pl-11 pr-4 text-sm text-gray-200
                    placeholder:text-gray-600 focus:border-white/[0.25]
                    focus:bg-black/60 focus:outline-none focus:ring-0
                    transition-all
                  "
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="block font-mono text-xs uppercase tracking-wider text-gray-400">
                Message
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute top-3 left-0 flex items-start pl-4">
                  <FiMessageSquare className="h-4 w-4 text-gray-500" />
                </div>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={4}
                  placeholder="Leave us a message..."
                  className="
                    block w-full rounded-xl border border-white/[0.1]
                    bg-black/40 py-3 pl-11 pr-4 text-sm text-gray-200
                    placeholder:text-gray-600 focus:border-white/[0.25]
                    focus:bg-black/60 focus:outline-none focus:ring-0
                    transition-all resize-none
                  "
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 flex flex-col items-center gap-4">
              <LiquidButton type="submit" size="xl" className="w-full">
                Send Message
              </LiquidButton>
              {result && (
                <p className="font-mono text-xs tracking-wide text-gray-400">
                  {result}
                </p>
              )}
            </div>
            
          </form>
        </div>
      </div>
      
      {/* ── Direct Email Option ── */}
      <div className="mt-16 flex flex-col items-center gap-4 text-center" data-aos="fade-up" data-aos-delay="200">
        <p className="font-mono text-[0.65rem] tracking-[0.22em] text-gray-600 uppercase">
          Or email us directly
        </p>
        <a href="mailto:raid@iitj.ac.in">
          <LiquidButton variant="ghost" size="md">
            <FiMail className="mr-2" />
            raid@iitj.ac.in
          </LiquidButton>
        </a>
      </div>

    </div>
  );
}

export default Contactus;
