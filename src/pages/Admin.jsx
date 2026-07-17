import React, { useState } from 'react';
import { Lock, Save, Trash2, Plus, Download, RotateCcw, Check, LogOut, FileCode } from 'lucide-react';
import { getCmsData, saveCmsData, resetCmsData } from '../data/cmsHelper';

const Admin = () => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  
  // CMS state
  const [activeTab, setActiveTab] = useState('about');
  const [cmsState, setCmsState] = useState(getCmsData());
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Authentication check
  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === '1008') {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Invalid spiritual passcode. Try again.');
    }
  };

  // General field change (biography/tagline)
  const handleAboutChange = (e) => {
    const { name, value } = e.target;
    setCmsState(prev => ({
      ...prev,
      about: {
        ...prev.about,
        [name]: value
      }
    }));
  };

  // Videos management
  const handleVideoChange = (index, field, value) => {
    const updatedVideos = [...cmsState.videos];
    updatedVideos[index] = { ...updatedVideos[index], [field]: value };
    setCmsState(prev => ({ ...prev, videos: updatedVideos }));
  };

  const addVideo = () => {
    const newVideo = {
      id: 'vid_' + Date.now(),
      youtubeId: '',
      title: 'New Featured Video',
      category: 'kathakar',
      duration: '10:00'
    };
    setCmsState(prev => ({ ...prev, videos: [...prev.videos, newVideo] }));
  };

  const deleteVideo = (index) => {
    const updatedVideos = cmsState.videos.filter((_, i) => i !== index);
    setCmsState(prev => ({ ...prev, videos: updatedVideos }));
  };

  // Shorts management
  const handleShortChange = (index, field, value) => {
    const updatedShorts = [...cmsState.shorts];
    updatedShorts[index] = { ...updatedShorts[index], [field]: value };
    setCmsState(prev => ({ ...prev, shorts: updatedShorts }));
  };

  const addShort = () => {
    const newShort = {
      id: 'short_' + Date.now(),
      youtubeId: '',
      title: 'New Daily Short'
    };
    setCmsState(prev => ({ ...prev, shorts: [...prev.shorts, newShort] }));
  };

  const deleteShort = (index) => {
    const updatedShorts = cmsState.shorts.filter((_, i) => i !== index);
    setCmsState(prev => ({ ...prev, shorts: updatedShorts }));
  };

  // Gallery management
  const handleGalleryChange = (index, value) => {
    const updatedGallery = [...cmsState.kathaGallery];
    updatedGallery[index] = value;
    setCmsState(prev => ({ ...prev, kathaGallery: updatedGallery }));
  };

  const addGalleryImage = () => {
    setCmsState(prev => ({ ...prev, kathaGallery: [...prev.kathaGallery, '/assets/dr_jalpesh_mehta.png'] }));
  };

  const deleteGalleryImage = (index) => {
    const updatedGallery = cmsState.kathaGallery.filter((_, i) => i !== index);
    setCmsState(prev => ({ ...prev, kathaGallery: updatedGallery }));
  };

  // Events management
  const handleEventChange = (index, field, value) => {
    const updatedEvents = [...cmsState.upcomingEvents];
    updatedEvents[index] = { ...updatedEvents[index], [field]: value };
    setCmsState(prev => ({ ...prev, upcomingEvents: updatedEvents }));
  };

  const addEvent = () => {
    const newEvent = {
      id: 'event_' + Date.now(),
      title: 'New Scheduled Discourse',
      date: new Date().toISOString().split('T')[0],
      time: '03:00 PM - 06:00 PM',
      venue: 'Ramkrupa Assembly Hall',
      city: 'Ahmedabad',
      state: 'Gujarat',
      status: 'upcoming'
    };
    setCmsState(prev => ({ ...prev, upcomingEvents: [...prev.upcomingEvents, newEvent] }));
  };

  const deleteEvent = (index) => {
    const updatedEvents = cmsState.upcomingEvents.filter((_, i) => i !== index);
    setCmsState(prev => ({ ...prev, upcomingEvents: updatedEvents }));
  };

  // Save edits to localStorage
  const handleSave = () => {
    saveCmsData(cmsState);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // Reset to static JSON defaults
  const handleReset = () => {
    if (window.confirm('Reset all details to original website defaults? This clears current custom entries.')) {
      const defaultData = resetCmsData();
      setCmsState(defaultData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    }
  };

  // Export JSON file seed for the codebase
  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cmsState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "cms.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-[#FAF5F2] border border-foundation-line rounded-3xl p-8 sm:p-12 max-w-md w-full shadow-lg text-center">
          <div className="w-14 h-14 bg-accent-kathakar/10 text-accent-kathakar rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock size={26} />
          </div>
          <h1 className="font-display font-bold text-3xl text-foundation-ink mb-2">
            CMS Login
          </h1>
          <p className="text-xs text-foundation-ink/65 font-body mb-6">
            Enter the authorized passcode to configure Dr. Jalpesh Mehta's YouTube feeds and Katha itineraries.
          </p>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 font-body text-sm">
            <input
              required
              autoFocus
              type="password"
              placeholder="Auspicious Passcode"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="p-3 bg-foundation-bg border border-foundation-line rounded-xl focus:outline-none focus:border-foundation-ink text-center tracking-widest text-lg font-bold text-foundation-ink"
            />
            {loginError && <p className="text-xs text-red-800 font-semibold">{loginError}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-foundation-ink text-foundation-bg font-semibold uppercase tracking-wider text-xs rounded-xl hover:bg-foundation-ink/90 transition-all shadow-md mt-2"
            >
              Enter Dashboard
            </button>
          </form>
          <p className="text-[10px] text-foundation-ink/40 font-bold uppercase tracking-widest mt-8">
            Developer Hint: 1008
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-left font-body text-xs sm:text-sm">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-foundation-line/30 pb-6 mb-8">
        <div>
          <span className="text-[10px] bg-accent-vastu/10 text-accent-vastu px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
            Site Content Editor
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-foundation-ink mt-2">
            Client CMS Dashboard
          </h1>
        </div>
        
        {/* Controls */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-4 py-2 bg-foundation-ink text-foundation-bg rounded-lg hover:bg-foundation-ink/80 transition-all font-semibold"
          >
            {saveSuccess ? <Check size={16} className="text-lime-300" /> : <Save size={16} />}
            {saveSuccess ? 'Changes Saved' : 'Save Changes'}
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 border border-foundation-line hover:bg-foundation-ink/5 text-foundation-ink rounded-lg transition-all font-semibold"
            title="Download seed data file for developers"
          >
            <Download size={16} /> Export Seed JSON
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-800 hover:bg-red-50 rounded-lg transition-all font-semibold"
            title="Reset site content to original defaults"
          >
            <RotateCcw size={16} /> Reset
          </button>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 px-4 py-2 border border-foundation-line hover:bg-foundation-ink/5 text-foundation-ink rounded-lg transition-all"
          >
            <LogOut size={16} /> Exit
          </button>
        </div>
      </div>

      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Tabs column */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          <button
            onClick={() => setActiveTab('about')}
            className={`w-full text-left p-4 rounded-xl font-semibold border transition-all ${
              activeTab === 'about'
                ? 'bg-foundation-ink text-foundation-bg border-foundation-ink'
                : 'bg-foundation-bg/40 hover:bg-foundation-bg border-foundation-line/60 text-foundation-ink'
            }`}
          >
            About & Biography
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`w-full text-left p-4 rounded-xl font-semibold border transition-all ${
              activeTab === 'videos'
                ? 'bg-foundation-ink text-foundation-bg border-foundation-ink'
                : 'bg-foundation-bg/40 hover:bg-foundation-bg border-foundation-line/60 text-foundation-ink'
            }`}
          >
            Featured Videos
          </button>
          <button
            onClick={() => setActiveTab('shorts')}
            className={`w-full text-left p-4 rounded-xl font-semibold border transition-all ${
              activeTab === 'shorts'
                ? 'bg-foundation-ink text-foundation-bg border-foundation-ink'
                : 'bg-foundation-bg/40 hover:bg-foundation-bg border-foundation-line/60 text-foundation-ink'
            }`}
          >
            Featured Daily Shorts
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`w-full text-left p-4 rounded-xl font-semibold border transition-all ${
              activeTab === 'gallery'
                ? 'bg-foundation-ink text-foundation-bg border-foundation-ink'
                : 'bg-foundation-bg/40 hover:bg-foundation-bg border-foundation-line/60 text-foundation-ink'
            }`}
          >
            Katha Photo Gallery
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`w-full text-left p-4 rounded-xl font-semibold border transition-all ${
              activeTab === 'events'
                ? 'bg-foundation-ink text-foundation-bg border-foundation-ink'
                : 'bg-foundation-bg/40 hover:bg-foundation-bg border-foundation-line/60 text-foundation-ink'
            }`}
          >
            Katha Itinerary Events
          </button>
        </div>

        {/* Form Panel column */}
        <div className="lg:col-span-9 bg-[#FAF5F2] border border-foundation-line rounded-3xl p-6 sm:p-8 shadow-sm">
          
          {/* Tab Content: About */}
          {activeTab === 'about' && (
            <div className="flex flex-col gap-6">
              <h3 className="font-display font-bold text-2xl text-foundation-ink border-b border-foundation-line/30 pb-3">
                Biography Details
              </h3>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-foundation-ink/80">Tagline (Homepage Hero)</label>
                <input
                  type="text"
                  name="tagline"
                  value={cmsState.about.tagline}
                  onChange={handleAboutChange}
                  className="p-3 bg-foundation-bg border border-foundation-line rounded-lg focus:outline-none focus:border-foundation-ink text-foundation-ink"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-foundation-ink/80">Short Description (Hero Intro)</label>
                <textarea
                  rows="3"
                  name="bioShort"
                  value={cmsState.about.bioShort}
                  onChange={handleAboutChange}
                  className="p-3 bg-foundation-bg border border-foundation-line rounded-lg focus:outline-none focus:border-foundation-ink text-foundation-ink resize-none"
                ></textarea>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-foundation-ink/80">Long Biography (Legacy Snippet)</label>
                <textarea
                  rows="6"
                  name="bioLong"
                  value={cmsState.about.bioLong}
                  onChange={handleAboutChange}
                  className="p-3 bg-foundation-bg border border-foundation-line rounded-lg focus:outline-none focus:border-foundation-ink text-foundation-ink resize-none"
                ></textarea>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-semibold text-foundation-ink/80">Profile Photo Asset Link</label>
                <input
                  type="text"
                  name="avatar"
                  value={cmsState.about.avatar}
                  onChange={handleAboutChange}
                  className="p-3 bg-foundation-bg border border-foundation-line rounded-lg focus:outline-none focus:border-foundation-ink text-foundation-ink"
                />
              </div>
            </div>
          )}

          {/* Tab Content: Videos */}
          {activeTab === 'videos' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-foundation-line/30 pb-3">
                <h3 className="font-display font-bold text-2xl text-foundation-ink">
                  Featured YouTube Videos
                </h3>
                <button
                  onClick={addVideo}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-kathakar text-white rounded-lg hover:bg-accent-kathakar/95 text-xs font-semibold"
                >
                  <Plus size={14} /> Add Video
                </button>
              </div>
              
              <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2">
                {cmsState.videos.map((vid, idx) => (
                  <div key={vid.id} className="p-4 bg-foundation-bg border border-foundation-line/50 rounded-2xl flex flex-col gap-4 relative">
                    <button
                      onClick={() => deleteVideo(idx)}
                      className="absolute top-4 right-4 text-red-800 hover:text-red-900"
                      title="Delete Video"
                    >
                      <Trash2 size={16} />
                    </button>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-semibold text-foundation-ink/75">Video Title</label>
                        <input
                          type="text"
                          value={vid.title}
                          onChange={(e) => handleVideoChange(idx, 'title', e.target.value)}
                          className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-semibold text-foundation-ink/75">YouTube Video ID (11 chars)</label>
                        <input
                          type="text"
                          value={vid.youtubeId}
                          onChange={(e) => handleVideoChange(idx, 'youtubeId', e.target.value)}
                          className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-semibold text-foundation-ink/75">Category Domain</label>
                        <select
                          value={vid.category}
                          onChange={(e) => handleVideoChange(idx, 'category', e.target.value)}
                          className="p-2 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                        >
                          <option value="kathakar">Bhagwat Kathakar (Katha)</option>
                          <option value="astrology">Vedic Astrologer (Astrology)</option>
                          <option value="vaastu">Vaastu-Sastra Expert (Vaastu)</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-semibold text-foundation-ink/75">Video Duration</label>
                        <input
                          type="text"
                          value={vid.duration}
                          onChange={(e) => handleVideoChange(idx, 'duration', e.target.value)}
                          className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                          placeholder="e.g. 15:42"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Shorts */}
          {activeTab === 'shorts' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-foundation-line/30 pb-3">
                <h3 className="font-display font-bold text-2xl text-foundation-ink">
                  Featured Daily Shorts
                </h3>
                <button
                  onClick={addShort}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-kathakar text-white rounded-lg hover:bg-accent-kathakar/95 text-xs font-semibold"
                >
                  <Plus size={14} /> Add Short
                </button>
              </div>

              <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2">
                {cmsState.shorts.map((sh, idx) => (
                  <div key={sh.id} className="p-4 bg-foundation-bg border border-foundation-line/50 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
                    <button
                      onClick={() => deleteShort(idx)}
                      className="absolute top-4 right-4 text-red-800 hover:text-red-900"
                    >
                      <Trash2 size={16} />
                    </button>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-foundation-ink/75">Short Title</label>
                      <input
                        type="text"
                        value={sh.title}
                        onChange={(e) => handleShortChange(idx, 'title', e.target.value)}
                        className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="font-semibold text-foundation-ink/75">YouTube Video ID (11 chars)</label>
                      <input
                        type="text"
                        value={sh.youtubeId}
                        onChange={(e) => handleShortChange(idx, 'youtubeId', e.target.value)}
                        className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Gallery */}
          {activeTab === 'gallery' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-foundation-line/30 pb-3">
                <h3 className="font-display font-bold text-2xl text-foundation-ink">
                  Katha Photo Gallery
                </h3>
                <button
                  onClick={addGalleryImage}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-kathakar text-white rounded-lg hover:bg-accent-kathakar/95 text-xs font-semibold"
                >
                  <Plus size={14} /> Add Image Link
                </button>
              </div>

              <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto pr-2">
                {cmsState.kathaGallery.map((img, idx) => (
                  <div key={idx} className="p-4 bg-foundation-bg border border-foundation-line/50 rounded-2xl flex items-center justify-between gap-4">
                    <div className="flex-grow flex flex-col gap-1">
                      <label className="font-semibold text-foundation-ink/75">Image Asset / URL Path</label>
                      <input
                        type="text"
                        value={img}
                        onChange={(e) => handleGalleryChange(idx, e.target.value)}
                        className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs font-mono"
                      />
                    </div>
                    <button
                      onClick={() => deleteGalleryImage(idx)}
                      className="text-red-800 hover:text-red-900 mt-5 self-center"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: Events */}
          {activeTab === 'events' && (
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-foundation-line/30 pb-3">
                <h3 className="font-display font-bold text-2xl text-foundation-ink">
                  Upcoming Public Itinerary
                </h3>
                <button
                  onClick={addEvent}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-accent-kathakar text-white rounded-lg hover:bg-accent-kathakar/95 text-xs font-semibold"
                >
                  <Plus size={14} /> Schedule Event
                </button>
              </div>

              <div className="flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2">
                {cmsState.upcomingEvents.map((evt, idx) => (
                  <div key={evt.id} className="p-4 bg-foundation-bg border border-foundation-line/50 rounded-2xl flex flex-col gap-4 relative">
                    <button
                      onClick={() => deleteEvent(idx)}
                      className="absolute top-4 right-4 text-red-800 hover:text-red-900"
                    >
                      <Trash2 size={16} />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-semibold text-foundation-ink/75">Discourse Title</label>
                        <input
                          type="text"
                          value={evt.title}
                          onChange={(e) => handleEventChange(idx, 'title', e.target.value)}
                          className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                        />
                      </div>
                      <div className="flex grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-semibold text-foundation-ink/75">Event Date</label>
                          <input
                            type="date"
                            value={evt.date}
                            onChange={(e) => handleEventChange(idx, 'date', e.target.value)}
                            className="p-2 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs font-mono"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-semibold text-foundation-ink/75">Event Timing</label>
                          <input
                            type="text"
                            value={evt.time}
                            onChange={(e) => handleEventChange(idx, 'time', e.target.value)}
                            className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="font-semibold text-foundation-ink/75">Assembly Venue / Details</label>
                        <input
                          type="text"
                          value={evt.venue}
                          onChange={(e) => handleEventChange(idx, 'venue', e.target.value)}
                          className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col gap-1.5">
                          <label className="font-semibold text-foundation-ink/75">City</label>
                          <input
                            type="text"
                            value={evt.city}
                            onChange={(e) => handleEventChange(idx, 'city', e.target.value)}
                            className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                          />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="font-semibold text-foundation-ink/75">State</label>
                          <input
                            type="text"
                            value={evt.state}
                            onChange={(e) => handleEventChange(idx, 'state', e.target.value)}
                            className="p-2.5 bg-foundation-bg border border-foundation-line/80 rounded-lg text-xs"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Admin;
