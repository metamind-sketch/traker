import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative z-30 w-full max-w-7xl mx-auto py-16 sm:py-24 px-4 flex flex-col items-center select-none overflow-hidden">
      
      {/* Decorative localized ambient glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section subtitle & title */}
      <div className="text-center mb-16 relative flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500/5 text-amber-500 border border-amber-500/10 rounded-full text-[10px] font-mono tracking-widest uppercase mb-4">
          <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
          <span>COMMUNITY REVIEWS</span>
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
          Feedback from consistent builders
        </h3>
        <p className="text-stone-400 text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Real stories about small daily improvements turning into long-term compound results.
        </p>
      </div>

      {/* Testimonial Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl px-4 relative z-10">
        
        {/* Card 1: Rahul S. */}
        <motion.div 
          className="bg-[#0e0c0b] border border-stone-850/70 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#FF561E]/30 hover:bg-stone-900/40 transition-all duration-300 flex flex-col justify-between"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Corner Glow Accent */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-4">
            {/* Gold Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500 stroke-1" />
              ))}
            </div>
            
            {/* Quote Content */}
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-semibold">
              “Very simple and easy to use habit tracker. Helped me stay consistent daily.”
            </p>
          </div>

          {/* Author Info */}
          <div className="mt-8 pt-4 border-t border-stone-900 flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80" 
              alt="Rahul S." 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-amber-500/20 shadow-md transform group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h4 className="text-xs font-black text-white">Rahul S.</h4>
              <p className="text-[10px] text-stone-500 font-mono">Verified Member</p>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Priya K. */}
        <motion.div 
          className="bg-[#0e0c0b] border border-stone-850/70 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#FF561E]/30 hover:bg-stone-900/40 transition-all duration-300 flex flex-col justify-between"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Corner Glow Accent */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-4">
            {/* Gold Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500 stroke-1" />
              ))}
            </div>
            
            {/* Quote Content */}
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-semibold">
              “I finally started tracking my habits properly. Great design and clear format.”
            </p>
          </div>

          {/* Author Info */}
          <div className="mt-8 pt-4 border-t border-stone-900 flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80" 
              alt="Priya K." 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-amber-500/20 shadow-md transform group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h4 className="text-xs font-black text-white">Priya K.</h4>
              <p className="text-[10px] text-stone-500 font-mono">Premium User</p>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Arjun M. */}
        <motion.div 
          className="bg-[#0e0c0b] border border-stone-850/70 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-[#FF561E]/30 hover:bg-stone-900/40 transition-all duration-300 flex flex-col justify-between"
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {/* Corner Glow Accent */}
          <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-xl pointer-events-none" />
          
          <div className="space-y-4">
            {/* Gold Stars */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500 stroke-1" />
              ))}
            </div>
            
            {/* Quote Content */}
            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed font-semibold">
              “This is exactly what I needed. Simple but very effective for daily routine.”
            </p>
          </div>

          {/* Author Info */}
          <div className="mt-8 pt-4 border-t border-stone-900 flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80" 
              alt="Arjun M." 
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full object-cover border border-amber-500/20 shadow-md transform group-hover:scale-105 transition-transform duration-300"
            />
            <div>
              <h4 className="text-xs font-black text-white">Arjun M.</h4>
              <p className="text-[10px] text-stone-500 font-mono">Consistent Builder</p>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
