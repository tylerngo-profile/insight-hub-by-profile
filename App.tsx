import React from 'react';
import { Hero } from './components/Hero';
import { Button } from './components/Button';
import { Footer } from './components/Footer';

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-brand-900 selection:bg-brand-900 selection:text-white">
      
      {/* Navigation - Light theme now */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-500 rounded-sm shadow-md"></div> {/* Logo Placeholder */}
              <span className="text-xl font-bold tracking-tight text-brand-900">Insight Hub</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('problem')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">The Problem</button>
              <button onClick={() => scrollToSection('solution')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">Solution</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">How it Works</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">Pricing</button>
              <Button onClick={() => scrollToSection('contact')} variant="primary" className="!py-2 !px-5 !text-sm">Book a demo</Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero stays dark for B2B impact */}
        <Hero 
          onBookDemo={() => scrollToSection('contact')} 
          onSeeHow={() => scrollToSection('how-it-works')} 
        />

        {/* 2. The Problem - Light Grey Background */}
        <section id="problem" className="py-24 md:py-32 bg-brand-50 border-y border-brand-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div className="mb-12 md:mb-0">
                <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold mb-6 uppercase tracking-wide">
                  The Challenge
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8 leading-tight">
                  Thought leadership is working. But it’s working too hard on <span className="text-cyan-600">rented platforms.</span>
                </h2>
                <div className="space-y-6 text-lg text-brand-600 font-normal leading-relaxed">
                  <p>
                    Most executive thought leadership lives on LinkedIn. It performs for a moment, then vanishes.
                  </p>
                  <p>
                    Posts are scattered. Audiences are fragmented. Insights are lost in the timeline. 
                    And the value your leaders create never truly accumulates.
                  </p>
                  <p className="font-medium text-brand-900 border-l-4 border-cyan-500 pl-4 py-1">
                    Thought leadership shouldn’t just be published. It should be owned.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-8 rounded-xl bg-white border border-brand-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">No owned audience</h3>
                  <p className="text-brand-500">You don't own the data. You can't export your followers.</p>
                </div>
                <div className="p-8 rounded-xl bg-white border border-brand-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">No long-term content asset</h3>
                  <p className="text-brand-500">High-effort posts disappear after 24 hours.</p>
                </div>
                <div className="p-8 rounded-xl bg-white border border-brand-200 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">No clear credibility link</h3>
                  <p className="text-brand-500">Hard to prove impact on complex sales cycles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is Insight Hub - White Background */}
        <section id="solution" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-6 uppercase tracking-wide">
                  Introducing Insight Hub
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8">A dedicated home for your leaders’ insight</h2>
            <p className="text-xl text-brand-600 leading-relaxed font-light">
              Insight Hub is a branded destination where your organisation’s thinking lives in one place. 
              We help you capture sharp executive perspectives, publish them to a dedicated hub, and build a direct relationship with the people who matter most.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Managed Insight Hub", desc: "A fully branded, SEO-optimised site set up and managed for you." },
              { title: "Executive Creation", desc: "We interview your leaders and write insights in their authentic voice." },
              { title: "Audience Ownership", desc: "Capture emails and build a subscriber list you actually own." },
              { title: "Strategic Distribution", desc: "Campaigns across LinkedIn, email, and video to drive traffic." },
              { title: "Performance Tracking", desc: "See exactly which companies are reading your content." },
              { title: "Compounding Asset", desc: "Content remains accessible and searchable, building value over time." }
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-brand-200 hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl mb-6 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <div className="w-6 h-6 bg-current rounded-sm opacity-60"></div>
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-brand-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. How Insight Hub Works - Light Grey */}
        <section id="how-it-works" className="py-24 bg-brand-50 border-y border-brand-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">From insight to owned credibility</h2>
               <p className="text-brand-500">A systematic approach to building authority.</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-200 -z-0"></div>

              {[
                { 
                  step: "01", 
                  title: "Capture insight", 
                  desc: "We work closely with your leaders to extract original, commercial perspectives that matter to your audience." 
                },
                { 
                  step: "02", 
                  title: "Publish to hub", 
                  desc: "Insights are published to a dedicated, branded hub your organisation owns, not lost across platforms." 
                },
                { 
                  step: "03", 
                  title: "Distribute", 
                  desc: "Content is amplified through LinkedIn, email, and video to drive the right audience back to the hub." 
                },
                { 
                  step: "04", 
                  title: "Build over time", 
                  desc: "Subscribers grow. Insights compound. Your credibility strengthens with every piece published." 
                }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 bg-brand-50 md:bg-transparent pt-8 md:pt-0 group text-center md:text-left">
                  <div className="w-24 h-24 bg-white border-4 border-brand-100 group-hover:border-cyan-400 rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto md:mx-0 mb-6 z-10 transition-colors shadow-sm">
                    <span className="text-brand-300 group-hover:text-cyan-600 transition-colors">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Insight Hub vs LinkedIn - White */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">LinkedIn distributes. Insight Hub compounds.</h2>
              <p className="text-lg text-brand-600 mb-8 leading-relaxed">
                LinkedIn remains a powerful distribution channel. But on its own, it was never designed to help you build an owned credibility asset.
              </p>
              <div className="p-6 bg-brand-50 rounded-lg border-l-4 border-cyan-500">
                <p className="text-brand-800 font-medium italic">
                  "LinkedIn is the distribution layer. Insight Hub is the foundation."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn Column */}
              <div className="p-6 bg-brand-50 rounded-xl border border-brand-100">
                <div className="flex items-center gap-2 mb-6 text-brand-500 font-semibold uppercase tracking-wider text-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-400"></div> LinkedIn Only
                </div>
                <ul className="space-y-4 text-sm text-brand-500">
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">×</span> Rented audience
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">×</span> Short lifespan
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">×</span> Algorithm reliance
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">×</span> No data ownership
                  </li>
                </ul>
              </div>

              {/* Insight Hub Column */}
              <div className="p-6 bg-white rounded-xl border border-cyan-200 shadow-xl shadow-cyan-900/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
                <div className="flex items-center gap-2 mb-6 text-brand-900 font-bold uppercase tracking-wider text-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div> Insight Hub
                </div>
                <ul className="space-y-4 text-sm text-brand-900 font-medium">
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">✓</span> Owned audience
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">✓</span> Long-term value
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">✓</span> Direct access
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">✓</span> Credibility asset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Who Insight Hub is for - Dark Section for Contrast */}
        <section className="py-24 bg-brand-900 px-4 sm:px-6 lg:px-8">
           <div className="max-w-7xl mx-auto">
             <div className="bg-brand-800 rounded-3xl p-8 md:p-20 border border-brand-700 flex flex-col md:flex-row gap-12 md:gap-20 shadow-2xl">
               <div className="md:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for organisations where credibility drives revenue</h2>
                 <p className="text-brand-300 text-lg leading-relaxed mb-8">
                   Insight Hub is designed for senior leaders and organisations that compete on expertise, trust, and long-term reputation.
                 </p>
                 <div className="inline-block px-4 py-2 bg-brand-900/50 rounded-lg text-sm font-medium text-cyan-300 border border-brand-600">
                   This is not high-volume content marketing. It’s thought leadership with purpose.
                 </div>
               </div>
               
               <div className="md:w-1/2 flex flex-col justify-center space-y-6">
                 {[
                   "A CEO or founder selling complex, high-value services",
                   "A partner or leadership team in professional services",
                   "An organisation competing with larger incumbents",
                   "A business where insight influences sales, bids, or investment"
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-start group">
                     <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-brand-700 border border-brand-500 group-hover:border-cyan-500 group-hover:bg-cyan-500/10 flex items-center justify-center transition-colors">
                       <div className="w-2 h-2 bg-brand-400 group-hover:bg-cyan-400 rounded-full transition-colors"></div>
                     </div>
                     <p className="text-white font-medium group-hover:text-cyan-100 transition-colors">{item}</p>
                   </div>
                 ))}
               </div>
             </div>
           </div>
        </section>

        {/* 7. Early Proof - White */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-900 mb-10">Already helping leaders own their thinking</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100">
                <div className="text-4xl font-bold text-cyan-600 mb-2">Grow</div>
                <p className="text-brand-600 text-sm font-medium">Subscriber bases around senior leaders</p>
              </div>
              <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100">
                <div className="text-4xl font-bold text-cyan-600 mb-2">Engage</div>
                <p className="text-brand-600 text-sm font-medium">Higher-quality engagement than social-only</p>
              </div>
              <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100">
                <div className="text-4xl font-bold text-cyan-600 mb-2">Close</div>
                <p className="text-brand-600 text-sm font-medium">Sales teams using insights directly in deals</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. What you get - Light Grey */}
        <section className="py-24 bg-brand-50 border-y border-brand-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-brand-900 mb-4">A complete thought leadership system</h2>
               <p className="text-brand-600">Insight Hub combines strategy, content, technology, and distribution.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                {[
                  "Fully managed Insight Hub",
                  "Monthly executive insight creation",
                  "Audience subscription & capture",
                  "Strategic distribution support",
                  "Clear performance reporting",
                  "Ongoing optimisation"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_rgba(0,182,237,0.8)]"></div>
                    <span className="text-lg text-brand-800 font-medium">{feature}</span>
                  </div>
                ))}
             </div>
          </div>
        </section>

        {/* FAQs - White */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto bg-white">
          <h2 className="text-3xl font-bold text-brand-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              { q: "How much time does this require from our leaders?", a: "Minimal. We conduct a 45-minute interview once a month. Our team handles the strategy, writing, editing, and distribution." },
              { q: "Do we really need a separate hub?", a: "If you want to own your audience, yes. LinkedIn owns your followers; a Hub allows you to capture emails and track specific engagement data." },
              { q: "How fast will we see results?", a: "We typically launch within 3 weeks. Audience growth is a compounding effect—expect to see meaningful subscriber data within the first quarter." }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl border border-brand-200 hover:border-brand-300 transition-colors shadow-sm">
                <h3 className="text-lg font-bold text-brand-900 mb-2">{faq.q}</h3>
                <p className="text-brand-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing - Light Grey */}
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-50 border-t border-brand-200">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-brand-900 mb-4">Transparent Pricing</h2>
            <p className="text-brand-600 mb-8 text-lg">
              Packages typically start from <span className="font-bold text-brand-900">$2,500/mo</span> for a fully managed service. 
            </p>
            <p className="text-sm text-brand-500 max-w-lg mx-auto">
              Includes strategy, platform management, content creation, and distribution. Custom scopes available for enterprise teams.
            </p>
          </div>
        </section>

        {/* Primary CTA / Form - Dark */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-brand-900">
          <div className="max-w-5xl mx-auto bg-brand-800 rounded-3xl border border-brand-700 p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12">
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build a credibility asset your organisation actually owns</h2>
              <p className="text-brand-300 text-lg mb-8 leading-relaxed">
                If thought leadership matters to your growth, it deserves more than a timeline. 
                Let’s talk about how Insight Hub could work for your organisation.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-brand-300 text-sm">
                   <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/10 rounded-full border border-cyan-500/30 text-cyan-400">✓</div>
                   No obligation discovery call
                 </div>
                 <div className="flex items-center gap-3 text-brand-300 text-sm">
                   <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/10 rounded-full border border-cyan-500/30 text-cyan-400">✓</div>
                   Built for long-term credibility
                 </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Full Name</label>
                  <input type="text" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="Name" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Email</label>
                    <input type="email" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="work@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Phone</label>
                    <input type="tel" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="+1 ..." />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Business Name</label>
                  <input type="text" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="Company" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Job Title</label>
                    <input type="text" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="Title" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Executives</label>
                    <select className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors appearance-none text-sm">
                      <option className="bg-brand-900 text-white">1-2</option>
                      <option className="bg-brand-900 text-white">3-5</option>
                      <option className="bg-brand-900 text-white">6-10</option>
                      <option className="bg-brand-900 text-white">10+</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <Button fullWidth className="py-4 text-base shadow-lg shadow-cyan-900/20">Book a demo</Button>
                </div>
              </form>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}

export default App;