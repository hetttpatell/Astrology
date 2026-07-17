import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, ShieldAlert, CheckCircle2, Award, Info, Home as HomeIcon, MapPin } from 'lucide-react';
import { getCmsData } from '../data/cmsHelper';
import { Mandala, VaastuCompass, TempleDivider } from '../components/SpiritualMotif';

const Vaastu = () => {
  const [cmsData, setCmsData] = useState(getCmsData());
  const [selectedDirection, setSelectedDirection] = useState('NE');
  const [activeTab, setActiveTab] = useState('residential');

  useEffect(() => {
    const handleCmsChange = () => setCmsData(getCmsData());
    window.addEventListener('cmsDataChange', handleCmsChange);
    return () => window.removeEventListener('cmsDataChange', handleCmsChange);
  }, []);

  // Vastu Directions Data (Ashta Dikpalas)
  const directionsData = {
    N: {
      name: "North (Uttara)",
      element: "Water (Jal)",
      deity: "Lord Kubera (Wealth)",
      ideal: "Locker room, cash counter, main entrance, study room, or water fountain.",
      defects: "Toilet, kitchen, store room, heavy machinery, or cut in boundary.",
      hazard: "Blocks financial growth, stops career progression, and causes cash flow stagnation.",
      remedy: "Place a brass Kuber Yantra on the north wall, install copper windchimes, and put green aventurine stones in the North corner."
    },
    NE: {
      name: "North-East (Eshanya)",
      element: "Water / Ether (Jal / Akash)",
      deity: "Lord Shiva (Supreme Consciousness)",
      ideal: "Pooja/meditation room, library, main entrance, living room balcony, open lawn.",
      defects: "Toilet, kitchen, septic tank, staircase, storage of heavy iron scrap.",
      hazard: "Causes severe mental stress, poor decision-making, chronic neurological issues, and financial blockages.",
      remedy: "Install lead or copper pyramids on the toilet ceiling, place a heavy brass helix under the floor threshold, and use blue quartz crystals."
    },
    E: {
      name: "East (Purva)",
      element: "Air / Sun (Vayu / Surya)",
      deity: "Lord Indra (Lord of Heavens)",
      ideal: "Main entrance, living room, study room, bathroom (without toilet), windows.",
      defects: "Staircase, high boundary walls blocking sunlight, toilet, kitchen.",
      hazard: "Depletes physical energy, blocks social recognition, and causes eye and heart-related ailments.",
      remedy: "Mount a copper Sun wall hanging, plant green shrubs along the boundary, and place an energized Surya Yantra."
    },
    SE: {
      name: "South-East (Agneya)",
      element: "Fire (Agni)",
      deity: "Lord Agni (Lord of Fire)",
      ideal: "Kitchen, electrical meters, generator, inverter, boilers, or pantry.",
      defects: "Water tank, bathroom, main bedroom, main entrance, cut in corner.",
      hazard: "Causes sudden fire accidents, marital discord, financial losses, and health issues for women.",
      remedy: "Place red jasper crystals beneath the water inlet, install copper Agni helixes under the kitchen platform, and paint a light pink hue."
    },
    S: {
      name: "South (Dakshina)",
      element: "Fire / Earth (Agni / Prithvi)",
      deity: "Lord Yama (Dharma & Justice)",
      ideal: "Bedroom, heavy storage cupboards, overhead water tank, staircase.",
      defects: "Main door, kitchen, water boring, large open windows or balconies.",
      hazard: "Leads to legal troubles, loss of fame, insomnia, and early death of business partnerships.",
      remedy: "Affix heavy brass copper strips along the floor threshold, place red jasper crystals at the entrance, and install lead helix energy rings."
    },
    SW: {
      name: "South-West (Nairutya)",
      element: "Earth (Prithvi)",
      deity: "Lord Nairuti (Stability & Ancestors)",
      ideal: "Master bedroom, office of business head, heavy storage, safe, staircase.",
      defects: "Kitchen, toilet, water boring, open spaces, cut or slope towards SW.",
      hazard: "Causes marriage delays, frequent business losses, unstable jobs, and lack of family harmony.",
      remedy: "Bury brass pyramids beneath the safe, place yellow jasper stones at the corners, and seal threshold using solid brass strips."
    },
    W: {
      name: "West (Paschima)",
      element: "Space / Water (Akash / Jal)",
      deity: "Lord Varuna (Rain & Oceans)",
      ideal: "Children's room, dining room, study table, overhead water tank, staircase.",
      defects: "Main door (if in wrong pad), kitchen, low boundaries, cuts.",
      hazard: "Reduces income gains, delays success in work, and causes skin problems or throat disease.",
      remedy: "Install white quartz or amethyst crystals at the window frame, place a brass helix under the floor, and use a copper Varuna Yantra."
    },
    NW: {
      name: "North-West (Vayavya)",
      element: "Air (Vayu)",
      deity: "Lord Vayu (Wind God)",
      ideal: "Guest room, storage of finished goods, garage, granary, pets, unmarried daughters' room.",
      defects: "Master bedroom, kitchen, heavy water tank, cuts, or blockages in corner.",
      hazard: "Stops support from banking partners, causes litigation, delays product deliveries, and increases family arguments.",
      remedy: "Mount a convex silver energy mirror on the boundary, hang active brass windchimes, and use white crystal stones."
    },
    C: {
      name: "Center (Brahmasthan)",
      element: "Space / Ether (Akash)",
      deity: "Lord Brahma (Creator)",
      ideal: "Open courtyard, empty lobby, light ventilation, central hall.",
      defects: "Pillars, staircase, toilet, kitchen, heavy storage, wall structures.",
      hazard: "Completely chokes the energy flow of the house, leading to bankruptcy and sudden disasters.",
      remedy: "Clear all scrap metal, install copper energy wire around the perimeter, and place an energized copper Brahmasthan plate."
    }
  };

  const auditSteps = [
    { title: "Degree Mapping", desc: "Precision alignment scanning using advanced solar compasses to map exact degree deviations (magnetic North vs. true North)." },
    { title: "Energy Level Scan", desc: "Aura scanning and frequency detection using L-rods or aurameters to check for underground geopathic stress lines." },
    { title: "Elemental Balancing", desc: "Auditing the 5 key zones (Water, Fire, Earth, Air, Space) across the building layout to identify structural intersections." },
    { title: "Remedy Installation", desc: "Non-destructive application of metal threshold strips, lead/copper helices, and energized crystal minerals to redirect fields." }
  ];

  const vastuVideos = cmsData.videos.filter(v => v.category === 'vaastu');

  return (
    <div className="bg-[#ede7da] text-[#2b2622] min-h-screen relative overflow-hidden font-body bg-parchment">
      
      {/* ══════════════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#6B5433] font-bold border-l-2 border-[#6B5433] pl-3">
              Vaastu Shastra · Spatial Five-Element Harmony
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-[1.1] tracking-tight mt-5 text-[#2b2622]">
              Harmonizing Spaces Without<br />
              <span className="text-[#6B5433] italic">Structural Demolition</span>
            </h1>
            <p className="mt-6 text-sm sm:text-base text-[#2b2622]/80 leading-relaxed max-w-xl font-body">
              Re-aligning the flow of Earth, Water, Fire, Air, and Space in your properties. We apply geometric energy correctors and metal thresholds to neutralize Vastu defects without breaking a single wall.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 font-body">
              <Link
                to="/contact?subject=Vaastu Consultation"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B5433] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#6b5433]/90 transition-all shadow-md"
              >
                Request Space Audit
                <ArrowRight size={14} />
              </Link>
              <a
                href="#directions-grid"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#B8AD98] bg-[#ede7da]/60 text-[#2b2622] font-semibold text-xs tracking-wider uppercase hover:bg-white/40 transition-all"
              >
                Interactive Direction Map
              </a>
            </div>
          </div>

          {/* Right Column: Featured YouTube Video */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative rounded-3xl overflow-hidden p-3 bg-white/50 backdrop-blur-md border border-[#B8AD98]/40 shadow-xl w-full max-w-md lg:max-w-none">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YHFHQXqvtfY"
                  title="Vaastu Shastra Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-3.5 px-1.5 flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#6B5433] font-body">Featured YouTube Discourse</span>
                <span className="text-[9px] text-[#2b2622]/60 font-body">Duration: 10:32</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#6B5433" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          INTERACTIVE DIRECTIONS GRID
      ══════════════════════════════════════════════ */}
      <section id="directions-grid" className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#6B5433] uppercase tracking-widest text-[10px] font-bold">
            Vastu Purush Grid Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
            The Eight Directional Energies
          </h2>
          <p className="text-sm text-[#2b2622]/70 mt-3 leading-relaxed">
            Click on any section of the 9x9 Vastu grid layout below to reveal its ruling element, ideal room placements, potential defects, and non-destructive cures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: 3x3 Vastu Grid Layout */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[400px] aspect-square bg-[#ede7da] border-4 border-[#6B5433]/45 rounded-2xl p-4 shadow-xl grid grid-cols-3 gap-2">
              {[
                { id: 'NW', label: 'NW', name: 'North-West' },
                { id: 'N', label: 'N', name: 'North' },
                { id: 'NE', label: 'NE', name: 'North-East' },
                { id: 'W', label: 'W', name: 'West' },
                { id: 'C', label: 'Brahma', name: 'Center' },
                { id: 'E', label: 'E', name: 'East' },
                { id: 'SW', label: 'SW', name: 'South-West' },
                { id: 'S', label: 'S', name: 'South' },
                { id: 'SE', label: 'SE', name: 'South-East' }
              ].map(cell => (
                <button
                  key={cell.id}
                  onClick={() => setSelectedDirection(cell.id)}
                  className={`relative aspect-square rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
                    selectedDirection === cell.id
                      ? 'bg-[#6B5433] text-white border-[#6B5433] shadow-lg scale-105'
                      : 'bg-white/40 text-[#2b2622] border-[#B8AD98]/50 hover:bg-white/80'
                  }`}
                >
                  <span className="font-display font-bold text-sm tracking-wider">{cell.label}</span>
                  <span className="text-[8px] opacity-75 mt-1 font-body hidden sm:inline">{cell.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Direction Information Panel */}
          <div className="lg:col-span-6">
            <div className="bg-white/60 backdrop-blur-md border border-[#B8AD98]/40 rounded-2xl p-6 sm:p-8 min-h-[380px] flex flex-col justify-between shadow-lg">
              <div>
                <div className="flex items-center gap-3.5 mb-5 border-b border-[#B8AD98]/30 pb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#6B5433]/15 flex items-center justify-center text-[#6B5433]">
                    <VaastuCompass size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#2b2622]">
                      {directionsData[selectedDirection].name}
                    </h3>
                    <p className="text-xs text-[#6B5433] font-semibold tracking-wider uppercase font-body mt-0.5">
                      Element: {directionsData[selectedDirection].element} · Deity: {directionsData[selectedDirection].deity}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-xs font-body leading-relaxed">
                  <div>
                    <span className="text-[10px] text-[#6B5433] font-bold uppercase tracking-wider">Ideal Placements:</span>
                    <p className="text-slate-700 mt-0.5">{directionsData[selectedDirection].ideal}</p>
                  </div>
                  
                  <div>
                    <span className="text-[10px] text-red-800 font-bold uppercase tracking-wider">Severe Defects (Dosh):</span>
                    <p className="text-slate-700 mt-0.5">{directionsData[selectedDirection].defects}</p>
                  </div>

                  <div className="border-t border-[#B8AD98]/30 pt-3">
                    <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider">Non-Destructive Vastu Solution:</span>
                    <p className="text-slate-800 font-medium mt-0.5">{directionsData[selectedDirection].remedy}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#B8AD98]/30 pt-4 mt-6 text-[10px] text-[#6B5433] font-bold flex items-center gap-1.5 uppercase tracking-wider">
                <CheckCircle2 size={12} className="text-emerald-700" />
                <span>100% Demolition-free energy corrective guidelines.</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#6B5433" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          VAASTU AUDIT WORKFLOW
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-[#6B5433] uppercase tracking-widest text-[10px] font-bold">
            Auditing Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
            The Professional Vaastu Audit Process
          </h2>
          <p className="text-sm text-[#2b2622]/70 mt-3 leading-relaxed">
            Every site visit by Dr. Jalpesh Mehta is structured with scientific rigour, marrying cosmic compass mapping with energy frequency diagnostics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {auditSteps.map((step, idx) => (
            <div key={idx} className="bg-white/40 border border-[#B8AD98]/40 rounded-xl p-5 hover:bg-white/70 transition-colors shadow-sm flex flex-col justify-between">
              <div>
                <span className="font-display text-2xl font-bold text-[#6B5433]/30 leading-none">0{idx + 1}</span>
                <h4 className="font-display font-bold text-sm text-[#2b2622] mt-3 mb-2">{step.title}</h4>
                <p className="text-[11px] text-[#2b2622]/75 leading-relaxed font-body">{step.desc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#B8AD98]/20 text-[9px] text-[#6B5433] uppercase tracking-wider font-bold">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>
      </section>

      <TempleDivider color="#6B5433" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          DEMOLITION-FREE VAASTU TOOLS
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative border border-[#B8AD98] rounded-3xl p-4 bg-[#ede7da]/50 max-w-md mx-auto shadow-md">
              <img
                src="/assets/vastu_purush_mandala.png"
                alt="Vastu Purush Mandala Chart"
                className="w-full h-auto object-cover rounded-2xl shadow-inner border border-[#B8AD98]/30"
              />
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-5 text-left font-body">
            <span className="text-[#6B5433] uppercase tracking-widest text-xs font-semibold pl-3 border-l-2 border-[#6B5433]">
              Scientific Energy Tools
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622]">
              Non-Destructive Correction Tools
            </h2>
            <p className="text-sm sm:text-base text-[#2b2622]/80 leading-relaxed">
              Vastu defects act as blocks in the environmental grid. By installing key metallic energy correctors, we alter the magnetic and vibrational pattern of the space to mimic the original flawless design of Vastu Purush.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 text-xs">
              <div className="border border-[#B8AD98]/60 rounded-xl p-4 bg-white/40 shadow-sm">
                <h4 className="font-display font-bold text-sm text-[#6B5433]">Geometric Helixes</h4>
                <p className="text-[11px] text-[#2b2622]/70 mt-1 leading-relaxed">Lead, copper, or brass helixes placed beneath thresholds or buried in soil to isolate magnetic leakages.</p>
              </div>
              <div className="border border-[#B8AD98]/60 rounded-xl p-4 bg-white/40 shadow-sm">
                <h4 className="font-display font-bold text-sm text-[#6B5433]">Metal Energy Strips</h4>
                <p className="text-[11px] text-[#2b2622]/70 mt-1 leading-relaxed">Solid brass, copper, lead, or zinc wires embedded along the floor boundaries to partition elemental zones.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <TempleDivider color="#6B5433" className="opacity-45" />

      {/* ══════════════════════════════════════════════
          YOUTUBE VIDEO FEEDS
      ══════════════════════════════════════════════ */}
      <section className="relative z-10 py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-baseline justify-between mb-10">
          <div>
            <span className="text-[#6B5433] uppercase tracking-widest text-[10px] font-bold">
              Vaastu Darshan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-[#2b2622] mt-2">
              Featured Vaastu Lectures
            </h2>
          </div>
          <a
            href="https://www.youtube.com/@KathakarDrJalpeshMehtta"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#6B5433] hover:underline flex items-center gap-1.5 tracking-wider uppercase font-body mt-2 sm:mt-0"
          >
            Watch Full Series
            <ChevronRight size={14} />
          </a>
        </div>

        {vastuVideos.length === 0 ? (
          <p className="text-sm text-[#2b2622]/50 font-body">No Vaastu videos currently featured. Please visit the channel page.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vastuVideos.map((video) => (
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
                  <h4 className="font-display font-bold text-base text-[#2b2622] group-hover:text-[#6B5433] transition-colors leading-snug">
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
      <section className="relative z-10 py-16 bg-[#6B5433] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-body">
          <h2 className="text-3xl sm:text-4xl font-display font-bold leading-tight">
            Invite Dr. Jalpesh Mehta for a Space Audit
          </h2>
          <p className="text-sm sm:text-base text-white/80 mt-4 max-w-xl mx-auto leading-relaxed">
            Protect your commercial premises, factories, and residences. Schedule a precise site visit or request virtual blueprint audits.
          </p>
          <div className="mt-8">
            <Link
              to="/contact?subject=Vaastu Consultation"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#ede7da] text-[#6B5433] font-semibold text-xs tracking-wider uppercase rounded-full hover:bg-white hover:shadow-lg transition-all"
            >
              Request Site Visit Enquiry
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Vaastu;
