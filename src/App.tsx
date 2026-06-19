import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Flame, 
  Sparkles, 
  Play, 
  Shield, 
  ChevronRight, 
  ArrowRight,
  Smartphone,
  CheckCircle,
  Zap,
  Activity,
  Heart,
  Droplets,
  BookOpen,
  Moon,
  Clock,
  Footprints,
  ArrowUpDown,
  TrendingUp,
  RotateCcw,
  BarChart3,
  PieChart,
  Calendar,
  FileSpreadsheet,
  Download
} from 'lucide-react';
import Navbar from './components/Navbar';
import WatchDemoModal from './components/WatchDemoModal';
import InteractiveTrackerMockup from './components/InteractiveTrackerMockup';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import WhyChoose from './components/WhyChoose';
import FynTrakerLogo from './components/FynTrakerLogo';
import { Habit } from './types';

const habitTrackerBg = '/src/assets/images/active_model_sunset_bg_1781762536998.jpg';

const INITIAL_HABITS: Habit[] = [
  {
    id: '1',
    name: 'Morning stretch & yoga',
    category: 'Health',
    timeOfDay: 'morning',
    completed: true,
    history: [],
    streak: 12,
    totalTargetDays: 14,
    completedCount: 12,
    iconName: 'Activity',
    color: 'orange'
  },
  {
    id: '2',
    name: 'Hydrate (3L water)',
    category: 'Nutrition',
    timeOfDay: 'allday',
    completed: false,
    history: [],
    streak: 9,
    totalTargetDays: 9,
    completedCount: 8,
    iconName: 'Droplets',
    color: 'amber'
  },
  {
    id: '3',
    name: 'Deep focus work (60m)',
    category: 'Productivity',
    timeOfDay: 'afternoon',
    completed: false,
    history: [],
    streak: 5,
    totalTargetDays: 7,
    completedCount: 4,
    iconName: 'Zap',
    color: 'orange'
  },
  {
    id: '4',
    name: 'Read 15 pages',
    category: 'Mind',
    timeOfDay: 'evening',
    completed: true,
    history: [],
    streak: 18,
    totalTargetDays: 20,
    completedCount: 18,
    iconName: 'BookOpen',
    color: 'amber'
  },
  {
    id: '5',
    name: 'Evening wind-down & gratitude',
    category: 'Mind',
    timeOfDay: 'evening',
    completed: false,
    history: [],
    streak: 14,
    totalTargetDays: 14,
    completedCount: 13,
    iconName: 'Moon',
    color: 'orange'
  }
];

export default function App() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem('habitstick_mock_habits');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return INITIAL_HABITS;
  });

  const [currentStreak, setCurrentStreak] = useState(12);
  const [overallRate, setOverallRate] = useState(85);
  const [watchDemoOpen, setWatchDemoOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'preparing' | 'ready'>('idle');

  useEffect(() => {
    localStorage.setItem('habitstick_mock_habits', JSON.stringify(habits));
    // Re-calculate streak and completion metrics to feed the statistics module
    const maxStreak = habits.reduce((max, h) => Math.max(max, h.streak), 0);
    setCurrentStreak(maxStreak);

    const completed = habits.filter(h => h.completed).length;
    const rate = habits.length ? Math.round((completed / habits.length) * 100) : 0;
    setOverallRate(rate);
  }, [habits]);

  const handleDownload = () => {
    if (downloadStatus !== 'idle') return;
    setDownloadStatus('preparing');
    setTimeout(() => {
      setDownloadStatus('ready');
      const content = `Smart Assignment Tracker - Google Sheets Compatible Template\nCreated with FynTraker Hub\n\nTask Name,Subject,Priority,Due Date,Notes,Status\nMath Homework,Algebra,High,2026-06-25,Chapter 4 Exercises,Not Started\nHistory Essay,World History,Medium,2026-06-28,French Revolution 3 pages,Not Started\nPhysics Lab,Mechanics,High,2026-07-02,Friction measurements,Not Started\nChemistry Quiz,Noble Gases,Low,2026-07-05,Multiple choice prep,Waiting`;
      const blob = new Blob([content], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Smart_Assignment_Tracker_Template.csv';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      setTimeout(() => {
        setDownloadStatus('idle');
      }, 2500);
    }, 1200);
  };

  const handleScrollToTracker = () => {
    const element = document.getElementById('stats');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070504] text-stone-100 overflow-x-hidden font-sans antialiased selection:bg-amber-500 selection:text-stone-950">
      
      {/* 1. Header Navigation Bar */}
      <Navbar onOpenDemo={() => setWatchDemoOpen(true)} />

      {/* 2. Stunning Amber Glow Hero Area / Graphic */}
      <header className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col items-center justify-center text-center px-4 overflow-hidden select-none">
        
        {/* Soft-focused background active lifestyle artwork matching user upload */}
        <motion.div 
          initial={{ scale: 1.0, opacity: 0 }}
          animate={{ 
            scale: [1.02, 1.06, 1.02],
            x: [0, 4, 0],
            y: [0, -3, 0],
            opacity: 0.72 
          }}
          transition={{
            scale: {
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut"
            },
            x: {
              repeat: Infinity,
              duration: 10,
              ease: "easeInOut"
            },
            y: {
              repeat: Infinity,
              duration: 9,
              ease: "easeInOut"
            },
            opacity: { duration: 1.2 }
          }}
          className="absolute inset-0 -z-20 w-full h-full pointer-events-none select-none overflow-hidden"
        >
          <img
            src={habitTrackerBg}
            alt="Warm glowing circadian active workflow background"
            className="w-full h-full object-cover object-center sm:object-right-top"
            referrerPolicy="no-referrer"
          />
          {/* Edge gradient mask to perfectly blend image borders into dark background */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070504] via-[#070504]/50 to-[#070504]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070504] via-transparent to-[#070504]/50" />
        </motion.div>

        {/* Intricate Ambient Backlight Glowing node matching user screenshot */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[500px] h-[500px] bg-gradient-to-b from-orange-600/35 via-amber-900/15 to-transparent blur-3xl rounded-full -z-10 animate-pulse duration-[8000ms] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-6 md:space-y-8 flex flex-col items-center justify-center text-center w-full">
          

          {/* Centered Social Proof Avatars & Stars matching User screenshot */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center w-full select-none"
          >
            <div className="flex -space-x-3 items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100" 
                alt="User avatar 1" 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#070504] object-cover ring-1 ring-white/10"
              />
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" 
                alt="User avatar 2" 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#070504] object-cover ring-1 ring-white/10"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" 
                alt="User avatar 3" 
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#070504] object-cover ring-1 ring-white/10"
              />
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#070504] bg-stone-900 ring-1 ring-white/10 flex items-center justify-center text-[#ffedd5] text-[10px] sm:text-xs font-bold font-sans">
                +52
              </div>
            </div>
            
            <div className="flex gap-0.5 text-[#FF5C23] text-xs sm:text-sm mt-2 justify-center">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            
            <span className="text-zinc-400 text-[11px] sm:text-xs font-semibold tracking-wide mt-1 underline decoration-stone-850 underline-offset-4 cursor-pointer hover:text-white transition-colors">
              Trusted worldwide
            </span>
          </motion.div>

          {/* Heavyweight centered Heading matching screen style */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.05]"
          >
            Build habits that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500">
              actually stick
            </span>
          </motion.h1>

          {/* Balanced Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-sans font-medium"
          >
            You see the right habits at the right time so your day never feels crowded. Built for high performance, context triggers, and organic alignment.
          </motion.p>

          {/* Related Features Row with premium orange badge overlapping 4 tight grid cells */}
          <div className="relative pt-12 px-4 max-w-4xl mx-auto flex flex-col items-center w-full">
            
            <div className="flex flex-wrap gap-3 mb-[-18px] justify-center relative z-10">
              {/* Instant Download Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToTracker}
                className="px-6 py-3 sm:px-7 sm:py-4 bg-[#FF5C23] text-white font-extrabold rounded-2xl text-[11px] sm:text-xs tracking-widest uppercase shadow-[0_12px_24px_-4px_rgba(255,92,35,0.4)] cursor-pointer flex items-center gap-2 hover:bg-[#ff6c37] transition-all font-sans select-none"
              >
                <Download className="w-4 h-4 text-white shrink-0" />
                <span>Instant Download</span>
              </motion.button>
            </div>

            {/* High-impact cover container with an infinite horizontal marquee of multiple tracker mockups */}
            <div className="w-full overflow-hidden rounded-[24px] border border-black bg-[#0e0c0b] relative shadow-2xl py-8 select-none">
              
              {/* Overlay shadow gradients to make the edges blend elegantly */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0e0c0b] to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0e0c0b] to-transparent z-10 pointer-events-none" />

              <div className="w-full overflow-hidden">
                <motion.div
                  className="flex gap-6 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    ease: "linear",
                    duration: 25,
                    repeat: Infinity,
                  }}
                  whileHover={{ playState: "paused" }}
                >
                  {/* First Set */}
                  {[
                    {
                      img: "/src/assets/images/modular_habit_laptop_mockup_1781810319726.jpg",
                      alt: "Modular Habit Tracker Mockup",
                      tag: "Modular Habit Tracker"
                    },
                    {
                      img: "/src/assets/images/weekly_planner_laptop_mockup_1781809184703.jpg",
                      alt: "Weekly Planner & Scheduler Mockup",
                      tag: "Weekly Planner & Scheduler"
                    },
                    {
                      img: "/src/assets/images/assignment_tracker_laptop_mockup_1781810337145.jpg",
                      alt: "Smart Assignment Tracker Mockup",
                      tag: "Smart Assignment Tracker"
                    }
                  ].map((track, idx) => (
                    <div 
                      key={`marquee-track-1-${idx}`}
                      className="w-[320px] sm:w-[580px] aspect-[16/9] bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shrink-0 relative group/card shadow-lg hover:border-orange-500/30 transition-all duration-300"
                    >
                      <img 
                        src={track.img} 
                        alt={track.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Premium card header label */}
                      <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-800 text-white font-sans font-bold text-[9px] sm:text-[11px] tracking-wide shadow-md">
                        {track.tag}
                      </div>
                    </div>
                  ))}

                  {/* Duplicate Set for Infinite Marquee */}
                  {[
                    {
                      img: "/src/assets/images/modular_habit_laptop_mockup_1781810319726.jpg",
                      alt: "Modular Habit Tracker Mockup",
                      tag: "Modular Habit Tracker"
                    },
                    {
                      img: "/src/assets/images/weekly_planner_laptop_mockup_1781809184703.jpg",
                      alt: "Weekly Planner & Scheduler Mockup",
                      tag: "Weekly Planner & Scheduler"
                    },
                    {
                      img: "/src/assets/images/assignment_tracker_laptop_mockup_1781810337145.jpg",
                      alt: "Smart Assignment Tracker Mockup",
                      tag: "Smart Assignment Tracker"
                    }
                  ].map((track, idx) => (
                    <div 
                      key={`marquee-track-2-${idx}`}
                      className="w-[320px] sm:w-[580px] aspect-[16/9] bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shrink-0 relative group/card shadow-lg hover:border-orange-500/30 transition-all duration-300"
                    >
                      <img 
                        src={track.img} 
                        alt={track.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      {/* Premium card header label */}
                      <div className="absolute bottom-3 left-3 bg-stone-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-800 text-white font-sans font-bold text-[9px] sm:text-[11px] tracking-wide shadow-md">
                        {track.tag}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>





        </div>
      </header>



      {/* 4. Interactive Smartphone Emulator Showcase with Scrolling Background Marquee */}
      <InteractiveTrackerMockup />

      {/* Why Choose Daily Habit Tracker Section */}
      <WhyChoose />

      {/* 5. Customer Testimonials Section */}
      <Testimonials />

      {/* 6. Frequently Asked Questions Section */}
      <Faq />

      {/* 8. Fully integrated simulation walkthrough Modal */}
      <WatchDemoModal 
        isOpen={watchDemoOpen} 
        onClose={() => setWatchDemoOpen(false)} 
      />

      {/* 9. Premium Low-Noise Footer */}
      <footer className="border-t border-stone-850 bg-[#070504] py-12 text-center text-stone-600 select-none">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <FynTrakerLogo textSize="text-sm" />
          </div>

          <div className="text-[11px] font-sans tracking-wide space-y-2 text-center sm:text-right">
            <p className="text-stone-200 font-extrabold font-display">© 2026 FynTraker Hub. All Rights Reserved.</p>
            <p className="text-[10px] text-stone-400 font-semibold font-sans">
              Made with <span className="text-red-500">❤️</span> for Professionals, Students & Self-Improvers.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
