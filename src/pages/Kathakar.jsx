import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calendar, MapPin, Sparkles, X, ChevronRight, ArrowRight, Play, Heart, Star } from 'lucide-react';
import { getCmsData } from '../data/cmsHelper';
import { Mandala, Kalash, Lotus, TempleDivider } from '../components/SpiritualMotif';

const Kathakar = () => {
  const [cmsData, setCmsData] = useState(getCmsData());
  const [lightboxImage, setLightboxImage] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);

  useEffect(() => {
    const handleCmsChange = () => setCmsData(getCmsData());
    window.addEventListener('cmsDataChange', handleCmsChange);
    return () => window.removeEventListener('cmsDataChange', handleCmsChange);
  }, []);

  const saptahDays = {
    1: {
      title: "Shobha Yatra & Kalash Pujan",
      significance: "The grand inaugural day. The holy scripture (Bhagwatji) is placed on a beautifully decorated palanquin and carried in a musical procession with devotees holding sacred water pots (Kalash) on their heads.",
      bhajan: "Mangal Acharan & Kalash Vandana",
      duration: "Day 1 Discourse"
    },
    2: {
      title: "Parikshit Janma & Shukadev Aagaman",
      significance: "Narration of the birth of King Parikshit, his curse, and the divine arrival of Sage Shukadeva on the banks of Ganga to recite the Bhagwat. The dialogue of absolute surrender begins.",
      bhajan: "He Govind Gopal Gatha",
      duration: "Day 2 Discourse"
    },
    3: {
      title: "Varaha Avatar & Kapil Devahuti Samvad",
      significance: "Reciting the cosmic descent of Lord Varaha to save Earth, and the detailed philosophical discourse of Sage Kapila on Sankhya Yoga and devotion to mother Devahuti.",
      bhajan: "Prabhu Ke Charan Kamal",
      duration: "Day 3 Discourse"
    },
    4: {
      title: "Gajendra Moksha & Krishna Janmotsav",
      significance: "One of the most joyous days. Recites the liberation of Gajendra from the crocodile, followed by the grand, ecstatic celebration of Lord Krishna's birth in Gokul (Nandotsav).",
      bhajan: "Nand Gher Anand Bhaio, Jai Kanhaiya Lal Ki!",
      duration: "Day 4 Discourse"
    },
    5: {
      title: "Govardhan Leela & Chhappan Bhog",
      significance: "Narration of Lord Krishna lifting the Govardhan Hill on his finger to shatter Indra's pride and protect villagers. Devotees offer 56 varieties of delicacies (Chhappan Bhog) to Gopal.",
      bhajan: "Giriraj Dharan Lal Ki Jai",
      duration: "Day 5 Discourse"
    },
    6: {
      title: "Rukmini Vivah & Raas Leela",
      significance: "Celebrating the metaphysical dance of love (Maharaas), and the divine wedding ceremony of Lord Krishna and Rukmini. The venue turns into a celestial marriage hall.",
      bhajan: "Rukmini Mangal Gayan & Vivah Geet",
      duration: "Day 6 Discourse"
    },
    7: {
      title: "Sudama Milan & Vyaspeeth Poojan",
      significance: "The final day. Reciting the emotional union of Krishna and his poor friend Sudama, representing pure friendship. Followed by the ultimate absorption of Parikshit into Brahman, and Vyaspeeth Poojan.",
      bhajan: "Aaye Sharan Tihari & Aarti Utaro Hari Ki",
      duration: "Day 7 Discourse"
    }
  };

  const repertoire = [
    {
      num: "01",
      title: "Shrimad Bhagwat Saptah",
      desc: "An immersive 7-day spiritual journey diving into the 18,000 verses of the Bhagwat Mahapuran, focusing on devotion (Bhakti), duty (Dharma), and self-realization.",
      duration: "7-Day Saptah"
    },
    {
      num: "02",
      title: "Shiv Maha Puran Katha",
      desc: "Delving into the metaphysics of Shiva consciousness, cosmic creation, the symbology of Shiv-Parvati marriage, and developing absolute silence.",
      duration: "3 to 7 Days"
    },
    {
      num: "03",
      title: "Shri Ram Katha",
      desc: "Exploring the ideals of Ramrajya, familial obligations, righteousness (Maryada), and character building from the Ramayana for modern families.",
      duration: "5 to 9 Days"
    }
  ];

  const kathakarVideos = cmsData.videos.filter(v => v.category === 'kathakar');

  return (
    <div className="bg-[#ede7da] text-[#2b2622] min-h-screen relative overflow-hidden font-body bg-parchment">
      
      {/* Dynamic Saffron Backdrop Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-30 select-none z-0">
        <Mandala size={700} color="#8c2f1b" opacity={0.08} className="text-accent-kathakar" />
      </div>

      {/* ══════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#8C2F1B] font-bold border-l-2 border-[#8C2F1B] pl-3">
              Bhagwat Kathakar · Spiritual Discourses
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mt-5 text-[#2b2622]">
              Awakening Hearts Through<br />
              <span className="text-[#8C2F1B]">Divine Narratives</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-[#2b2622]/80 leading-relaxed max-w-xl font-body">
              Experience the nectar of Shrimad Bhagwat Mahapuran, Shiv Puran, and Ram Katha. Delivered with soul-stirring musical bhajans, deep scriptural philosophy, and lessons to live a virtuous life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-body">
              <Link
                to="/contact?subject=Katha Invitation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8C2F1B] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#8c2f1b]/95 transition-all shadow-md shadow-[#8c2f1b]/15"
              >
                Invite for Katha
                <ArrowRight size={14} />
              </Link>
              <a
                href="#saptah-journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#B8AD98] bg-[#ede7da]/60 text-[#2b2622] font-semibold text-xs tracking-wider uppercase hover:bg-white/40 transition-all"
              >
                7-Day Katha Journey
              </a>
            </div>
          </div>

          {/* Right Column: Featured YouTube Video */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative rounded-3xl overflow-hidden p-3 bg-white/50 backdrop-blur-md border border-[#B8AD98]/40 shadow-xl w-full max-w-md lg:max-w-none">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${kathakarVideos[0]?.youtubeId || 'zz034aG_R_I'}`}
                  title="Bhagwat Katha Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3.5 px-1.5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C2F1B] font-body">Featured YouTube Discourse</span>
                <span className="text-[9px] text-[#2b2622]/60 font-body">Duration: {kathakarVideos[0]?.duration || '3:15:42'}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#8C2F1B" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          THE REPERTOIRE (scripture cards)
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#8C2F1B] uppercase tracking-widest text-[10px] font-bold">
            Sacred Literature
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
            Discourse Portfolios
          </h2>
          <p className="text-sm text-[#2b2622]/70 mt-3 leading-relaxed">
            Preserving Sanatan wisdom and bringing scriptural truths to the public square through community-focused assemblies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repertoire.map((item) => (
            <div key={item.num} className="bg-white/50 border border-[#B8AD98]/40 rounded-2xl p-8 flex flex-col justify-between shadow-md hover:bg-white/80 transition-all group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl font-bold text-[#8C2F1B]/35 leading-none">{item.num}</span>
                  <Lotus size={24} className="text-[#8C2F1B]/40 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="font-display font-bold text-xl text-[#8C2F1B] mb-4">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2b2622]/80 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
              <p className="text-[10px] text-[#8C2F1B] font-bold uppercase tracking-wider mt-8 pt-4 border-t border-[#B8AD98]/30 font-body">
                Format: {item.duration}
              </p>
            </div>
          ))}
        </div>
      </section>

      <TempleDivider color="#8C2F1B" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          7-DAY SAPTAH TIMELINE (Interactive)
      ══════════════════════════════════════════════ */}
      <section id="saptah-journey" className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#8C2F1B] uppercase tracking-widest text-[10px] font-bold">
            Shrimad Saptah Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
            The 7-Day Spiritual Journey
          </h2>
          <p className="text-sm text-[#2b2622]/70 mt-3 leading-relaxed">
            Click on any day in the timeline below to explore the chronological flow, spiritual significance, and major bhajan events of the Shrimad Bhagwat Saptah.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Day Selector Timeline (Left) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {Object.keys(saptahDays).map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(Number(day))}
                className={`flex items-center gap-4 px-5 py-3.5 rounded-xl border text-left text-xs font-semibold uppercase tracking-wider transition-all ${
                  selectedDay === Number(day)
                    ? 'bg-[#8C2F1B] text-white border-transparent shadow-lg shadow-[#8c2f1b]/15'
                    : 'bg-white/30 text-[#2b2622]/70 border-[#B8AD98]/40 hover:bg-white/80'
                }`}
              >
                <span className="w-8 h-8 rounded-lg border border-[#B8AD98]/20 flex items-center justify-center font-display font-bold text-sm bg-white/10 shrink-0">
                  0{day}
                </span>
                <span className="font-display truncate font-bold">{saptahDays[day].title.split(" & ")[0]}</span>
              </button>
            ))}
          </div>

          {/* Day Details Card (Right) */}
          <div className="lg:col-span-8">
            <div className="bg-white/60 backdrop-blur-md border border-[#B8AD98]/40 rounded-2xl p-6 sm:p-8 min-h-[350px] shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5 border-b border-[#B8AD98]/30 pb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#8C2F1B]/10 flex items-center justify-center text-[#8C2F1B]">
                    <Kalash size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#2b2622]">
                      Day {selectedDay}: {saptahDays[selectedDay].title}
                    </h3>
                    <span className="text-[10px] bg-[#8C2F1B]/15 text-[#8C2F1B] px-2.5 py-1 rounded font-bold uppercase tracking-wider font-body mt-1.5 inline-block">
                      {saptahDays[selectedDay].duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] text-[#8C2F1B] font-bold uppercase tracking-wider">Spiritual Narrative & Significance:</span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-1 font-body">
                      {saptahDays[selectedDay].significance}
                    </p>
                  </div>
                  
                  <div className="border-t border-[#B8AD98]/20 pt-4">
                    <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1">
                      <Play size={12} className="fill-current" /> Major Bhajan / Musical Theme:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-800 font-medium mt-1 font-body">
                      {saptahDays[selectedDay].bhajan}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#B8AD98]/20 pt-4 mt-6 text-[10px] text-slate-500 font-body flex items-center gap-2">
                <Sparkles size={12} className="text-amber-500" />
                <span>Attendees are advised to wear traditional attire for the Janmotsav and Rukmini Vivah days.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#8C2F1B" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          PHOTO GALLERY (using local resolved photos)
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[#8C2F1B] uppercase tracking-widest text-[10px] font-bold">
            Moments of Devotion
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
            Katha Mahotsav Gallery
          </h2>
          <p className="text-sm text-[#2b2622]/70 mt-3">
            Glimpses of spiritual discourses, Vyaspeeth ceremonies, and the community of devotees.
          </p>
        </div>

        {cmsData.kathaGallery && cmsData.kathaGallery.length === 1 ? (
          <div className="flex justify-center">
            <div
              onClick={() => setLightboxImage(cmsData.kathaGallery[0])}
              className="max-w-md w-full relative rounded-2xl overflow-hidden border border-[#B8AD98]/30 cursor-pointer group shadow-md bg-white/40 p-2.5 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                <div className="absolute inset-0 bg-[#8C2F1B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="bg-white text-[#8C2F1B] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                    Enlarge Photo
                  </span>
                </div>
                <img
                  src={cmsData.kathaGallery[0]}
                  alt="Pujya Dr. Jalpesh Mehta"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400";
                  }}
                />
              </div>
              <div className="mt-3 text-center">
                <span className="text-[10px] text-[#8C2F1B] font-bold uppercase tracking-wider font-body">
                  Pujya Dr. Jalpesh Mehta
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cmsData.kathaGallery.map((imgUrl, i) => (
              <div
                key={i}
                onClick={() => setLightboxImage(imgUrl)}
                className="relative rounded-2xl overflow-hidden border border-[#B8AD98]/30 cursor-pointer group shadow-md bg-white/40 p-2.5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                  <div className="absolute inset-0 bg-[#8C2F1B]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="bg-white text-[#8C2F1B] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md">
                      Enlarge Photo
                    </span>
                  </div>
                  <img
                    src={imgUrl}
                    alt={`Katha event gallery ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400";
                    }}
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-[10px] text-[#8C2F1B] font-bold uppercase tracking-wider font-body">
                    {i === 0 ? "Katha Vyaspeeth Altar" : i === 1 ? "Pujya Dr. Jalpesh Mehta" : "Vastu Purush Mandala Diagram"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/90 z-[70] flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-slate-350 focus:outline-none bg-black/40 p-2.5 rounded-full">
            <X size={28} />
          </button>
          <img
            src={lightboxImage}
            alt="Enlarged Katha gallery"
            className="max-w-full max-h-[85vh] rounded-lg object-contain border border-slate-800 shadow-2xl"
          />
        </div>
      )}

      <TempleDivider color="#8C2F1B" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          UPCOMING EVENTS TIMELINE
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#8C2F1B] uppercase tracking-widest text-[10px] font-bold">
            Attend a Pravachan
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
            Katha Schedule & Itinerary
          </h2>
          <p className="text-sm text-[#2b2622]/70 mt-3 leading-relaxed">
            List of upcoming public spiritual discourses. Local devotees and organizers are welcome to participate.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col divide-y divide-[#B8AD98]/30">
          {cmsData.upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-left"
            >
              <div className="flex-grow">
                <span className="text-[10px] text-[#8C2F1B] font-bold tracking-wider uppercase font-body bg-[#8C2F1B]/10 px-2.5 py-1 rounded">
                  {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#2b2622] leading-snug mt-3">
                  {event.title}
                </h3>
                <p className="text-xs text-[#2b2622]/65 font-body flex items-center gap-1.5 mt-2">
                  <MapPin size={12} className="text-[#8C2F1B]/40" /> {event.venue}, {event.city}, {event.state}
                </p>
              </div>
              <div className="flex flex-col sm:items-end shrink-0 gap-2 font-body text-xs">
                <span className="font-semibold text-[#2b2622] bg-white/40 px-3.5 py-1.5 rounded-lg border border-[#B8AD98]/20">
                  {event.time}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 flex items-center gap-1.5 mt-1">
                  <Star size={10} className="fill-current" /> Free Attendance
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TempleDivider color="#8C2F1B" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          YOUTUBE VIDEO DISCOURSES
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10">
          <div>
            <span className="text-[#8C2F1B] uppercase tracking-widest text-[10px] font-bold">
              Broadcast Archives
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
              Katha Video Broadcasts
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@KathakarDrJalpeshMehtta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#8C2F1B] hover:underline flex items-center gap-1.5 tracking-wider uppercase font-body mt-2 sm:mt-0"
          >
            Watch Full Saptah
            <ChevronRight size={14} />
          </a>
        </div>

        {kathakarVideos.length === 0 ? (
          <p className="text-sm text-[#2b2622]/50 font-body">No Katha videos currently featured.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kathakarVideos.map((video) => (
              <div key={video.id} className="border border-[#B8AD98]/30 rounded-2xl overflow-hidden bg-white/40 shadow-lg flex flex-col group">
                <div className="aspect-video bg-black relative">
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
                  <h4 className="font-display font-bold text-base text-[#2b2622] group-hover:text-[#8C2F1B] transition-colors leading-snug">
                    {video.title}
                  </h4>
                  <div className="flex justify-between items-center text-[10px] text-slate-500 mt-4 border-t border-[#B8AD98]/20 pt-3">
                    <span>BHAKTI OFFICIAL Feed</span>
                    <span>Duration: {video.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 bg-[#8C2F1B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-body">
          <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
            Invite Dr. Jalpesh Mehta for a Spiritual Katha
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-4 max-w-xl mx-auto leading-relaxed">
            Bring the divine vibes of Shrimad Bhagwat Saptah or Shiv Puran discourse to your city. Organizers are requested to contact and register dates in advance.
          </p>
          <div className="mt-8">
            <Link
              to="/contact?subject=Katha Invitation"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ede7da] text-[#8C2F1B] font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-white hover:shadow-lg transition-all"
            >
              Submit Organizers Inquiry
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Kathakar;
