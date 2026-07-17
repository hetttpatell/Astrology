import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import {
  Stars, Compass, BookOpen, ChevronRight, Phone, Calendar,
  MapPin, Clock, Award, Users, Globe, Shield, Heart, Gem,
  Flame, Home as HomeIcon, Building, Briefcase, Scroll, Zap,
  Star, ChevronLeft, Play, ArrowRight
} from 'lucide-react';
import { getCmsData } from '../data/cmsHelper';

// Service icon mapper
const serviceIconMap = {
  scroll: Scroll, heart: Heart, zap: Zap, rings: Heart,
  briefcase: Briefcase, shield: Shield, home: HomeIcon,
  building: Building, book: BookOpen, flame: Flame,
  gem: Gem, calendar: Calendar
};

const Home = () => {
  const [cmsData, setCmsData] = useState(getCmsData());
  const [activeZodiacTab, setActiveZodiacTab] = useState('daily');
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const heroTextRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);

  // Sync CMS data on custom event
  useEffect(() => {
    const handleCmsChange = () => setCmsData(getCmsData());
    window.addEventListener('cmsDataChange', handleCmsChange);
    return () => window.removeEventListener('cmsDataChange', handleCmsChange);
  }, []);

  // GSAP animations
  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    );
    if (cardsRef.current) {
      gsap.fromTo(
        cardsRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out', delay: 0.3 }
      );
    }
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex(prev =>
        prev < (cmsData.testimonials?.length || 1) - 1 ? prev + 1 : 0
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [cmsData.testimonials]);

  // Group videos for display
  const kathakarVideos = cmsData.videos.filter(v => v.category === 'kathakar').slice(0, 1);
  const astrologyVideos = cmsData.videos.filter(v => v.category === 'astrology').slice(0, 1);
  const vastuVideos = cmsData.videos.filter(v => v.category === 'vaastu').slice(0, 1);
  const displayedVideos = [...kathakarVideos, ...astrologyVideos, ...vastuVideos];

  const renderStars = (count) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className={i < count ? 'star-filled fill-current' : 'star-empty'} />
      ))}
    </div>
  );

  return (
    <div className="relative overflow-hidden">
      


      {/* ══════════════════════════════════════════════
          SECTION 1: HERO BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Hero Text */}
          <div ref={heroTextRef} className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="text-accent-kathakar uppercase tracking-widest text-[11px] font-semibold font-body border-l-2 border-accent-kathakar pl-3">
              🙏 Pranipat & Welcome
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-foundation-ink leading-[1.08] tracking-tight">
              {cmsData.about.tagline}
            </h1>
            <p className="text-sm sm:text-base text-foundation-ink/75 leading-relaxed font-body max-w-xl">
              {cmsData.about.bioShort}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-kathakar text-white font-semibold text-xs tracking-wider uppercase hover:bg-accent-kathakar/90 transition-all shadow-lg hover:shadow-xl"
              >
                <Phone size={14} />
                Book Consultation
              </Link>
              <a
                href="#video-section"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foundation-line text-foundation-ink font-semibold text-xs tracking-wider uppercase hover:bg-foundation-ink/5 transition-all"
              >
                <Play size={14} />
                Watch Latest Katha
              </a>
            </div>

            {/* Quick trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-4 text-[11px] font-body text-foundation-ink/60">
              <div className="flex items-center gap-1.5">
                <Award size={14} className="text-accent-kathakar" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={14} className="text-accent-astrologer" />
                <span>10,000+ Consultations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe size={14} className="text-accent-vastu" />
                <span>50+ Cities</span>
              </div>
            </div>
          </div>

          {/* Hero Portrait */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="absolute inset-0 bg-accent-kathakar/8 rounded-3xl -rotate-3 scale-105 pointer-events-none" />
            <div className="absolute inset-0 bg-accent-vastu/6 rounded-3xl rotate-2 scale-102 pointer-events-none" />
            <div className="relative rounded-3xl p-3 bg-foundation-bg shadow-2xl max-w-sm w-full border border-foundation-line/40">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={cmsData.about.avatar}
                  alt={cmsData.about.name}
                  className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-foundation-ink text-foundation-bg px-5 py-2 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap z-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={10} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider">Trusted by Thousands</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 2: ASTROLOGER PROFILE CARD (Inspired by Chirag Daruwalla card)
      ══════════════════════════════════════════════ */}
      <section className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/50 backdrop-blur-sm border border-foundation-line/40 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-accent-kathakar/20 shadow-md shrink-0">
            <img
              src={cmsData.about.avatar}
              alt={cmsData.about.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200";
              }}
            />
          </div>
          <div className="flex-grow text-center sm:text-left">
            <h3 className="font-display font-bold text-xl text-foundation-ink">{cmsData.about.name}</h3>
            <p className="text-xs text-foundation-ink/60 font-body mt-0.5">Vedic Astrologer • Vaastu Expert • Bhagwat Kathakar</p>
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-2">
              {renderStars(5)}
              <span className="text-[11px] text-foundation-ink/50 font-body">5.0 (2,400+ reviews)</span>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-3 text-[11px] font-body text-foundation-ink/60">
              <span className="flex items-center gap-1"><Award size={12} className="text-accent-kathakar" /> 20+ Years Exp.</span>
              <span className="flex items-center gap-1"><Globe size={12} className="text-accent-vastu" /> Hindi, Gujarati, English</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> Ahmedabad, Gujarat</span>
            </div>
          </div>
          <Link
            to="/contact"
            className="shrink-0 px-6 py-3 bg-accent-kathakar text-white rounded-xl font-semibold text-sm hover:bg-accent-kathakar/90 transition-all shadow-md hover:shadow-lg"
          >
            Book Now
          </Link>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 3: THREE PILLARS (Service Cards)
      ══════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-vastu uppercase tracking-widest text-[10px] font-bold font-body">
            Domains of Practice
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
            The Three Spiritual Pillars
          </h2>
          <p className="text-sm text-foundation-ink/70 font-body mt-3 leading-relaxed">
            Integrating cosmic alignments, spatial energy harmony, and scriptural guidance to align your life's path.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Astrology */}
          <Link
            to="/astrology"
            className="service-card group relative bg-white/80 rounded-2xl border border-foundation-line/30 border-t-4 border-t-amber-500 p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[350px]"
          >
            <div>
              <div className="flex items-baseline justify-between border-b border-foundation-line/20 pb-4 mb-6">
                <span className="font-display text-5xl font-bold text-amber-500/20 leading-none">01</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-600/80 font-body">Jyotish Shastra</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foundation-ink mb-3 group-hover:text-amber-600 transition-colors">Vedic Astrology</h3>
              <p className="text-xs sm:text-sm text-foundation-ink/75 font-body leading-relaxed">
                Unlock planetary alignments, dosh diagnostics (Manglik, Pitra, Kaal Sarp), and discover customized gemstone remedies.
              </p>
            </div>
            <div className="text-xs font-bold text-amber-600 tracking-wider uppercase mt-6 pt-4 border-t border-foundation-line/20 font-body flex items-center justify-between">
              <span>View Services</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-lg leading-none">&rarr;</span>
            </div>
          </Link>

          {/* Vaastu */}
          <Link
            to="/vaastu"
            className="service-card group relative bg-white/80 rounded-2xl border border-foundation-line/30 border-t-4 border-t-accent-vastu p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[350px]"
          >
            <div>
              <div className="flex items-baseline justify-between border-b border-foundation-line/20 pb-4 mb-6">
                <span className="font-display text-5xl font-bold text-accent-vastu/20 leading-none">02</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-vastu/80 font-body">Spatial Energy</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foundation-ink mb-3 group-hover:text-accent-vastu transition-colors">Vaastu-Sastra</h3>
              <p className="text-xs sm:text-sm text-foundation-ink/75 font-body leading-relaxed">
                Harmonize modern structures, commercial centers, and residences using the five core elements. Non-destructive corrections.
              </p>
            </div>
            <div className="text-xs font-bold text-accent-vastu tracking-wider uppercase mt-6 pt-4 border-t border-foundation-line/20 font-body flex items-center justify-between">
              <span>Consult Space</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-lg leading-none">&rarr;</span>
            </div>
          </Link>

          {/* Kathakar */}
          <Link
            to="/kathakar"
            className="service-card group relative bg-white/80 rounded-2xl border border-foundation-line/30 border-t-4 border-t-accent-kathakar p-8 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[350px]"
          >
            <div>
              <div className="flex items-baseline justify-between border-b border-foundation-line/20 pb-4 mb-6">
                <span className="font-display text-5xl font-bold text-accent-kathakar/20 leading-none">03</span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-accent-kathakar/80 font-body">Spiritual Katha</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foundation-ink mb-3 group-hover:text-accent-kathakar transition-colors">Bhagwat Kathakar</h3>
              <p className="text-xs sm:text-sm text-foundation-ink/75 font-body leading-relaxed">
                Immerse in spiritual transformation through Shrimad Bhagwat, Shiv Puran, and Ram Katha events.
              </p>
            </div>
            <div className="text-xs font-bold text-accent-kathakar tracking-wider uppercase mt-6 pt-4 border-t border-foundation-line/20 font-body flex items-center justify-between">
              <span>View Repertoire</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 text-lg leading-none">&rarr;</span>
            </div>
          </Link>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 4: ZODIAC SIGNS GRID
      ══════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-accent-astrologer uppercase tracking-widest text-[10px] font-bold font-body">
            Daily Horoscope
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
            Today's Rashifal
          </h2>
          <p className="text-sm text-foundation-ink/70 font-body mt-3">
            Select your zodiac sign to read today's prediction by Dr. Jalpesh Mehta
          </p>
        </div>

        {/* Zodiac Tab Bar */}
        <div className="flex justify-center gap-2 mb-10">
          {['daily', 'weekly', 'monthly'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveZodiacTab(tab)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeZodiacTab === tab
                  ? 'bg-accent-kathakar text-white shadow-md'
                  : 'bg-foundation-ink/5 text-foundation-ink/60 hover:bg-foundation-ink/10'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {(cmsData.zodiacSigns || []).map((sign) => (
            <div
              key={sign.id}
              className="zodiac-card bg-white/50 backdrop-blur-sm border border-foundation-line/30 rounded-xl p-4 text-center cursor-pointer group"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{sign.symbol}</div>
              <h4 className="font-display font-bold text-sm text-foundation-ink">{sign.nameEn}</h4>
              <p className="text-[10px] text-foundation-ink/50 font-body">{sign.name}</p>
              <p className="text-[11px] text-foundation-ink/65 font-body mt-2 leading-relaxed line-clamp-3">
                {sign.prediction}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 5: SERVICES OFFERED GRID
      ══════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-accent-vastu uppercase tracking-widest text-[10px] font-bold font-body">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
            Astrology & Spiritual Services
          </h2>
          <p className="text-sm text-foundation-ink/70 font-body mt-3">
            Comprehensive Vedic guidance for every aspect of life
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {(cmsData.services || []).map((service) => {
            const IconComponent = serviceIconMap[service.icon] || Stars;
            const domainColor = service.domain === 'astrology'
              ? 'text-accent-astrologer bg-accent-astrologer/10 border-accent-astrologer/20'
              : service.domain === 'vaastu'
              ? 'text-accent-vastu bg-accent-vastu/10 border-accent-vastu/20'
              : 'text-accent-kathakar bg-accent-kathakar/10 border-accent-kathakar/20';

            return (
              <div
                key={service.id}
                className="service-card bg-white/40 backdrop-blur-sm border border-foundation-line/30 rounded-xl p-3.5 sm:p-5 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center border ${domainColor} mb-3 sm:mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-foundation-ink mb-1 sm:mb-1.5 leading-snug">{service.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-foundation-ink/60 font-body leading-relaxed line-clamp-3 sm:line-clamp-none">{service.description}</p>
                </div>
                <div className="mt-3 pt-2.5 sm:pt-3 border-t border-foundation-line/20">
                  <Link
                    to="/contact"
                    className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-accent-kathakar hover:text-accent-kathakar/80 flex items-center gap-1"
                  >
                    Inquire Now <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 6: STATS / WHY CHOOSE US
      ══════════════════════════════════════════════ */}
      <section className="py-14 bg-foundation-ink text-foundation-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold font-display">Why Choose Dr. Jalpesh Mehta?</h2>
            <p className="text-sm text-foundation-bg/60 font-body mt-2">Trusted by thousands of families across India</p>
          </div>
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
            {(cmsData.stats || []).map((stat, index) => (
              <div key={index} className="text-center animate-count-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="text-4xl sm:text-5xl font-display font-bold text-accent-kathakar mb-2">{stat.value}</div>
                <div className="text-xs uppercase tracking-wider text-foundation-bg/60 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 7: VIDEO SECTION
      ══════════════════════════════════════════════ */}
      <section id="video-section" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-baseline justify-between mb-10">
          <div>
            <span className="text-accent-kathakar uppercase tracking-widest text-[10px] font-bold font-body">
              Latest Video Discourses
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
              From BHAKTI OFFICIAL Feed
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@KathakarDrJalpeshMehtta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-accent-kathakar hover:underline flex items-center gap-1.5 tracking-wider uppercase font-body mt-2 md:mt-0"
          >
            Subscribe on YouTube <ChevronRight size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {displayedVideos.map((video) => (
            <div key={video.id} className="service-card bg-white/40 backdrop-blur-sm border border-foundation-line/30 rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-video bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider mb-3 ${
                    video.category === 'kathakar' ? 'bg-accent-kathakar/10 text-accent-kathakar' :
                    video.category === 'vaastu' ? 'bg-accent-vastu/10 text-accent-vastu' :
                    'bg-accent-astrologer/10 text-accent-astrologer'
                  }`}>
                    {video.category === 'kathakar' ? 'Bhagwat Katha' :
                     video.category === 'vaastu' ? 'Vaastu Shastra' : 'Vedic Astrology'}
                  </span>
                  <h4 className="font-display font-bold text-sm text-foundation-ink line-clamp-2 leading-snug">
                    {video.title}
                  </h4>
                </div>
                <div className="text-[11px] text-foundation-ink/50 mt-3 flex items-center justify-between font-body">
                  <span>BHAKTI OFFICIAL</span>
                  <span>Duration: {video.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shorts Row */}
        <div className="mt-14">
          <h3 className="font-display text-xl font-bold text-foundation-ink border-b border-foundation-line/30 pb-3 mb-8">
            Featured Daily Shorts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {cmsData.shorts.slice(0, 4).map((short) => (
              <div key={short.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-foundation-line bg-black shadow-sm group">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${short.youtubeId}`}
                  title={short.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 pointer-events-none">
                  <p className="text-[10px] text-slate-100 font-medium font-body leading-snug line-clamp-2">
                    {short.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 8: UPCOMING EVENTS
      ══════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-kathakar uppercase tracking-widest text-[10px] font-bold font-body">
            Mark Your Calendar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
            Upcoming Events
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {(cmsData.upcomingEvents || []).map((event) => {
            const eventDate = new Date(event.date);
            const month = eventDate.toLocaleString('en-IN', { month: 'short' }).toUpperCase();
            const day = eventDate.getDate();
            return (
              <div key={event.id} className="service-card bg-white/40 backdrop-blur-sm border border-foundation-line/30 rounded-2xl p-6 flex gap-5">
                {/* Date Badge */}
                <div className="shrink-0 w-16 h-16 rounded-xl bg-accent-kathakar/10 border border-accent-kathakar/20 flex flex-col items-center justify-center">
                  <span className="text-[10px] font-bold uppercase text-accent-kathakar tracking-wider">{month}</span>
                  <span className="font-display font-bold text-2xl text-accent-kathakar -mt-1">{day}</span>
                </div>
                {/* Event Details */}
                <div className="flex-grow">
                  <h4 className="font-display font-bold text-sm text-foundation-ink leading-snug">{event.title}</h4>
                  <div className="flex flex-col gap-1.5 mt-2">
                    <span className="flex items-center gap-1.5 text-[11px] text-foundation-ink/60 font-body">
                      <Clock size={11} /> {event.time}
                    </span>
                    <span className="flex items-center gap-1.5 text-[11px] text-foundation-ink/60 font-body">
                      <MapPin size={11} /> {event.venue}, {event.city}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 9: GALLERY
      ══════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-vastu uppercase tracking-widest text-[10px] font-bold font-body">
            Moments & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
            Photo Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(cmsData.galleryImages || []).map((img) => (
            <div key={img.id} className="gallery-image rounded-2xl border border-foundation-line/30 overflow-hidden shadow-sm">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600";
                }}
              />
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 10: TESTIMONIALS
      ══════════════════════════════════════════════ */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent-kathakar uppercase tracking-widest text-[10px] font-bold font-body">
            Client Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink mt-2">
            What People Say
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          {(cmsData.testimonials || []).length > 0 && (
            <div className="testimonial-card bg-white/50 backdrop-blur-sm border border-foundation-line/30 rounded-2xl p-8 sm:p-10 text-center">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {renderStars(cmsData.testimonials[testimonialIndex]?.rating || 5)}
              </div>
              {/* Quote */}
              <p className="font-body text-sm sm:text-base text-foundation-ink/80 leading-relaxed italic max-w-2xl mx-auto">
                "{cmsData.testimonials[testimonialIndex]?.text}"
              </p>
              {/* Author */}
              <div className="mt-6">
                <h4 className="font-display font-bold text-base text-foundation-ink">
                  {cmsData.testimonials[testimonialIndex]?.name}
                </h4>
                <p className="text-[11px] text-foundation-ink/50 font-body">
                  {cmsData.testimonials[testimonialIndex]?.location} • {cmsData.testimonials[testimonialIndex]?.service}
                </p>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {(cmsData.testimonials || []).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      idx === testimonialIndex ? 'bg-accent-kathakar scale-125' : 'bg-foundation-line/50 hover:bg-foundation-line'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Prev/Next */}
          <button
            onClick={() => setTestimonialIndex(prev => prev > 0 ? prev - 1 : (cmsData.testimonials?.length || 1) - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-6 w-10 h-10 rounded-full bg-foundation-bg border border-foundation-line/40 flex items-center justify-center shadow-md hover:shadow-lg transition-all text-foundation-ink/60 hover:text-foundation-ink"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setTestimonialIndex(prev => prev < (cmsData.testimonials?.length || 1) - 1 ? prev + 1 : 0)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-6 w-10 h-10 rounded-full bg-foundation-bg border border-foundation-line/40 flex items-center justify-center shadow-md hover:shadow-lg transition-all text-foundation-ink/60 hover:text-foundation-ink"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-[1px] bg-foundation-line/20 my-4" /></div>

      {/* ══════════════════════════════════════════════
          SECTION 11: ABOUT SNIPPET
      ══════════════════════════════════════════════ */}
      <section id="about-snippet" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative border border-foundation-line rounded-3xl p-4 bg-foundation-bg/40 max-w-md mx-auto">
              <img
                src={cmsData.about.avatar}
                alt="Dr. Jalpesh Mehta Spiritual Discourse"
                className="w-full h-auto object-cover rounded-2xl grayscale-[25%] contrast-[102%] opacity-90"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400";
                }}
              />
              <div className="absolute -bottom-6 -right-6 bg-foundation-bg border border-foundation-line py-3 px-6 rounded-2xl shadow-lg hidden md:block">
                <span className="font-display font-bold text-accent-kathakar text-2xl block">20+</span>
                <span className="text-[9px] uppercase tracking-wider text-foundation-ink/65 font-bold">Years of Tradition</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5 text-left">
            <span className="text-accent-astrologer uppercase tracking-widest text-xs font-semibold font-body border-l-2 border-accent-astrologer pl-3">
              Our Foundations & Legacy
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-foundation-ink">
              Founder, Ramkrupa Foundation
            </h2>
            <p className="text-sm sm:text-base text-foundation-ink/80 leading-relaxed font-body">
              {cmsData.about.bioLong}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              <div className="border border-foundation-line/60 rounded-xl p-4 bg-white/30">
                <h4 className="font-display font-bold text-sm text-accent-astrologer">Ramkrupa Foundation</h4>
                <p className="text-[11px] text-foundation-ink/65 font-body mt-1">Driving educational, environmental, and traditional Vedic awareness events across Gujarat.</p>
              </div>
              <div className="border border-foundation-line/60 rounded-xl p-4 bg-white/30">
                <h4 className="font-display font-bold text-sm text-accent-vastu">Akhil Bharatiya Nagar Parishad</h4>
                <p className="text-[11px] text-foundation-ink/65 font-body mt-1">Advancing cultural conservation, Vedic learning centers, and community outreach.</p>
              </div>
            </div>
            <div className="mt-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foundation-ink text-foundation-bg font-semibold text-xs tracking-wider uppercase hover:bg-foundation-ink/90 transition-all shadow-md"
              >
                Inquire For Invitation / Discourse <ChevronRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SECTION 12: CTA BANNER
      ══════════════════════════════════════════════ */}
      <section className="bg-accent-kathakar text-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-display mb-3">
            Ready to Transform Your Life?
          </h2>
          <p className="text-sm text-white/80 font-body mb-8 max-w-xl mx-auto">
            Get personalized Vedic guidance from Dr. Jalpesh Mehta. Book your consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-accent-kathakar rounded-full font-semibold text-sm hover:bg-white/90 transition-all shadow-lg"
            >
              <Phone size={16} />
              Book Consultation
            </Link>
            <a
              href="https://wa.me/919898012345"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-semibold text-sm hover:bg-white/10 transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
