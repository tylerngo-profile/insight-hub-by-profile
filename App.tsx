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

  const trustedLogos = [
    { name: 'Stanmore', src: '/clients/stanmore.png' },
    { name: 'Twyn', src: '/clients/twyn.png' },
    { name: 'Virtualstock', src: '/clients/virtualstock.png' },
    { name: 'Vonrosen', src: '/clients/von-rosen.png' },
    { name: 'Ambank', src: '/clients/am-bank.png' },
    { name: 'Dominus', src: '/clients/dominus.png' },
    { name: 'Gymshark', src: '/clients/gymshark.png' },
    { name: 'JML', src: '/clients/jml.png' },
    { name: 'Lottoland', src: '/clients/lottoland.png' },
    { name: 'Matchingham Games', src: '/clients/matchingham.png' },
    { name: 'Oracle', src: '/clients/oracle-1-logo-png-transparent.png' },
    { name: 'Parabellum Investments', src: '/clients/parabellum-investments.png' },
    { name: 'Paul Epstein Productions', src: '/clients/paul-epstein-productions.png' },
    { name: 'Payally', src: '/clients/payally.png' },
    { name: 'Sane', src: '/clients/sane.png' }
  ];

  const marqueeLogos = [...trustedLogos, ...trustedLogos];

  const insightSections = [
    {
      eyebrow: 'Platform',
      title: 'Managed Vantage Hub',
      description: 'A fully branded, SEO-optimised site set up and managed for you.',
      highlights: ['Custom hub & URL', 'SEO-ready structure', 'Ongoing management'],
      panelTitle: 'Launch-ready hub',
      panelLines: ['Brand tokens & typography', 'Insight templates', 'Subscriber capture'],
      panelCta: 'Go live in 3 weeks',
      image: '/illustrations/hub.svg',
      imageAlt: 'Vantage platform preview',
      gradient: 'from-cyan-50 via-white to-brand-50'
    },
    {
      eyebrow: 'Editorial',
      title: 'Executive Creation',
      description: 'We interview your leaders and write insights in their authentic voice.',
      highlights: ['Monthly executive interviews', 'Narrative-led drafts', 'Leader-approved edits'],
      panelTitle: 'Interview to publish',
      panelLines: ['45-min capture call', 'Draft in 5 days', 'Ready for release'],
      panelCta: 'Zero writing burden',
      image: '/illustrations/interview.svg',
      imageAlt: 'Executive interview workflow',
      gradient: 'from-brand-50 via-white to-cyan-50'
    },
    {
      eyebrow: 'Audience',
      title: 'Audience Ownership',
      description: 'Capture emails and build a subscriber list you actually own.',
      highlights: ['First-party data', 'Subscriber growth', 'Direct access'],
      panelTitle: 'Subscriber capture',
      panelLines: ['Smart forms', 'Lead magnets', 'Consent-first tracking'],
      panelCta: 'Own the relationship',
      image: '/illustrations/audience.svg',
      imageAlt: 'Audience growth and subscriber capture',
      gradient: 'from-cyan-50 via-white to-cyan-100'
    },
    {
      eyebrow: 'Distribution',
      title: 'Strategic Distribution',
      description: 'Campaigns across LinkedIn, email, and video to drive traffic.',
      highlights: ['Multi-channel playbook', 'Executive visibility', 'Consistent cadence'],
      panelTitle: 'Distribution plan',
      panelLines: ['LinkedIn snippets', 'Email sequences', 'Video cutdowns'],
      panelCta: 'Reach the right buyers',
      image: '/illustrations/distribution.svg',
      imageAlt: 'Multi-channel distribution network',
      gradient: 'from-brand-50 via-white to-cyan-50'
    },
    {
      eyebrow: 'Analytics',
      title: 'Performance Tracking',
      description: 'See exactly which companies are reading your content.',
      highlights: ['Company-level insights', 'Content ROI', 'Engagement signals'],
      panelTitle: 'Insight analytics',
      panelLines: ['Company visits', 'Top content', 'Intent signals'],
      panelCta: 'Prove credibility',
      image: '/illustrations/analytics.svg',
      imageAlt: 'Content performance analytics',
      gradient: 'from-cyan-50 via-white to-brand-50'
    },
    {
      eyebrow: 'Compounding',
      title: 'Compounding Asset',
      description: 'Content remains accessible and searchable, building value over time.',
      highlights: ['Evergreen content', 'Search visibility', 'Long-term trust'],
      panelTitle: 'Compounding value',
      panelLines: ['Searchable library', 'Thought leadership archive', 'Credibility flywheel'],
      panelCta: 'Build over time',
      image: '/illustrations/compounding.svg',
      imageAlt: 'Compounding credibility over time',
      gradient: 'from-brand-50 via-white to-cyan-50'
    }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-brand-900 selection:bg-brand-900 selection:text-white">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 bg-grid opacity-[0.16]"></div>
      <div aria-hidden="true" className="pointer-events-none fixed -top-20 left-[6%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-float-slow"></div>
      <div aria-hidden="true" className="pointer-events-none fixed top-[35%] right-[-8%] h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px] animate-float-reverse"></div>
      <div aria-hidden="true" className="pointer-events-none fixed bottom-[-12%] left-[30%] h-80 w-80 rounded-full bg-brand-900/10 blur-[120px] animate-float-medium"></div>

      {/* Navigation - Light theme now */}
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-brand-100 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <div className="flex items-center gap-3 rounded-2xl border border-brand-200 bg-white/90 px-4 py-2 shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-cyan-500 shadow-[0_10px_20px_rgba(0,182,237,0.35)]"></div>
                <div className="text-left">
                  <div className="text-lg font-bold text-brand-900 leading-none">Vantage</div>
                  <div className="mt-1 flex items-center gap-2 text-[11px] tracking-[0.08em] text-brand-400">
                    <img
                      src="/profile/profile-logo.png"
                      alt="Profile logo"
                      className="h-3.5 w-3.5 object-contain"
                    />
                    by Profile
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('solution')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">Why Vantage</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">How it works</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium text-brand-600 hover:text-brand-900 transition-colors">Pricing</button>
              <Button onClick={() => scrollToSection('contact')} variant="primary" className="!py-2 !px-5 !text-sm">Book a demo</Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero stays dark for B2B impact */}
        <Hero 
          onBookDemo={() => scrollToSection('contact')} 
          onSeeHow={() => scrollToSection('how-it-works')} 
        />

        {/* Trusted Logos */}
        <section className="relative py-12 md:py-16 bg-white/80 border-b border-brand-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-500 text-center">Trusted by</p>
          </div>
          <div className="marquee">
            <ul className="marquee-track px-4 sm:px-6 lg:px-8 list-none m-0 p-0">
              {marqueeLogos.map((logo, idx) => (
                <li key={`${logo.name}-${idx}`} className="logo-item">
                  <img
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    className="logo-img"
                    loading="lazy"
                    onError={(event) => {
                      const target = event.currentTarget;
                      const parent = target.parentElement;
                      if (parent) {
                        parent.classList.add('is-fallback');
                      }
                      target.style.display = 'none';
                    }}
                  />
                  <span className="logo-text">{logo.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 2. The Problem - Light Grey Background */}
        <section id="problem" className="py-24 md:py-32 bg-brand-50 border-y border-brand-100 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="md:grid md:grid-cols-2 md:gap-20 items-center">
              <div className="mb-12 md:mb-0">
                <div className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-600 text-xs font-semibold mb-6 uppercase tracking-wide">
                  The Challenge
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8 leading-tight">
                  Thought leadership is working. But it's working too hard on <span className="text-cyan-600">rented platforms.</span>
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
                    Thought leadership shouldn't just be published. It should be owned.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-brand-200 shadow-sm">
                  <img
                    src="/illustrations/rented-platforms.svg"
                    alt="Rented platforms fragment the audience"
                    className="w-full h-40 object-contain"
                    loading="lazy"
                  />
                  <p className="mt-4 text-sm text-brand-500">
                    Visibility fades when insights live on rented platforms.
                  </p>
                </div>
                <div className="p-8 rounded-xl bg-white border border-brand-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">No owned audience</h3>
                  <p className="text-brand-500">You don't own the data. You can't export your followers.</p>
                </div>
                <div className="p-8 rounded-xl bg-white border border-brand-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">No long-term content asset</h3>
                  <p className="text-brand-500">High-effort posts disappear after 24 hours.</p>
                </div>
                <div className="p-8 rounded-xl bg-white border border-brand-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <h3 className="text-lg font-bold text-brand-900 mb-2">No clear credibility link</h3>
                  <p className="text-brand-500">Hard to prove impact on complex sales cycles.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. What is Vantage - White Background */}
        <section id="solution" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center mb-20">
             <div className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-6 uppercase tracking-wide">
                  Introducing Vantage
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-900 mb-8">A dedicated home for your leaders' insight</h2>
            <p className="text-xl text-brand-600 leading-relaxed font-light">
              Vantage is a branded destination where your organisation's thinking lives in one place. 
              We help you capture sharp executive perspectives, publish them to a dedicated hub, and build a direct relationship with the people who matter most.
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {insightSections.map((item, idx) => (
              <div key={item.title} className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 mb-4">
                    <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                    {item.eyebrow}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-lg text-brand-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="mb-6">
                    <div className="text-xs uppercase tracking-[0.25em] text-brand-400 mb-3">Key points</div>
                    <div className="flex flex-wrap gap-3">
                      {item.highlights.map((point) => (
                        <span
                          key={point}
                          className="px-4 py-2 rounded-full bg-white border border-brand-200 text-sm text-brand-600 shadow-sm"
                        >
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-brand-500 border-l-4 border-cyan-400 pl-4">
                    Built to strengthen executive credibility without adding workload.
                  </div>
                </div>

                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <div className={`relative rounded-[32px] p-8 md:p-10 bg-gradient-to-br ${item.gradient} border border-brand-100 shadow-[0_25px_60px_rgba(15,23,42,0.08)]`}>
                    <div className="absolute inset-6 rounded-[24px] border border-dashed border-brand-200/70"></div>
                    <div className="relative bg-white/85 rounded-2xl border border-white/70 p-6 md:p-8 shadow-xl">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-36 md:h-40 object-contain rounded-xl bg-white border border-brand-100 p-4 mb-6"
                        loading="lazy"
                      />
                      <div className="text-sm font-semibold text-brand-700">{item.panelTitle}</div>
                      <div className="mt-4 space-y-3">
                        {item.panelLines.map((line) => (
                          <div key={line} className="flex items-center gap-3 text-sm text-brand-600">
                            <span className="h-2 w-2 rounded-full bg-cyan-500"></span>
                            {line}
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1">
                        {item.panelCta}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. How Vantage Works - Light Grey */}
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
                <div key={idx} className="relative z-10 bg-brand-50 md:bg-transparent pt-8 md:pt-0 group text-center md:text-left transition-transform duration-300 hover:-translate-y-1">
                  <div className="w-24 h-24 bg-white border-4 border-brand-100 group-hover:border-cyan-400 rounded-full flex items-center justify-center text-2xl font-bold text-brand-900 mx-auto md:mx-0 mb-6 z-10 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                    <span className="text-brand-300 group-hover:text-cyan-600 transition-colors">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Vantage vs LinkedIn - White */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">LinkedIn distributes. Vantage compounds.</h2>
              <p className="text-lg text-brand-600 mb-8 leading-relaxed">
                LinkedIn remains a powerful distribution channel. But on its own, it was never designed to help you build an owned credibility asset.
              </p>
              <div className="p-6 bg-brand-50 rounded-lg border-l-4 border-cyan-500">
                <p className="text-brand-800 font-medium italic">
                  "LinkedIn is the distribution layer. Vantage is the foundation."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* LinkedIn Column */}
              <div className="p-6 bg-brand-50 rounded-xl border border-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="flex items-center gap-2 mb-6 text-brand-500 font-semibold uppercase tracking-wider text-sm">
                  <div className="w-2 h-2 rounded-full bg-brand-400"></div> LinkedIn Only
                </div>
                <ul className="space-y-4 text-sm text-brand-500">
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">x</span> Rented audience
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">x</span> Short lifespan
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">x</span> Algorithm reliance
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-red-500 font-bold">x</span> No data ownership
                  </li>
                </ul>
              </div>

              {/* Vantage Column */}
              <div className="p-6 bg-white rounded-xl border border-cyan-200 shadow-xl shadow-cyan-900/5 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
                <div className="flex items-center gap-2 mb-6 text-brand-900 font-bold uppercase tracking-wider text-sm">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div> Vantage
                </div>
                <ul className="space-y-4 text-sm text-brand-900 font-medium">
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">+</span> Owned audience
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">+</span> Long-term value
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">+</span> Direct access
                  </li>
                  <li className="flex gap-3 items-center">
                    <span className="text-cyan-600 font-bold">+</span> Credibility asset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Who Vantage is for - Dark Section for Contrast */}
        <section className="py-24 bg-brand-900 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
           <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-12 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl animate-float-slow"></div>
           <div className="max-w-7xl mx-auto relative z-10">
             <div className="bg-brand-800 rounded-3xl p-8 md:p-20 border border-brand-700 flex flex-col md:flex-row gap-12 md:gap-20 shadow-2xl">
               <div className="md:w-1/2">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Built for organisations where credibility drives revenue</h2>
                 <p className="text-brand-300 text-lg leading-relaxed mb-8">
                   Vantage is designed for senior leaders and organisations that compete on expertise, trust, and long-term reputation.
                 </p>
                 <div className="inline-block px-4 py-2 bg-brand-900/50 rounded-lg text-sm font-medium text-cyan-300 border border-brand-600">
                   This is not high-volume content marketing. It's thought leadership with purpose.
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
            <h2 className="text-2xl font-bold text-brand-900 mb-4">Early commercial signals from Vantage engagements</h2>
            <p className="text-brand-600 mb-10">Illustrative outcomes based on active B2B thought leadership programmes.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl font-bold text-cyan-600 mb-2">+30%</div>
                <p className="text-brand-600 text-sm font-medium">Returning visitors to owned insight content within first 8–12 weeks</p>
              </div>
              <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl font-bold text-cyan-600 mb-2">2–4x</div>
                <p className="text-brand-600 text-sm font-medium">Higher depth of engagement vs social-only posting patterns</p>
              </div>
              <div className="p-8 rounded-2xl bg-brand-50 border border-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-4xl font-bold text-cyan-600 mb-2">Pipeline</div>
                <p className="text-brand-600 text-sm font-medium">Clearer linkage between executive content and target-account conversations</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. What you get - Light Grey */}
        <section className="py-24 bg-brand-50 border-y border-brand-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-brand-900 mb-4">A complete thought leadership system</h2>
               <p className="text-brand-600">Vantage combines strategy, content, technology, and distribution.</p>
             </div>
             
             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-8">
                {[
                  "Fully managed Vantage",
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

        {/* Testimonials */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-900 via-brand-900 to-cyan-900/90 text-white relative overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(0,182,237,0.25),transparent_55%)]"></div>
          <div aria-hidden="true" className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]"></div>
          <div className="max-w-6xl mx-auto relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by leadership teams in complex B2B sectors.</h2>
            <p className="text-brand-300 max-w-2xl mx-auto">Proof from organisations using Vantage to turn insight into measurable commercial signals.</p>
          </div>

          <div className="max-w-4xl mx-auto mt-14 relative z-10">
            <div className="rounded-[32px] bg-white/10 border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.35)] p-10 md:p-12 text-center backdrop-blur-sm">
              <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-cyan-300 to-cyan-600 flex items-center justify-center text-brand-900 font-bold text-lg">
                IH
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                "Vantage turned our leaders' thinking into a compounding asset. We now see consistent engagement from target accounts and a clear signal in the pipeline."
              </p>
              <div className="mt-6 text-sm text-brand-200">Morgan Hale, CEO at Northbridge Advisory</div>
              <div className="mt-6 flex items-center justify-center gap-2 text-white/50">
                <span className="h-2 w-2 rounded-full bg-white/60"></span>
                <span className="h-2 w-2 rounded-full bg-white/30"></span>
                <span className="h-2 w-2 rounded-full bg-white/30"></span>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto mt-12 relative z-10">
            <p className="text-center text-sm uppercase tracking-[0.35em] text-white/60 mb-6">Many teams already trust us</p>
            <div className="marquee marquee-white">
              <ul className="marquee-track px-4 sm:px-6 lg:px-8 list-none m-0 p-0">
                {marqueeLogos.map((logo, idx) => (
                  <li key={`${logo.name}-dark-${idx}`} className="logo-item">
                    <img
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      className="logo-img"
                      loading="lazy"
                      onError={(event) => {
                        const target = event.currentTarget;
                        const parent = target.parentElement;
                        if (parent) {
                          parent.classList.add('is-fallback');
                        }
                        target.style.display = 'none';
                      }}
                    />
                    <span className="logo-text">{logo.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQs - White */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-12 text-center">
              FAQs<span className="text-cyan-500">.</span>
            </h2>
            <div className="divide-y divide-brand-200/70">
            {[
              { q: "How much time does this require from our leaders?", a: "Minimal. We conduct a 45-minute interview once a month. Our team handles the strategy, writing, editing, and distribution." },
              { q: "Do we really need a separate hub?", a: "If you want to own your audience, yes. LinkedIn owns your followers; a Hub allows you to capture emails and track specific engagement data." },
              { q: "How fast will we see results?", a: "We typically launch within 3 weeks. Audience growth is a compounding effect - expect to see meaningful subscriber data within the first quarter." }
            ].map((faq, i) => (
              <details key={i} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="text-lg md:text-xl font-semibold text-brand-900">{faq.q}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 text-brand-500 transition-all duration-300 group-open:border-cyan-300 group-open:text-cyan-600">
                    <span className="text-xl leading-none group-open:hidden">+</span>
                    <span className="text-xl leading-none hidden group-open:inline">×</span>
                  </span>
                </summary>
                <div className="mt-4 max-w-3xl text-brand-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
            </div>
          </div>
        </section>

        {/* Pricing - Light Grey */}
        <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-50 border-t border-brand-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-500 mb-4">Pricing</p>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 mb-4">Pricing</h2>
              <p className="text-xl text-brand-700 font-semibold">From £1,500 per month (ex. VAT)</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="rounded-3xl border border-brand-200 bg-white shadow-[0_30px_70px_rgba(15,23,42,0.08)] p-8 md:p-12">
                  <img
                    src="/illustrations/pricing.svg"
                    alt="Pricing overview"
                    className="w-full h-40 object-contain rounded-2xl bg-brand-50 border border-brand-100 p-4 mb-8"
                    loading="lazy"
                  />
                  <p className="text-lg text-brand-600 leading-relaxed mb-8">
                    Vantage is a long-term thought leadership infrastructure, designed for founders and senior leaders who need credibility, visibility, and a fully owned audience around their expertise.
                  </p>

                  <div className="mb-6 text-sm uppercase tracking-[0.3em] text-brand-400">The core package includes</div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "A dedicated Vantage website, built to convert high-intent B2B audiences",
                      "Ongoing strategy, writing, and management of a monthly insight newsletter",
                      "One high-impact LinkedIn post per month, designed to drive traffic to the Hub",
                      "Paid LinkedIn promotion management for targeted distribution",
                      "Continuous optimization based on audience engagement and performance signals"
                    ].map((item) => (
                      <div key={item} className="flex gap-3 items-start rounded-2xl border border-brand-100 bg-brand-50/60 p-4">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(0,182,237,0.6)]"></div>
                        <span className="text-brand-700 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5 text-sm text-brand-600">
                    A paid media budget is recommended separately and scaled based on objectives.
                  </div>

                  <div className="mt-4 rounded-2xl border border-brand-200 bg-white p-5 text-sm text-brand-700">
                    No long-term contract required for pilot phase.
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-brand-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-400 mb-3">Set-up & launch</div>
                  <p className="text-brand-700 leading-relaxed text-sm">
                    A one-off launch phase typically applies, covering strategic set-up, build, and multimedia creation.
                    This may be waived for selected early partners.
                  </p>
                </div>

                <div className="rounded-3xl border border-brand-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-400 mb-4">Optional extensions</div>
                  <div className="space-y-3 text-sm text-brand-700">
                    {[
                      "Additional posting cadence and paid amplification",
                      "Video-first or multimedia-led thought leadership",
                      "Multi-executive or multi-author Vantage hubs",
                      "Integration with broader PR and media programs"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl border border-brand-200 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-400 mb-4">Ideal for</div>
                  <div className="space-y-3 text-sm text-brand-700">
                    {[
                      "Founder-led and partner-led B2B firms",
                      "Teams selling complex, high-value services",
                      "Organisations where trust influences deal velocity"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 h-2 w-2 rounded-full bg-cyan-500"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Primary CTA / Form - Dark */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-brand-900 overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-16 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl animate-float-medium"></div>
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px] animate-float-reverse"></div>
          <div className="max-w-5xl mx-auto bg-brand-800 rounded-3xl border border-brand-700 p-8 md:p-16 shadow-2xl flex flex-col md:flex-row gap-12 relative z-10">
            
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Build a credibility asset your organisation actually owns</h2>
              <p className="text-brand-300 text-lg mb-8 leading-relaxed">
                If thought leadership matters to your growth, it deserves more than a timeline. 
                Let's talk about how Vantage could work for your organisation.
              </p>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-brand-300 text-sm">
                   <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/10 rounded-full border border-cyan-500/30 text-cyan-400">+</div>
                   No obligation discovery call
                 </div>
                 <div className="flex items-center gap-3 text-brand-300 text-sm">
                   <div className="w-5 h-5 flex items-center justify-center bg-cyan-500/10 rounded-full border border-cyan-500/30 text-cyan-400">+</div>
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Work Email</label>
                    <input type="email" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Business Name</label>
                    <input type="text" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="Company" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Primary Goal</label>
                    <select className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors appearance-none text-sm">
                      <option className="bg-brand-900 text-white">Grow owned audience</option>
                      <option className="bg-brand-900 text-white">Build executive authority</option>
                      <option className="bg-brand-900 text-white">Support pipeline with thought leadership</option>
                    </select>
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

                <div>
                  <label className="block text-xs font-semibold text-brand-400 uppercase tracking-wider mb-1">Phone (optional)</label>
                  <input type="tel" className="w-full bg-brand-900/50 border border-brand-600 rounded p-3 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors placeholder-brand-600" placeholder="+44 ..." />
                </div>

                <div className="pt-2">
                  <Button fullWidth className="py-4 text-base shadow-lg shadow-cyan-900/20">Book a demo</Button>
                  <p className="mt-3 text-xs text-brand-400">We usually reply within one business day.</p>
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


