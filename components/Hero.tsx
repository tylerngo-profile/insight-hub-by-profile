import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onBookDemo: () => void;
  onSeeHow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo, onSeeHow }) => {
  return (
    <section className="relative isolate pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-full mx-auto flex flex-col items-center text-center bg-brand-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none hero-glow"></div>
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-[0.08]"></div>
      <div className="absolute -top-32 left-[-8%] w-[32rem] h-[32rem] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none animate-float-slow"></div>
      <div className="absolute top-[10%] right-[-10%] w-[28rem] h-[28rem] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none animate-float-reverse"></div>
      <div className="absolute bottom-[-22%] left-[30%] w-[34rem] h-[34rem] bg-brand-800/50 blur-[140px] rounded-full pointer-events-none animate-float-medium"></div>
      <div className="absolute top-24 right-24 w-20 h-20 border border-cyan-400/30 rounded-2xl rotate-12 pointer-events-none animate-spin-slow"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white/5 pointer-events-none"></div>

      <div className="absolute left-6 top-32 hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 backdrop-blur-sm pointer-events-none animate-float-slow">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-soft-pulse"></span>
        Owned audience
      </div>
      <div className="absolute right-10 bottom-24 hidden lg:flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/80 backdrop-blur-sm pointer-events-none animate-float-reverse">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-soft-pulse"></span>
        Compounding insight
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight max-w-5xl animate-fade-up">
          Turn executive insight into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-white/90">credibility engine</span> you own.
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent rounded-full mb-8 animate-shimmer"></div>
        
        <p className="text-lg md:text-xl text-brand-300 max-w-3xl mb-6 leading-relaxed font-light animate-fade-up anim-delay-200">
          Vantage is a dedicated home for your leaders' thinking.
          A place where thought leadership compounds, audiences subscribe, and credibility builds over time, not disappears in a feed.
        </p>

        <p className="text-sm md:text-base text-cyan-200/90 mb-12 animate-fade-up anim-delay-200">
          Built for leadership teams that need measurable authority with senior B2B buyers.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-up anim-delay-400">
          <Button onClick={onBookDemo} className="md:text-lg px-8 py-4">Book a demo</Button>
          <Button variant="outline" onClick={onSeeHow} className="md:text-lg px-8 py-4 border-brand-600 text-brand-200 hover:border-cyan-400 hover:text-white">View sample hub</Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 animate-fade-up anim-delay-400">
          {['Owned audience', 'Company-level analytics', 'Launch in 3 weeks'].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs md:text-sm text-white/85 backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Abstract Visualization of "Owned Asset" */}
        <div className="mt-20 w-full max-w-6xl relative animate-fade-up anim-delay-600">
          <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none opacity-40"></div>
          
          <div className="relative bg-brand-950 border border-brand-800 rounded-xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[16/9] flex flex-col group ring-1 ring-white/10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,182,237,0.15)]">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-shimmer pointer-events-none"></div>
            {/* Fake Browser UI */}
            <div className="bg-brand-900 border-b border-brand-800 px-4 py-3 flex items-center gap-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-brand-700"></div>
                 <div className="w-3 h-3 rounded-full bg-brand-700"></div>
                 <div className="w-3 h-3 rounded-full bg-brand-700"></div>
               </div>
               <div className="h-6 bg-brand-800/50 rounded-md w-64 mx-auto hidden md:block"></div>
            </div>
            
            {/* Hybrid Demo Content: mock UI shell + real client embed */}
            <div className="flex-1 p-4 md:p-6 grid grid-cols-12 gap-4 md:gap-6 bg-brand-950/85">
              {/* Left mock rail (keeps premium product feel) */}
              <div className="hidden md:flex md:col-span-3 flex-col rounded-lg border border-brand-800/70 bg-brand-900/35 p-4">
                <div className="h-3 w-16 bg-brand-700 rounded mb-5"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-2.5 w-full bg-brand-800 rounded"></div>
                  <div className="h-2.5 w-4/5 bg-brand-800 rounded"></div>
                  <div className="h-2.5 w-3/4 bg-brand-800 rounded"></div>
                </div>
                <div className="mt-auto rounded-lg border border-brand-700/60 bg-brand-900/70 p-3">
                  <div className="h-1.5 w-10 bg-cyan-500/70 rounded mb-2"></div>
                  <div className="text-lg font-semibold text-white leading-none">9.0k</div>
                  <div className="mt-1 text-[11px] text-brand-400">Followers captured</div>
                </div>
              </div>

              {/* Main content area with real client screenshot embed */}
              <div className="col-span-12 md:col-span-9 flex flex-col gap-4">
                <div className="flex items-end justify-between">
                  <div>
                    <div className="h-2.5 w-28 bg-cyan-500/80 rounded mb-2"></div>
                    <div className="h-4 w-40 md:w-56 bg-brand-700 rounded"></div>
                  </div>
                  <div className="h-8 w-8 rounded-full border border-brand-700 bg-brand-800/80"></div>
                </div>

                <div className="relative overflow-hidden rounded-lg border border-brand-800 bg-brand-900/40 p-2">
                  <img
                    src="/demo/scott-lane-insight-preview.jpg"
                    alt="Client Insight Hub demo preview"
                    className="h-[190px] md:h-[245px] w-full rounded-md object-cover object-top"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-white/10"></div>
                </div>

                <div className="grid grid-cols-2 gap-4 opacity-70">
                  <div className="h-14 rounded-lg border border-brand-800 bg-brand-900/35"></div>
                  <div className="h-14 rounded-lg border border-brand-800 bg-brand-900/35"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


