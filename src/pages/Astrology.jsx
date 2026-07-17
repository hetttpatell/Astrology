import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldAlert, CheckCircle2, Star, Sparkles, HelpCircle } from 'lucide-react';
import { getCmsData } from '../data/cmsHelper';
import { Mandala, KundaliIcon, TempleDivider } from '../components/SpiritualMotif';

const Astrology = () => {
  const [cmsData, setCmsData] = useState(getCmsData());
  const [activeRemedy, setActiveRemedy] = useState('gemstones');
  const [selectedHouse, setSelectedHouse] = useState(1);
  const [activeDosha, setActiveDosha] = useState('manglik');

  useEffect(() => {
    const handleCmsChange = () => setCmsData(getCmsData());
    window.addEventListener('cmsDataChange', handleCmsChange);
    return () => window.removeEventListener('cmsDataChange', handleCmsChange);
  }, []);

  const remediesData = {
    gemstones: [
      { name: "Ruby (Manik)", planet: "Sun (Surya)", metal: "Gold / Copper", finger: "Ring Finger", day: "Sunday Morning", mantra: "Om Hram Hreem Hroum Sah Suryaya Namah", effect: "Enhances leadership, power, health, and social status." },
      { name: "Yellow Sapphire (Pukhraj)", planet: "Jupiter (Guru)", metal: "Gold", finger: "Index Finger", day: "Thursday Morning", mantra: "Om Gram Greem Groum Sah Gurave Namah", effect: "Brings wisdom, prosperity, spiritual growth, and academic success." },
      { name: "Blue Sapphire (Neelam)", planet: "Saturn (Shani)", metal: "Panchdhatu / Iron", finger: "Middle Finger", day: "Saturday Evening", mantra: "Om Pram Preem Proum Sah Shanaishcharaya Namah", effect: "Provides protection, clears obstacles, and brings rapid career elevation." },
      { name: "Emerald (Panna)", planet: "Mercury (Budh)", metal: "Gold / Silver", finger: "Little Finger", day: "Wednesday Morning", mantra: "Om Bram Breem Broum Sah Budhaya Namah", effect: "Improves speech, intellect, business calculation, and memory." }
    ],
    yantras: [
      { name: "Shree Yantra", deity: "Maha Lakshmi", material: "Copper / Brass Plate", direction: "North / East Corner", purpose: "Attracts cosmic abundance, financial stability, and dissolves poverty." },
      { name: "Navagraha Yantra", deity: "Nine Planets", material: "Energized Gold Plate", direction: "Pooja Room Lintel", purpose: "Neutralizes negative transits and creates a shield against evil eye." },
      { name: "Kuber Yantra", deity: "Lord Kuber", material: "Heavy Brass Plate", direction: "Cash Box / Safe", purpose: "Sustains wealth, aids business growth, and increases accumulation of assets." }
    ],
    mantras: [
      { name: "Gayatri Mantra", deity: "Savitr (Sun Goddess)", count: "108 times daily", benefit: "Purifies mind, stimulates intelligence, and aligns the solar plexus energy." },
      { name: "Maha Mrityunjaya", deity: "Lord Shiva", count: "108 times daily", benefit: "Protects health, removes fear of death, and cures chronic illnesses." },
      { name: "Shani Beej Mantra", deity: "Lord Saturn", count: "108 times Saturdays", benefit: "Reduces Sade Sati hurdles and instills discipline and patience." }
    ]
  };

  const doshas = {
    manglik: {
      name: "Manglik Dosh (Kuja Dosha)",
      definition: "Occurs when Mars (Mangal) resides in the 1st, 4th, 7th, 8th, or 12th house of your Lagna Chart.",
      impact: "Can cause severe friction in marriage, delays in finding a partner, and sudden arguments. It represents an overload of fiery energy that requires tempering.",
      remedy: "Performance of Mangal Shanti Puja, Kumbh Vivah before marriage, fasting on Tuesdays, and wearing an energized Red Coral (Moonga) if recommended."
    },
    kaalsarp: {
      name: "Kaal Sarp Dosh",
      definition: "Formed when all seven physical planets are hemmed between the shadow planets Rahu (North Node) and Ketu (South Node).",
      impact: "Triggers sudden financial downfalls, constant struggle, instability in career, and vivid nightmares. It represents past life karmic blockages.",
      remedy: "Nag Panchami special Poojan, Shiva Abhishek at Trimbakeshwar or Sidhpur, regular chanting of Rahu-Ketu mantras, and feeding black dogs."
    },
    pitra: {
      name: "Pitra Dosh (Ancestral Debt)",
      definition: "Indicated when Sun or Moon is conjunct or aspected by Rahu, Ketu, or Saturn in the 9th house (house of ancestors/fortune).",
      impact: "Leads to lack of childbirth, family disputes, genetic health issues, and continuous financial leakage despite hard work.",
      remedy: "Shradh rituals during Pitru Paksha, offering water (Tarpan) to ancestors daily, planting Banyan trees, and supporting educational charities."
    }
  };

  // Kundali House Details for North Indian Kundali Grid
  const housesData = {
    1: { name: "1st House (Lagna / Ascendant)", title: "House of Self & Identity", governs: "Physical appearance, longevity, character, temperament, core health, and general life paths.", strength: "Sun & Mars excel here.", desc: "This house represents your entry into the world. It dictates your outer personality, head, facial traits, and is the absolute foundation of your entire Janampatri chart." },
    2: { name: "2nd House (Dhana Bhava)", title: "House of Wealth & Speech", governs: "Fixed assets, bank balance, family, speech, primary education, right eye, and food habits.", strength: "Jupiter and Venus thrive here.", desc: "This house governs what you accumulate. It represents your spoken tone (whether harsh or sweet), family values, and resources you inherit or save." },
    3: { name: "3rd House (Sahaja Bhava)", title: "House of Courage & Siblings", governs: "Willpower, mental strength, short travels, siblings, writing ability, arms, hands, and communication.", strength: "Mars and Mercury excel here.", desc: "Represents self-effort, courage to take risks, initiatives, relationships with younger brothers and sisters, and creative talents utilizing the hands." },
    4: { name: "4th House (Bandhu Bhava)", title: "House of Mother & Happiness", governs: "Mother, home environment, vehicles, real estate properties, peace of mind, chest, and lungs.", strength: "Moon and Venus are highly auspicious here.", desc: "Governs your emotional sanctuary, roots, domestic security, your mother, comfort, and the ability to find happiness within yourself." },
    5: { name: "5th House (Putra Bhava)", title: "House of Intellect & Children", governs: "Creativity, higher education, children, speculative investments, romance, past-life good deeds (Purva Punya).", strength: "Jupiter yields extraordinary results here.", desc: "Governs your mental spark, artistic expressions, wisdom, progeny, love affairs, and luck in investments based on karmic merits." },
    6: { name: "6th House (Ari Bhava)", title: "House of Debts, Enemies & Health", governs: "Debts (Rina), daily struggles, acute diseases (Roga), enemies (Ripu), legal issues, service, and pets.", strength: "Saturn and Mars perform exceptionally to neutralize enemies.", desc: "Governs obstacles, litigation, day-to-day employment duties, digestive system, and your capacity to fight back and overcome competition." },
    7: { name: "7th House (Yuvati Bhava)", title: "House of Partnerships & Marriage", governs: "Spouse, marriage partner, legal business contracts, public relations, foreign travels, and kidneys.", strength: "Venus governs this house naturally; Saturn gets directional strength (Digbala).", desc: "This represents 'the other' in your life. It shows the personality of your spouse, the harmony of your marriage, and long-term business partnerships." },
    8: { name: "8th House (Randhra Bhava)", title: "House of Longevity & Secrets", governs: "Longevity, sudden events, hidden wealth (inheritances, lottery), research, spiritual rebirth, chronic diseases.", strength: "Saturn excels here for longevity.", desc: "The house of transformation, secrets, occult knowledge, surgery, hidden assets, and unexpected life turns. It reveals deep psychological changes." },
    9: { name: "9th House (Dharma Bhava)", title: "House of Fortune & Beliefs", governs: "Dharma (religion/duty), father, higher learning, long journeys, teachers (Guru), luck, and spiritual deeds.", strength: "Jupiter and Sun are natural significators.", desc: "The most auspicious house. Governs your luck, divine grace, higher philosophical education, pilgrimage travels, relationship with your father, and spiritual growth." },
    10: { name: "10th House (Karma Bhava)", title: "House of Career & Status", governs: "Profession, public reputation, government connections, authority, knees, and career achievements.", strength: "Sun, Mars, Mercury, and Saturn all get exceptional strength here.", desc: "This is the zenith of your chart. It governs your actions in society, job, business success, fame, power, and how the world honors your achievements." },
    11: { name: "11th House (Labha Bhava)", title: "House of Gains & Ambitions", governs: "Income, realization of desires, elder siblings, network circles, social groups, and cash flow.", strength: "All planets, auspicious or inauspicious, yield positive material gains here.", desc: "Governs profits, streams of income, your circle of influential friends, clubs, and whether your deep-seated ambitions will be fulfilled." },
    12: { name: "12th House (Vyaya Bhava)", title: "House of Loss & Liberation", governs: "Expenditures, foreign settlement, sleep comfort, isolation (hospitals/prisons), dreams, and Moksha (spiritual liberation).", strength: "Venus thrives here for comforts; Ketu for Moksha.", desc: "Governs outgoings, charity, detachment from the physical world, international travels, subconscious mind, and spiritual release from the cycle of birth." }
  };

  const astrologyVideos = cmsData.videos.filter(v => v.category === 'astrology');

  return (
    <div className="bg-[#0a0f1d] text-slate-100 min-h-screen relative overflow-hidden font-body">
      
      {/* Dynamic Celestial Backdrop Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none opacity-30 select-none z-0">
        <Mandala size={700} color="#fbbf24" opacity={0.12} className="text-amber-400" />
      </div>

      {/* Floating golden stars */}
      <div className="absolute top-40 left-10 text-amber-500/25 pointer-events-none animate-pulse"><Sparkles size={24} /></div>
      <div className="absolute bottom-40 right-10 text-amber-500/20 pointer-events-none animate-pulse"><Sparkles size={32} /></div>
      
      {/* ══════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] text-amber-400 font-semibold border-l-2 border-amber-500 pl-3">
              Jyotish Shastra · Mathematical Vedic Cosmology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mt-5 text-white">
              Vedic Astrology &<br />
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200 bg-clip-text text-transparent">Janampatri Reading</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              Align your career, relationship dynamics, health cycles, and financial growth using precise astronomical calculation of planetary transits (Dashas) based on authentic Parashara principles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact?subject=Astrology Consultation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold text-xs tracking-wider uppercase hover:brightness-110 hover:shadow-lg hover:shadow-amber-500/10 transition-all"
              >
                Book Astrological Reading
                <ArrowRight size={14} />
              </Link>
              <a
                href="#kundali-explorer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 bg-slate-900/60 text-slate-300 font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition-all"
              >
                Explore Kundali Houses
              </a>
            </div>
          </div>

          {/* Right Column: Featured YouTube Video */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative rounded-3xl overflow-hidden p-3 bg-slate-900/80 border border-slate-700/50 shadow-2xl shadow-amber-500/5 w-full max-w-md lg:max-w-none">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/phDT2CVJP9o"
                  title="Vedic Astrology Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3.5 px-1.5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 font-body">Featured YouTube Discourse</span>
                <span className="text-[9px] text-slate-400 font-body">Duration: 14:50</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#f59e0b" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          INTERACTIVE KUNDALI EXPLORER
      ══════════════════════════════════════════════ */}
      <section id="kundali-explorer" className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">
            Interactive Vedic Chart
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-2">
            Anatomy of a Janampatri (Kundali)
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Click on any of the 12 houses in the traditional North-Indian chart below to inspect which life areas it governs and its planetary significance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: The SVG Interactive Chart */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square bg-[#0e172a] border border-amber-500/20 rounded-2xl p-6 shadow-2xl shadow-amber-500/5">
              <svg viewBox="0 0 100 100" className="w-full h-full select-none">
                {/* Background Grid Lines */}
                <rect x="2" y="2" width="96" height="96" stroke="#fbbf24" strokeWidth="0.75" fill="none" opacity="0.3" />
                <line x1="2" y1="2" x2="98" y2="98" stroke="#fbbf24" strokeWidth="0.5" opacity="0.25" />
                <line x1="98" y1="2" x2="2" y2="98" stroke="#fbbf24" strokeWidth="0.5" opacity="0.25" />
                <path d="M50 2 L98 50 L50 98 L2 50 Z" stroke="#fbbf24" strokeWidth="0.5" fill="none" opacity="0.3" />

                {/* 12 Interactive Triangles / Diamonds (Path polygons) */}
                
                {/* 1st House (Lagna - Top Center Diamond) */}
                <polygon
                  points="50,2 74,26 50,50 26,26"
                  onClick={() => setSelectedHouse(1)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 1 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="50" y="22" textAnchor="middle" fill={selectedHouse === 1 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">1</text>
                <text x="50" y="28" textAnchor="middle" fill={selectedHouse === 1 ? '#ffffff' : '#475569'} className="text-[3px] font-semibold tracking-wider cursor-pointer pointer-events-none uppercase">Lagna</text>

                {/* 2nd House (Top Left Small Triangle) */}
                <polygon
                  points="2,2 50,2 26,26"
                  onClick={() => setSelectedHouse(2)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 2 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="26" y="11" textAnchor="middle" fill={selectedHouse === 2 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">2</text>

                {/* 3rd House (Left Top Small Triangle) */}
                <polygon
                  points="2,2 2,50 26,26"
                  onClick={() => setSelectedHouse(3)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 3 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="11" y="26" textAnchor="middle" fill={selectedHouse === 3 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">3</text>

                {/* 4th House (Left Center Diamond) */}
                <polygon
                  points="26,26 50,50 26,74 2,50"
                  onClick={() => setSelectedHouse(4)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 4 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="22" y="52" textAnchor="middle" fill={selectedHouse === 4 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">4</text>

                {/* 5th House (Left Bottom Small Triangle) */}
                <polygon
                  points="2,50 2,98 26,74"
                  onClick={() => setSelectedHouse(5)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 5 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="11" y="76" textAnchor="middle" fill={selectedHouse === 5 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">5</text>

                {/* 6th House (Bottom Left Small Triangle) */}
                <polygon
                  points="2,98 50,98 26,74"
                  onClick={() => setSelectedHouse(6)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 6 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="26" y="91" textAnchor="middle" fill={selectedHouse === 6 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">6</text>

                {/* 7th House (Bottom Center Diamond) */}
                <polygon
                  points="50,50 74,74 50,98 26,74"
                  onClick={() => setSelectedHouse(7)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 7 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="50" y="80" textAnchor="middle" fill={selectedHouse === 7 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">7</text>

                {/* 8th House (Bottom Right Small Triangle) */}
                <polygon
                  points="50,98 98,98 74,74"
                  onClick={() => setSelectedHouse(8)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 8 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="74" y="91" textAnchor="middle" fill={selectedHouse === 8 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">8</text>

                {/* 9th House (Right Bottom Small Triangle) */}
                <polygon
                  points="98,50 98,98 74,74"
                  onClick={() => setSelectedHouse(9)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 9 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="89" y="76" textAnchor="middle" fill={selectedHouse === 9 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">9</text>

                {/* 10th House (Right Center Diamond) */}
                <polygon
                  points="74,26 98,50 74,74 50,50"
                  onClick={() => setSelectedHouse(10)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 10 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="78" y="52" textAnchor="middle" fill={selectedHouse === 10 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">10</text>

                {/* 11th House (Right Top Small Triangle) */}
                <polygon
                  points="98,2 98,50 74,26"
                  onClick={() => setSelectedHouse(11)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 11 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="89" y="26" textAnchor="middle" fill={selectedHouse === 11 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">11</text>

                {/* 12th House (Top Right Small Triangle) */}
                <polygon
                  points="50,2 98,2 74,26"
                  onClick={() => setSelectedHouse(12)}
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedHouse === 12 ? 'fill-amber-500/20 stroke-amber-400 stroke-[1.2]' : 'fill-transparent hover:fill-amber-500/5 stroke-amber-500/20'
                  }`}
                />
                <text x="74" y="11" textAnchor="middle" fill={selectedHouse === 12 ? '#fbbf24' : '#94a3b8'} className="text-[5px] font-bold font-display cursor-pointer pointer-events-none">12</text>
              </svg>
            </div>
          </div>

          {/* Right: House Explanation Panel */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-8 min-h-[350px] flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg">
                    {selectedHouse}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xl text-white">
                      {housesData[selectedHouse].name}
                    </h3>
                    <p className="text-xs text-amber-400 font-semibold tracking-wider uppercase font-body mt-0.5">
                      {housesData[selectedHouse].title}
                    </p>
                  </div>
                </div>
                
                <p className="text-slate-300 text-sm leading-relaxed mt-4 font-body">
                  {housesData[selectedHouse].desc}
                </p>

                <div className="mt-6 space-y-2 text-xs">
                  <div className="flex py-1.5 border-b border-slate-800">
                    <span className="text-slate-500 w-28 shrink-0">Governs:</span>
                    <span className="text-slate-200 font-medium">{housesData[selectedHouse].governs}</span>
                  </div>
                  <div className="flex py-1.5">
                    <span className="text-slate-500 w-28 shrink-0">Planetary Affiliations:</span>
                    <span className="text-amber-300 font-medium">{housesData[selectedHouse].strength}</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-4 mt-6 text-[11px] text-slate-500 flex items-center gap-2">
                <HelpCircle size={14} className="text-amber-500/60" />
                <span>Interact with the diagram on the left to inspect other houses.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#f59e0b" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          KUNDALI DOSHA GUIDE
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">
            Vedic Obstacle Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-2">
            Understanding Major Kundali Doshas
          </h2>
          <p className="text-sm text-slate-400 mt-3 leading-relaxed">
            Inauspicious planetary combinations in a natal chart can trigger chronic friction. Dr. Jalpesh Mehta specializes in diagnosing and prescribing precise, non-superstitious remedies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tab Selector Buttons */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {Object.keys(doshas).map((key) => (
              <button
                key={key}
                onClick={() => setActiveDosha(key)}
                className={`flex items-center justify-between px-5 py-4 rounded-xl border text-left text-sm font-medium transition-all ${
                  activeDosha === key
                    ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white border-transparent shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <ShieldAlert size={16} className={activeDosha === key ? 'text-white' : 'text-amber-500'} />
                  <span className="font-display font-semibold text-sm">{doshas[key].name.split(" ")[0]} Dosh</span>
                </div>
                <ChevronRight size={14} className={`transition-transform duration-200 ${activeDosha === key ? 'rotate-90' : ''}`} />
              </button>
            ))}
            
            <div className="bg-slate-900/30 border border-slate-800 rounded-xl p-4 mt-2">
              <p className="text-[10px] text-amber-500 uppercase tracking-wider font-bold">Confidentiality Guard</p>
              <p className="text-[11px] text-slate-400 mt-1">All birth chart scans, names, and remedy histories are kept strictly confidential.</p>
            </div>
          </div>

          {/* Details Card */}
          <div className="lg:col-span-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 sm:p-8 min-h-[350px] shadow-lg flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-white mb-2">{doshas[activeDosha].name}</h3>
                <p className="text-xs text-amber-400/80 font-medium font-body italic mb-6">
                  "{doshas[activeDosha].definition}"
                </p>

                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Symptoms & Negative Impact</span>
                    <p className="text-sm text-slate-300 leading-relaxed mt-1">{doshas[activeDosha].impact}</p>
                  </div>
                  <div className="border-t border-slate-800/80 pt-4">
                    <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Prescribed Vedic Remedies</span>
                    <p className="text-sm text-slate-300 leading-relaxed mt-1">{doshas[activeDosha].remedy}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex justify-between items-center">
                <span className="text-[10px] text-slate-500">Remedial solutions rooted in scriptural maths.</span>
                <Link
                  to={`/contact?subject=${doshas[activeDosha].name} Enquiry`}
                  className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
                >
                  Consult on this Dosh
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#f59e0b" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          VEDIC REMEDIES CATALOG
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">
            Vibrational Energy Balancers
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-2">
            Vedic Remedial Catalog
          </h2>
          <p className="text-sm text-slate-400 mt-3">
            Select a remedy class to view detailed vibrational guides, alignment days, and traditional mantras.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center gap-3 mb-10">
          {[
            { id: 'gemstones', label: 'Ratna (Gemstones)' },
            { id: 'yantras', label: 'Sacred Yantras' },
            { id: 'mantras', label: 'Beej Mantras' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveRemedy(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                activeRemedy === tab.id
                  ? 'bg-amber-500 text-[#0a0f1d] shadow-md font-bold'
                  : 'bg-slate-900 text-slate-400 border border-slate-800 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Remedies Details Layout */}
        <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          {activeRemedy === 'gemstones' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-[10px] uppercase tracking-wider text-amber-400">
                    <th className="p-4 sm:p-5">Gemstone</th>
                    <th className="p-4 sm:p-5">Planet</th>
                    <th className="p-4 sm:p-5">Metal / Finger</th>
                    <th className="p-4 sm:p-5">Day & Time</th>
                    <th className="p-4 sm:p-5">Vedic Mantra</th>
                    <th className="p-4 sm:p-5">Primary Benefit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {remediesData.gemstones.map((gem, i) => (
                    <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                      <td className="p-4 sm:p-5 font-display font-bold text-sm text-white">{gem.name}</td>
                      <td className="p-4 sm:p-5 font-semibold text-slate-200">{gem.planet}</td>
                      <td className="p-4 sm:p-5 leading-relaxed">
                        <div>{gem.metal}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{gem.finger}</div>
                      </td>
                      <td className="p-4 sm:p-5">{gem.day}</td>
                      <td className="p-4 sm:p-5 font-mono text-[10px] text-amber-500/90 leading-tight italic select-all">"{gem.mantra}"</td>
                      <td className="p-4 sm:p-5 text-slate-400 leading-relaxed">{gem.effect}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeRemedy === 'yantras' && (
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              {remediesData.yantras.map((yantra, i) => (
                <div key={i} className="p-6 sm:p-8 flex flex-col justify-between hover:bg-slate-900/10 transition-colors">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-[9px] font-bold uppercase tracking-wider mb-4">
                      Deity: {yantra.deity}
                    </span>
                    <h3 className="font-display font-bold text-lg text-white mb-2">{yantra.name}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6">{yantra.purpose}</p>
                  </div>
                  <div className="border-t border-slate-800/80 pt-4 space-y-1.5 text-[11px]">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Material:</span>
                      <span className="text-slate-300 font-medium">{yantra.material}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Placement:</span>
                      <span className="text-slate-300 font-medium">{yantra.direction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeRemedy === 'mantras' && (
            <div className="p-6 sm:p-8 divide-y divide-slate-800/60">
              {remediesData.mantras.map((mantra, i) => (
                <div key={i} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-bold text-base text-white">
                      {mantra.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{mantra.benefit}</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-4 text-xs font-body">
                    <span className="px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-amber-400 font-semibold">
                      Recitation: {mantra.count}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <TempleDivider color="#f59e0b" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          YOUTUBE VIDEO DISCOURSES
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10">
          <div>
            <span className="text-amber-400 uppercase tracking-widest text-[10px] font-bold">
              Astrology Discourses
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mt-2">
              Horoscopes & Cosmic Transits
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@KathakarDrJalpeshMehtta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-amber-400 hover:underline flex items-center gap-1.5 tracking-wider uppercase font-body mt-2 sm:mt-0"
          >
            Watch More on YouTube
            <ChevronRight size={14} />
          </a>
        </div>

        {astrologyVideos.length === 0 ? (
          <p className="text-sm text-slate-500 font-body">No astrology videos currently featured. Visit the YouTube channel for archives.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {astrologyVideos.map((video) => (
              <div key={video.id} className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-900/30 backdrop-blur-md shadow-xl flex flex-col group">
                <div className="aspect-video bg-black relative overflow-hidden">
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
                  <h4 className="font-display font-bold text-base text-slate-100 group-hover:text-amber-400 transition-colors leading-snug">
                    {video.title}
                  </h4>
                  <div className="flex justify-between items-center text-[10px] text-slate-500 mt-4 border-t border-slate-850 pt-3">
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
      <section className="relative z-10 py-20 bg-gradient-to-b from-[#0a0f1d] to-[#040812] border-t border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-6">
            <Star size={20} className="fill-current animate-pulse" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
            Schedule a Private Kundali Consultation
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 max-w-xl mx-auto leading-relaxed">
            Obtain precision diagnostics for Sade Sati, Manglik Dosha, or career planning. Consultations are available both in-person (Ahmedabad office) or globally via secure online sessions.
          </p>
          <div className="mt-8">
            <Link
              to="/contact?subject=Astrology Consultation"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-semibold text-xs tracking-wider uppercase rounded-full hover:brightness-110 shadow-lg shadow-amber-500/5 transition-all"
            >
              Inquire for Birth Chart Analysis
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Astrology;
