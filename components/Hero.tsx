import React from 'react';
import { Button } from './Button';

interface HeroProps {
  onBookDemo: () => void;
  onSeeHow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookDemo, onSeeHow }) => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-full mx-auto flex flex-col items-center text-center bg-brand-900 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-800/40 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 leading-tight max-w-5xl">
          Turn executive insight into a <span className="text-cyan-400">credibility engine</span> you own.
        </h1>
        
        <p className="text-lg md:text-xl text-brand-300 max-w-3xl mb-12 leading-relaxed font-light">
          Insight Hub is a dedicated home for your leaders’ thinking. 
          A place where thought leadership compounds, audiences subscribe, and credibility builds over time, not disappears in a feed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <Button onClick={onBookDemo} className="md:text-lg px-8 py-4">Book a demo</Button>
          <Button variant="outline" onClick={onSeeHow} className="md:text-lg px-8 py-4 border-brand-600 text-brand-200 hover:border-cyan-400 hover:text-white">See how Insight Hub works</Button>
        </div>

        {/* Abstract Visualization of "Owned Asset" */}
        <div className="mt-20 w-full max-w-6xl relative">
          <div className="absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none opacity-40"></div>
          
          <div className="relative bg-brand-950 border border-brand-800 rounded-xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[21/9] flex flex-col group ring-1 ring-white/10">
            {/* Fake Browser UI */}
            <div className="bg-brand-900 border-b border-brand-800 px-4 py-3 flex items-center gap-4">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-brand-700"></div>
                 <div className="w-3 h-3 rounded-full bg-brand-700"></div>
                 <div className="w-3 h-3 rounded-full bg-brand-700"></div>
               </div>
               <div className="h-6 bg-brand-800/50 rounded-md w-64 mx-auto hidden md:block"></div>
            </div>
            
            {/* Dashboard Content */}
            <div className="flex-1 p-6 md:p-10 grid grid-cols-12 gap-6 bg-brand-950/80">
               {/* Left Col - Sidebar */}
               <div className="hidden md:block col-span-3 space-y-4 border-r border-brand-800/50 pr-6">
                  <div className="h-4 w-24 bg-brand-700 rounded mb-8"></div>
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-brand-800/50 rounded"></div>
                    <div className="h-3 w-3/4 bg-brand-800/50 rounded"></div>
                    <div className="h-3 w-5/6 bg-brand-800/50 rounded"></div>
                  </div>
                  <div className="mt-auto pt-12">
                     <div className="h-32 rounded-lg bg-gradient-to-br from-brand-900 to-brand-800 border border-brand-700/50 p-4 relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="h-2 w-12 bg-cyan-500/50 rounded mb-2"></div>
                          <div className="text-2xl font-bold text-white">4.2k</div>
                          <div className="text-xs text-brand-400">Subscribers owned</div>
                        </div>
                        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
                     </div>
                  </div>
               </div>
               
               {/* Main Content - Article Feed */}
               <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <div className="h-3 w-32 bg-cyan-600 rounded mb-2"></div>
                      <div className="h-8 w-64 md:w-96 bg-brand-800 rounded"></div>
                    </div>
                    <div className="h-10 w-10 bg-brand-800 rounded-full border border-brand-700"></div>
                  </div>
                  
                  {/* Article Card 1 */}
                  <div className="bg-brand-900/50 border border-brand-800 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-start hover:border-cyan-500/30 transition-colors duration-500">
                     <div className="w-full md:w-48 aspect-video bg-brand-800 rounded-md flex-shrink-0 relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent"></div>
                     </div>
                     <div className="flex-1 space-y-3">
                        <div className="h-5 w-3/4 bg-brand-700 rounded"></div>
                        <div className="h-3 w-full bg-brand-800 rounded"></div>
                        <div className="h-3 w-5/6 bg-brand-800 rounded"></div>
                     </div>
                  </div>

                   {/* Article Card 2 */}
                  <div className="bg-brand-900/50 border border-brand-800 p-6 rounded-lg flex flex-col md:flex-row gap-6 items-start opacity-60">
                     <div className="w-full md:w-48 aspect-video bg-brand-800 rounded-md flex-shrink-0"></div>
                     <div className="flex-1 space-y-3">
                        <div className="h-5 w-2/3 bg-brand-700 rounded"></div>
                        <div className="h-3 w-full bg-brand-800 rounded"></div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};