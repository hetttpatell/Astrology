import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { Lotus } from './SpiritualMotif';

// Custom SVG Brand Icons since Lucide v4 removed them
const YoutubeIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

const FacebookIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// WhatsApp Icon
const WhatsAppIcon = ({ size = 20, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-foundation-ink text-foundation-bg/80 pt-16 pb-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid - 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Brand & Socials */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <Lotus size={28} className="text-accent-kathakar" />
              <span className="font-display text-xl font-bold tracking-wide text-foundation-bg">
                Dr. Jalpesh Mehta
              </span>
            </div>
            <p className="text-[12px] text-foundation-bg/60 leading-relaxed font-body max-w-sm">
              Spreading Sanatan Dharma and offering guidance through Vedic Astrology, Vaastu Sastra, and Bhagwat Katha narration. Founder of Ramkrupa Foundation, Ahmedabad.
            </p>
            {/* Social Media Links */}
            <div className="flex items-center gap-2.5 mt-2">
              <a
                href="https://www.youtube.com/@KathakarDrJalpeshMehtta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-foundation-bg/15 text-foundation-bg/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                title="Subscribe on YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/drjalpeshmehta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-foundation-bg/15 text-foundation-bg/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                title="Follow on Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://www.instagram.com/drjalpeshmehta"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-foundation-bg/15 text-foundation-bg/70 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                title="Follow on Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/919898012345"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-foundation-bg/15 text-[#25D366] hover:text-[#5bf58f] hover:border-[#25D366]/30 hover:bg-[#25D366]/10 transition-all"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="font-display font-bold text-[13px] tracking-widest text-foundation-bg uppercase mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-foundation-bg/60 font-body">
              <li><Link to="/astrology" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Kundali Reading</Link></li>
              <li><Link to="/astrology" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Marriage Compatibility</Link></li>
              <li><Link to="/astrology" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Dosh Nivaran</Link></li>
              <li><Link to="/vaastu" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Vaastu Consultation</Link></li>
              <li><Link to="/kathakar" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Bhagwat Katha</Link></li>
              <li><Link to="/astrology" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Gemstone Consultation</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="font-display font-bold text-[13px] tracking-widest text-foundation-bg uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-[12px] text-foundation-bg/60 font-body">
              <li><Link to="/" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Home</Link></li>
              <li><a href="/#about-snippet" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> About Dr. Mehta</a></li>
              <li><Link to="/astrology" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Vedic Astrology</Link></li>
              <li><Link to="/vaastu" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Vaastu-Sastra</Link></li>
              <li><Link to="/kathakar" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Bhagwat Kathakar</Link></li>
              <li><Link to="/contact" className="hover:text-foundation-bg transition-colors flex items-center gap-1"><ChevronRight size={10} /> Contact / Inquiry</Link></li>
              <li><Link to="/admin" className="hover:text-foundation-bg/50 transition-colors flex items-center gap-1 text-foundation-bg/30"><ChevronRight size={10} /> CMS Login</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-display font-bold text-[13px] tracking-widest text-foundation-bg uppercase mb-5">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-[12px] text-foundation-bg/60 font-body">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-accent-kathakar shrink-0 mt-0.5" />
                <span>
                  Ramkrupa Foundation,<br />
                  Satellite Road, Ahmedabad,<br />
                  Gujarat - 380015
                </span>
              </div>
              <a href="tel:+919898012345" className="flex items-center gap-2.5 hover:text-foundation-bg transition-colors">
                <Phone size={14} className="text-accent-kathakar shrink-0" />
                <span>+91 98980 12345</span>
              </a>
              <a href="mailto:inquiry@drjalpeshmehta.com" className="flex items-center gap-2.5 hover:text-foundation-bg transition-colors">
                <Mail size={14} className="text-accent-kathakar shrink-0" />
                <span>inquiry@drjalpeshmehta.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Clock size={14} className="text-accent-kathakar shrink-0" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-foundation-bg/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[10px] text-foundation-bg/40 font-body uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Dr. Jalpesh Mehta. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed in Reverence of Vedic Traditions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
