import { motion, AnimatePresence } from 'motion/react';
import { Play, Sparkles, Check, ChevronRight, Volume2, Clock, Landmark, Smartphone, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

interface WatchDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WatchDemoModal({ isOpen, onClose }: WatchDemoModalProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Context Matching Schedule',
      desc: 'FynTraker Hub reads your habits and tracking metrics in real time. Morning activities shift silently to evening wind-down triggers dynamically based on the clock.',
      concept: 'CIRCADIAN ISOLATION',
      icon: <Clock className="w-6 h-6 text-amber-500" />
    },
    {
      title: 'Sustain Active Streaks',
      desc: 'When daily completions are reached, streak metrics unlock compounding rewards and status points. This transforms standard routines into gamified habits that stick.',
      concept: 'BEHAVIORAL HABIT BOOSTER',
      icon: <Zap className="w-6 h-6 text-orange-500" />
    },
    {
      title: 'Behavioral Insights telemetry',
      desc: 'Review weekly completion splits and consistency trends. Optimize weak periods and balance productivity with built-in restorative periods.',
      concept: 'INTELLIGENT TELEMETRY',
      icon: <Sparkles className="w-6 h-6 text-amber-400" />
    }
  ];

  useEffect(() => {
    if (!isOpen) return;
    
    // Auto cycle through features mock presentation
    const interval = setInterval(() => {
      setStep(prev => (prev + 1) % steps.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-neutral-950/85 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#0c0a09] border border-stone-850 rounded-[32px] overflow-hidden shadow-2xl z-10 p-6 md:p-8 text-left"
        >
          {/* Close corner Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-stone-500 hover:text-white bg-stone-900 border border-stone-800/80 p-2 rounded-full transition-colors cursor-pointer"
          >
            ×
          </button>

          <div className="space-y-6">
            <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Interactive System Guide</span>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white tracking-tight">
                How FynTraker Hub guides your day
              </h3>
              <p className="text-stone-400 text-xs sm:text-sm mt-1">
                A rapid interactive walk-through explaining our core behavior modeling engine.
              </p>
            </div>

            {/* Video-Style simulation screen widget */}
            <div className="relative aspect-video bg-[#050403] rounded-2xl border border-stone-900 overflow-hidden flex flex-col justify-between p-6">
              
              {/* Top simulation details overlay */}
              <div className="flex justify-between items-center text-[10px] font-mono font-medium text-stone-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  SIMULATING ENGINE RUNTIME
                </span>
                <span>STEP {step + 1} OF 3</span>
              </div>

              {/* Central Dynamic Step Content Presentation */}
              <div className="my-auto py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-stone-900/80 border border-stone-850 rounded-xl flex-shrink-0 text-amber-500">
                      {steps[step].icon}
                    </div>
                    
                    <div className="space-y-1.5 text-left">
                      <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-amber-500">
                        {steps[step].concept}
                      </span>
                      <h4 className="text-sm font-bold text-stone-100 font-display">
                        {steps[step].title}
                      </h4>
                      <p className="text-stone-400 text-xs leading-relaxed max-w-md font-sans font-medium">
                        {steps[step].desc}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Step indicator progress block */}
              <div className="flex gap-2">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setStep(idx)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${
                      step === idx ? 'w-8 bg-amber-500' : 'w-2 bg-stone-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Features summary details */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center select-none">
              <div className="bg-[#12100e] border border-stone-900 rounded-xl p-3">
                <span className="block text-xl font-extrabold text-white font-display">0.0s</span>
                <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wide">Sync Delay</span>
              </div>
              <div className="bg-[#12100e] border border-stone-900 rounded-xl p-3">
                <span className="block text-xl font-extrabold text-white font-display">100%</span>
                <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wide">Offline Native</span>
              </div>
              <div className="bg-[#12100e] border border-stone-900 rounded-xl p-3">
                <span className="block text-xl font-extrabold text-white font-display">+2.0x</span>
                <span className="text-[9px] font-semibold text-stone-500 uppercase tracking-wide">Streak Boosters</span>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="flex gap-3 pt-3">
              <button
                onClick={onClose}
                className="flex-1 bg-white hover:bg-neutral-200 text-stone-950 font-bold py-3.5 rounded-2xl text-xs transition-colors cursor-pointer"
              >
                Close and Start Tracking
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
