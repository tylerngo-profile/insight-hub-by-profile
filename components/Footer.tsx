import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-brand-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="max-w-xs">
          <span className="text-xl font-bold tracking-tight text-white mb-4 block">Insight Hub</span>
          <p className="text-sm text-brand-400 leading-relaxed">
            Profile helps leaders turn insight into influence, credibility, and commercial advantage.
          </p>
          <p className="text-sm text-brand-600 mt-8">(c) {new Date().getFullYear()} Profile. All rights reserved.</p>
        </div>
        
        <div className="flex flex-col gap-4 text-sm text-brand-400 text-right">
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
