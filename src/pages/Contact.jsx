import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, HelpCircle, CheckCircle } from 'lucide-react';


const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-populate subject based on URL query parameter (?subject=...)
  useEffect(() => {
    const subjectParam = searchParams.get('subject');
    if (subjectParam) {
      // Clean matching
      if (subjectParam.toLowerCase().includes('astrology')) {
        setFormData(prev => ({ ...prev, subject: 'Astrology Consultation' }));
      } else if (subjectParam.toLowerCase().includes('vaastu') || subjectParam.toLowerCase().includes('vastu')) {
        setFormData(prev => ({ ...prev, subject: 'Vaastu Consultation' }));
      } else if (subjectParam.toLowerCase().includes('katha') || subjectParam.toLowerCase().includes('invitation')) {
        setFormData(prev => ({ ...prev, subject: 'Katha Invitation' }));
      } else {
        setFormData(prev => ({ ...prev, subject: 'General Inquiry' }));
      }
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Since there is no actual database for this client, we simulate a premium submission log
    console.log('Inquiry Form Submission:', formData);
    setIsSubmitted(true);
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        subject: 'General Inquiry',
        message: ''
      });
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <div className="relative">
      


      {/* Header Banner */}
      <section className="py-16 text-center border-b border-foundation-line/30">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-accent-kathakar uppercase tracking-widest text-[10px] font-bold font-body">
            Reach Out Directly
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-display text-foundation-ink mt-2">
            Submit an Inquiry
          </h1>
          <p className="text-sm text-foundation-ink/75 font-body mt-4 leading-relaxed max-w-xl mx-auto">
            Please fill out the form below. Dr. Jalpesh Mehta's office will review your request and contact you within 24 to 48 hours.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4"><div className="h-[1px] bg-foundation-line/20 my-6" /></div>

      {/* Main Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Inquiry Form Column */}
          <div className="lg:col-span-7 bg-[#FAF5F2] border border-foundation-line/60 rounded-3xl p-8 sm:p-10 shadow-sm relative overflow-hidden text-left">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <CheckCircle size={56} className="text-emerald-700 animate-bounce" />
                <h3 className="font-display font-bold text-2xl text-foundation-ink">
                  Inquiry Received Auspiciously
                </h3>
                <p className="text-xs text-foundation-ink/70 font-body max-w-sm">
                  Pranam. Your consultation request has been successfully captured. Dr. Mehta's personal assistant will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-body text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-semibold text-foundation-ink/80">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rajesh Kumar"
                      className="p-3 bg-foundation-bg border border-foundation-line/75 rounded-lg focus:outline-none focus:border-foundation-ink transition-colors font-medium text-foundation-ink"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="font-semibold text-foundation-ink/80">
                      Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="p-3 bg-foundation-bg border border-foundation-line/75 rounded-lg focus:outline-none focus:border-foundation-ink transition-colors font-medium text-foundation-ink"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-semibold text-foundation-ink/80">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rajesh@example.com"
                      className="p-3 bg-foundation-bg border border-foundation-line/75 rounded-lg focus:outline-none focus:border-foundation-ink transition-colors font-medium text-foundation-ink"
                    />
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="font-semibold text-foundation-ink/80">
                      Your Location (City, State)
                    </label>
                    <input
                      required
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Ahmedabad, Gujarat"
                      className="p-3 bg-foundation-bg border border-foundation-line/75 rounded-lg focus:outline-none focus:border-foundation-ink transition-colors font-medium text-foundation-ink"
                    />
                  </div>
                </div>

                {/* Subject of Inquiry */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-semibold text-foundation-ink/80">
                    Subject of Inquiry
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="p-3 bg-foundation-bg border border-foundation-line/75 rounded-lg focus:outline-none focus:border-foundation-ink transition-colors font-medium text-foundation-ink"
                  >
                    <option value="Astrology Consultation">Astrology Consultation (Kundali & Rashifal)</option>
                    <option value="Vaastu Consultation">Vaastu Consultation (Commercial / Home Audit)</option>
                    <option value="Katha Invitation">Katha Invitation (Shrimad Bhagwat / Shiv Puran)</option>
                    <option value="General Inquiry">General Inquiry / Guidance</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-semibold text-foundation-ink/80">
                    Message / Inquiry Details
                  </label>
                  <textarea
                    required
                    rows="5"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide specific details, e.g. dates for Katha, birth details for Astrology, or plot size for Vaastu..."
                    className="p-3 bg-foundation-bg border border-foundation-line/75 rounded-lg focus:outline-none focus:border-foundation-ink transition-colors font-medium text-foundation-ink resize-none"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-foundation-ink text-foundation-bg font-semibold tracking-wider uppercase hover:bg-foundation-ink/90 transition-all flex items-center justify-center gap-2 shadow-md mt-2"
                >
                  <Send size={16} /> Send Secure Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            
            {/* Office Info card */}
            <div className="bg-foundation-bg/60 border border-foundation-line/65 rounded-3xl p-8 flex flex-col gap-6 shadow-inner">
              <h3 className="font-display font-bold text-xl text-foundation-ink">
                Headquarters Office
              </h3>
              
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-accent-kathakar shrink-0 mt-0.5" />
                <div className="font-body text-foundation-ink/80">
                  <p className="font-semibold text-foundation-ink">Ramkrupa Foundation Mansion</p>
                  <p className="mt-1 leading-relaxed">
                    Satellite Road, Opposite Temple Gardens,<br />
                    Ahmedabad, Gujarat - 380015
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-accent-astrologer shrink-0" />
                <div className="font-body text-foundation-ink/80">
                  <p className="font-semibold text-foundation-ink">Inquiry Helplines</p>
                  <p className="mt-0.5">+91 98980 12345, +91 79 2654 3210</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-accent-vastu shrink-0" />
                <div className="font-body text-foundation-ink/80">
                  <p className="font-semibold text-foundation-ink">Official Email</p>
                  <p className="mt-0.5">inquiry@drjalpeshmehta.com</p>
                </div>
              </div>
            </div>

            {/* Note Card */}
            <div className="bg-foundation-bg/30 border border-foundation-line/45 rounded-3xl p-6 sm:p-8 flex gap-4">
              <HelpCircle size={24} className="text-foundation-ink/60 shrink-0 mt-0.5" />
              <div className="font-body text-xs text-foundation-ink/75 leading-relaxed">
                <h4 className="font-semibold text-foundation-ink mb-1">Inquiry Guidelines</h4>
                <p>
                  For **Vedic Astrology** consultations, please bring or attach exact birth date, time, and location.
                </p>
                <p className="mt-2">
                  For **Katha Invitations**, please mention proposed dates, city assembly size, and hosting trust details.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
