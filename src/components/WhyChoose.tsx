import { motion } from 'motion/react';
import { 
  Check, 
  Award
} from 'lucide-react';

export default function WhyChoose() {
  const checkItems = [
    { title: "Google Sheets based", desc: "Use it on desktop or mobile.", emoji: "📊" },
    { title: "No subscription", desc: "One-time payment.", emoji: "💸" },
    { title: "Simple setup", desc: "Start in seconds.", emoji: "⚡" },
    { title: "Safe and secure", desc: "Your data stays yours.", emoji: "🛡️" }
  ];

  return (
    <section id="why-choose" className="relative z-30 w-full max-w-7xl mx-auto py-16 sm:py-24 px-4 flex flex-col items-center select-none overflow-hidden">
      
      {/* Dynamic ambient localized radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none -z-10" />

      {/* Grid header details */}
      <div className="text-center mb-16 relative flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/5 text-amber-500 border border-amber-500/10 rounded-full text-[10px] font-mono tracking-widest uppercase mb-4">
          <Award className="w-3 h-3 text-amber-500 fill-amber-500/20" />
          <span>PROVEN SYSTEM DESIGNED FOR YOU</span>
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
          Why Choose Daily Habit Tracker?
        </h3>
        <p className="text-stone-400 text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed">
          The ultimate framework built to remove cognitive friction and support your daily streak consistency without unnecessary subscription fees.
        </p>
      </div>

      {/* Centered Editorial Value Proposition Layout */}
      <div className="w-full max-w-3xl px-4 flex flex-col items-center text-center space-y-8 mb-16 sm:mb-20">
        
        <div className="space-y-4 flex flex-col items-center">
          {/* Replaced 'THE ADVANTAGE' with the beautiful visual proof stars widget from user image */}
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center select-none"
          >
            <div className="flex -space-x-2.5 items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80" 
                alt="User proof 1" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border-2 border-[#12100f] object-cover ring-1 ring-white/10 shadow-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80" 
                alt="User proof 2" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border-2 border-[#12100f] object-cover ring-1 ring-white/10 shadow-sm"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80" 
                alt="User proof 3" 
                referrerPolicy="no-referrer"
                className="w-8 h-8 rounded-full border-2 border-[#12100f] object-cover ring-1 ring-white/10 shadow-sm"
              />
              <div className="w-8 h-8 rounded-full border-2 border-[#12100f] bg-stone-900 ring-1 ring-white/10 flex items-center justify-center text-[#ffedd5] text-[9.5px] font-extrabold font-sans shadow-sm">
                +52
              </div>
            </div>
            
            <div className="flex gap-0.5 text-[#FF5C23] text-xs mt-1.5 justify-center">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            
            <span className="text-stone-400 text-[10px] font-bold tracking-wider uppercase mt-1">
              Trusted worldwide
            </span>
          </motion.div>
          
          <h4 className="text-2xl sm:text-3xl font-black leading-snug bg-gradient-to-r from-white via-amber-200 to-amber-500 bg-clip-text text-transparent drop-shadow-sm select-none">
            Designed to integrate perfectly with your daily routine.
          </h4>
          
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans max-w-2xl text-center">
            Many trackers lock your data inside heavy, cluttered apps that demand high monthly subscription fees. We believe consistency should be <span className="text-[#FF7E00] font-bold">lightweight, persistent, and direct</span>. Enjoy <span className="text-white font-extrabold shadow-sm">complete privacy</span> and a simple interface built to make daily improvements automatic.
          </p>
        </div>

        {/* Compact 2x2 grid of check features underneath for dense info hierarchy with milled precision */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-8 border-t border-[#1a1817] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] w-full text-left max-w-2xl">
          {checkItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative flex items-start gap-4 p-4.5 rounded-2xl bg-gradient-to-b from-[#131110] to-[#0c0a09] border border-[#221f1e] hover:border-[#FF7E00]/40 ring-1 ring-white/[0.03] ring-inset transition-all duration-300 overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(255,126,0,0.04)]"
            >
              {/* Radial gradient background hover glow */}
              <div className="absolute -inset-px bg-gradient-to-r from-[#103F7A]/15 to-[#FF7E00]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
              
              {/* Luxury indicator check circle with customized emoji inside */}
              <div className="relative flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/15 group-hover:border-emerald-400/40 text-emerald-400 flex items-center justify-center font-bold text-xl shadow-inner transition-colors duration-300 z-10 select-none">
                <span className="transform group-hover:scale-115 transition-transform duration-300 leading-none">{item.emoji}</span>
                {/* Secondary badge dot checkmark to denote completeness */}
                <div className="absolute -bottom-1 -right-1 w-4.5 h-4.5 rounded-full bg-emerald-500 border-2 border-[#0c0a09] flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-[#0c0a09] stroke-[5]" />
                </div>
              </div>
              
              <div className="space-y-1 relative z-10">
                <span className="block text-sm font-extrabold text-white group-hover:text-amber-100 transition-colors duration-300 leading-tight">
                  {item.title}
                </span>
                <span className="block text-xs text-stone-400 group-hover:text-stone-300 transition-colors duration-300 leading-normal">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Infinite Horizontal Scrolling Marquee of Key Concepts */}
      <div className="w-full relative select-none mt-12 md:mt-16 py-6 md:py-8 bg-[#181616] border-y border-stone-800 shadow-xl overflow-hidden rounded-3xl">
        {/* Soft edge fade masks for premium aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#181616] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#181616] to-transparent z-20 pointer-events-none" />

        {/* Scrolling track */}
        <div className="overflow-hidden w-full flex">
          <motion.div
            className="flex gap-16 md:gap-24 w-max px-6 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 20,
              repeat: Infinity,
            }}
          >
            {/* Doubled for seamless looping */}
            {[...Array(4)].flatMap(() => [
              { main: "Build", sub: "DISCIPLINE", isPurple: false },
              { main: "Track", sub: "PROGRESS", isPurple: true },
              { main: "Transform", sub: "YOUR LIFE", isPurple: false },
            ]).map((item, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center shrink-0 min-w-[140px] sm:min-w-[180px]">
                {/* Main Concept Big text */}
                <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${
                  item.isPurple 
                    ? "text-[#d8b4fe] drop-shadow-[0_2px_10px_rgba(216,180,254,0.15)]" 
                    : "text-[#e1e1cd] drop-shadow-[0_2px_10px_rgba(225,225,205,0.15)]"
                }`}>
                  {item.main}
                </span>
                {/* Secondary label text */}
                <span className={`text-[10px] sm:text-xs font-black tracking-[0.2em] uppercase mt-2 ${
                  item.isPurple 
                    ? "text-[#d8b4fe]/85" 
                    : "text-[#e1e1cd]/70"
                }`}>
                  {item.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
