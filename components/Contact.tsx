
import React from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will be in touch shortly.");
  };

  return (
    <section className="py-24 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-navy rounded-[3rem] p-12 lg:p-20 border border-white/10 overflow-hidden relative">
          {/* Subtle Decorative Background Element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-sm font-bold text-gold uppercase tracking-[0.3em] mb-6">Connect With Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">Let's Build Something <br /><span className="text-gold italic">Different</span>.</h3>
              
              <div className="space-y-8 mt-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email Us</h4>
                    <p className="text-gray-400">Info@lookershub.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Call Us</h4>
                    <p className="text-gray-400">+1 (800) LOOKERS</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Our Studio</h4>
                    <p className="text-gray-400">123 Innovation Way, <br />Tech Valley, CA 94043</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Service Interested In</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option className="bg-navy">App Development</option>
                  <option className="bg-navy">Product Operations</option>
                  <option className="bg-navy">Marketing & Growth</option>
                  <option className="bg-navy">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Your Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="Tell us about your visionary project..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 rounded-xl gold-gradient text-navy font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all"
              >
                Send Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
