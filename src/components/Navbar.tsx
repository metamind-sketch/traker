import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, Flame } from 'lucide-react';

export default function Navbar() {
  const [timeLeft, setTimeLeft] = useState(599); // 9 mins 59 secs countdown

  // Countdown timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 599));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="bg-gradient-to-r from-orange-500 via-amber-400 to-amber-500 text-stone-950 text-center shadow-lg select-none border-b border-amber-600/20"
      >
        <div className="py-3.5 px-4 text-xs font-bold font-mono tracking-wider flex items-center justify-center gap-3 whitespace-nowrap min-h-[48px]">
          <div className="flex items-center gap-1.5 bg-stone-950 text-amber-400 py-0.5 px-2 rounded-md text-[10px] sm:text-[11px] font-black shadow-inner">
            <Clock className="w-3.5 h-3.5 text-orange-500 animate-pulse stroke-[3]" />
            <span>{formatTime(timeLeft)}</span>
          </div>
          <span className="text-stone-950 font-extrabold text-[10.5px] sm:text-xs">
            🔥 Limited Time Offer: 75% OFF Ends Soon
          </span>
        </div>
      </motion.div>
    </nav>
  );
}

