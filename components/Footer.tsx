import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-brand-950 via-brand-900 to-cyan-900 text-white pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr_0.6fr] gap-12 items-start">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Get monthly executive insights.</h3>
          <p className="text-brand-300 mb-6 max-w-md">
            Curated B2B thought leadership strategies, platform updates, and practical frameworks.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-xl" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full bg-white text-brand-900 px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
            <button className="rounded-full bg-cyan-600 text-white px-6 py-3 text-sm font-semibold hover:bg-cyan-500 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">Home</div>
            <a href="#solution" className="block text-white/80 hover:text-white">Why Vantage</a>
            <a href="#how-it-works" className="block text-white/80 hover:text-white">How it works</a>
            <a href="#pricing" className="block text-white/80 hover:text-white">Pricing</a>
          </div>
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.3em] text-white/60">Connect</div>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block text-white/80 hover:text-white">LinkedIn</a>
            <a href="#contact" className="block text-white/80 hover:text-white">Book a demo</a>
          </div>
        </div>

        <div className="text-sm text-white/70 lg:text-right">
          <div className="text-lg font-semibold">Vantage</div>
          <div className="text-white/50 mt-2">by Profile</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
        <div>(c) {new Date().getFullYear()} Profile. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

