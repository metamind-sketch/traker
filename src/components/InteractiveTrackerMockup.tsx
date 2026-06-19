import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Moon, 
  Sparkles, 
  Activity, 
  Brain, 
  BookOpen, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Wifi,
  Battery,
  Flame,
  Star,
  Play,
  Pause,
  Gauge
} from 'lucide-react';

interface HabitCard {
  type: 'text' | 'image';
  title?: string;
  sub?: string;
  bgIcon?: string;
  icon?: React.ComponentType<any>;
  img?: string;
}

export default function InteractiveTrackerMockup() {
  const [selectedDay, setSelectedDay] = useState<number>(2); // Default 'W' (Wednesday) with 86%
  const [speed, setSpeed] = useState<number>(18); // scrolling duration (lower is faster)
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [playCount, setPlayCount] = useState<number>(348);
  const [lastLoggedHabit, setLastLoggedHabit] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<string | null>(null);

  const handleCheckIn = (title: string) => {
    setPlayCount(prev => prev + 1);
    setLastLoggedHabit(title);
    setActiveCardIndex(title);
    setTimeout(() => {
      setActiveCardIndex(null);
    }, 1000);
  };

  // Weekly data points for the spline chart
  const weeklyData = [
    { day: 'M', value: 65, label: '65% completed' },
    { day: 'T', value: 78, label: '78% completed' },
    { day: 'W', value: 86, label: '86% this week' },
    { day: 'T', value: 72, label: '72% completed' },
    { day: 'F', value: 91, label: '91% completed' },
    { day: 'S', value: 80, label: '80% completed' },
    { day: 'S', value: 85, label: '85% completed' },
  ];

  // Grid background marquee cards (Row 1: Scrolling Left)
  const marqueeRow1: HabitCard[] = [
    {
      type: 'text',
      title: 'Phone off',
      sub: 'by 10:30 PM',
      bgIcon: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20',
      icon: Moon
    },
    {
      type: 'image',
      img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=200'
    },
    {
      type: 'text',
      title: 'Focus session',
      sub: '45 mins blocks',
      bgIcon: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      icon: Brain
    },
    {
      type: 'image',
      img: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=200'
    },
    {
      type: 'text',
      title: 'Stretch out',
      sub: '5 mins daily',
      bgIcon: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      icon: Activity
    }
  ];

  // Grid background marquee cards (Row 2: Scrolling Right)
  const marqueeRow2: HabitCard[] = [
    {
      type: 'image',
      img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=200'
    },
    {
      type: 'text',
      title: 'Meditate',
      sub: '10 mins breath',
      bgIcon: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      icon: Sparkles
    },
    {
      type: 'image',
      img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=200'
    },
    {
      type: 'text',
      title: 'Write journal',
      sub: 'Recap insights',
      bgIcon: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
      icon: BookOpen
    },
    {
      type: 'image',
      img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200'
    }
  ];

  // Double the rows for beautiful seamless infinite scrolling
  const listRow1 = [...marqueeRow1, ...marqueeRow1];
  const listRow2 = [...marqueeRow2, ...marqueeRow2];

  // Calculates coordinate points for custom Bezier spline visual
  const chartHeight = 85;
  const chartWidth = 240;
  const paddingX = 15;
  const points = weeklyData.map((d, index) => {
    const x = paddingX + (index * (chartWidth - paddingX * 2)) / 6;
    const y = chartHeight - (d.value / 100) * (chartHeight - 20) - 10;
    return { x, y };
  });

  // Build the SVG path string for the spline
  let pathString = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const curr = points[i];
    const next = points[i + 1];
    const cpX1 = curr.x + (next.x - curr.x) / 2;
    const cpY1 = curr.y;
    const cpX2 = curr.x + (next.x - curr.x) / 2;
    const cpY2 = next.y;
    pathString += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${next.x} ${next.y}`;
  }

  // Path string for the filled gradient background underneath the spline
  const pathFillString = `${pathString} L ${points[points.length - 1].x} ${chartHeight} L ${points[0].x} ${chartHeight} Z`;

  return (
    <div className="w-full relative py-16 sm:py-24 bg-[#070504] border-t border-stone-900 overflow-hidden select-none">
      
      {/* Background ambient lighting flares matching screenshot highlight style */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-amber-500/5 blur-3xl pointer-events-none rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-600/5 blur-3xl pointer-events-none rounded-full" />

      {/* Header section explaining this live visual emulator view */}
      <div className="max-w-2xl mx-auto text-center px-4 mb-14 relative z-35">
        <motion.span 
          animate={{ 
            opacity: [0.8, 1, 0.8],
            letterSpacing: ["0.15em", "0.22em", "0.15em"],
            scale: [0.98, 1.02, 0.98]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          style={{ color: '#f8970e' }}
          className="text-[10px] font-mono tracking-widest uppercase font-black block mb-3 drop-shadow-[0_0_12px_rgba(248,151,14,0.15)]"
        >
          COMPANION ACTIVE WORKSPACE
        </motion.span>
        
        <h2 
          style={{ color: '#ef0ce9' }}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight font-display drop-shadow-[0_2px_15px_rgba(239,12,233,0.1)]"
        >
          Build steady daily habits
        </h2>
        
        <p 
          style={{ color: '#e4e0de' }}
          className="text-xs sm:text-sm mt-3 max-w-lg mx-auto leading-relaxed font-medium"
        >
          With a layout that keeps your mornings, evenings and focus simple to follow. Used by people to improve routines.
        </p>
      </div>

      {/* Marquee Background behind elements */}
      <div id="interactive-demo" className="relative w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center min-h-[550px] z-10">
        
        {/* Soft dark glassy mask shadows at left and right sides to blend with deep black background */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#070504] to-transparent z-15 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#070504] to-transparent z-15 pointer-events-none" />

        {/* Dynamic Background Marquees Container covering the full div heights to ignore empty space */}
        <div className="absolute inset-0 flex flex-col justify-between py-4 sm:py-6 gap-4 sm:gap-6 opacity-25 hover:opacity-40 transition-all duration-300 overflow-hidden z-0 pointer-events-none">
          
          {/* Row 1 Marquee (Scrolling Left) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-4 shrink-0 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: isPaused ? 999999 : speed,
                repeat: Infinity
              }}
            >
              {listRow1.map((item, idx) => (
                <div key={`row1-${idx}`} className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-850 p-2.5 sm:p-3 flex flex-col justify-between hover:scale-105 hover:border-amber-500/20 transition-all duration-300">
                  {item.type === 'text' ? (
                    <>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.bgIcon}`}>
                        {item.icon && <item.icon className="w-4 h-4" />}
                      </div>
                      <div className="text-left mt-2">
                        <p className="text-[10px] font-bold text-white leading-tight truncate">{item.title}</p>
                        <p className="text-[8px] text-zinc-500 font-medium truncate">{item.sub}</p>
                      </div>
                    </>
                  ) : (
                    <img src={item.img} alt="activity" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-85 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 Marquee (Scrolling Right) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-4 shrink-0 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: isPaused ? 999999 : speed * 1.25, // slightly offset Row 2 speed for premium visual depth
                repeat: Infinity
              }}
            >
              {listRow2.map((item, idx) => (
                <div key={`row2-${idx}`} className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-850 p-2.5 sm:p-3 flex flex-col justify-between hover:scale-105 hover:border-amber-500/20 transition-all duration-300">
                  {item.type === 'text' ? (
                    <>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.bgIcon}`}>
                        {item.icon && <item.icon className="w-4 h-4" />}
                      </div>
                      <div className="text-left mt-2">
                        <p className="text-[10px] font-bold text-white leading-tight truncate">{item.title}</p>
                        <p className="text-[8px] text-zinc-500 font-medium truncate">{item.sub}</p>
                      </div>
                    </>
                  ) : (
                    <img src={item.img} alt="activity" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-85 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3 Marquee (Scrolling Left) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-4 shrink-0 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: isPaused ? 999999 : speed * 0.9,
                repeat: Infinity
              }}
            >
              {listRow1.map((item, idx) => (
                <div key={`row3-${idx}`} className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-850 p-2.5 sm:p-3 flex flex-col justify-between hover:scale-105 hover:border-amber-500/20 transition-all duration-300">
                  {item.type === 'text' ? (
                    <>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.bgIcon}`}>
                        {item.icon && <item.icon className="w-4 h-4" />}
                      </div>
                      <div className="text-left mt-2">
                        <p className="text-[10px] font-bold text-white leading-tight truncate">{item.title}</p>
                        <p className="text-[8px] text-zinc-500 font-medium truncate">{item.sub}</p>
                      </div>
                    </>
                  ) : (
                    <img src={item.img} alt="activity" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-85 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 4 Marquee (Scrolling Right) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-4 shrink-0 w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: isPaused ? 999999 : speed * 1.4,
                repeat: Infinity
              }}
            >
              {listRow2.map((item, idx) => (
                <div key={`row4-${idx}`} className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-850 p-2.5 sm:p-3 flex flex-col justify-between hover:scale-105 hover:border-amber-500/20 transition-all duration-300">
                  {item.type === 'text' ? (
                    <>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.bgIcon}`}>
                        {item.icon && <item.icon className="w-4 h-4" />}
                      </div>
                      <div className="text-left mt-2">
                        <p className="text-[10px] font-bold text-white leading-tight truncate">{item.title}</p>
                        <p className="text-[8px] text-zinc-500 font-medium truncate">{item.sub}</p>
                      </div>
                    </>
                  ) : (
                    <img src={item.img} alt="activity" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-85 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 5 Marquee (Scrolling Left) */}
          <div className="flex w-full overflow-hidden">
            <motion.div 
              className="flex gap-4 shrink-0 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: isPaused ? 999999 : speed * 1.1,
                repeat: Infinity
              }}
            >
              {listRow1.map((item, idx) => (
                <div key={`row5-${idx}`} className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative rounded-2xl overflow-hidden bg-stone-900/60 border border-stone-850 p-2.5 sm:p-3 flex flex-col justify-between hover:scale-105 hover:border-amber-500/20 transition-all duration-300">
                  {item.type === 'text' ? (
                    <>
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${item.bgIcon}`}>
                        {item.icon && <item.icon className="w-4 h-4" />}
                      </div>
                      <div className="text-left mt-2">
                        <p className="text-[10px] font-bold text-white leading-tight truncate">{item.title}</p>
                        <p className="text-[8px] text-zinc-500 font-medium truncate">{item.sub}</p>
                      </div>
                    </>
                  ) : (
                    <img src={item.img} alt="activity" className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-85 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* Dynamic Display Columns (Stats Banner + Phone side-by-side) */}
        <div className="relative z-30 w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 mt-4 sm:mt-10">
            {/* Stat Banner Block matching user's uploaded screenshot */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm px-4 select-none">
              
              {/* Real habits, real numbers pill */}
              <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-stone-100 text-stone-900 shadow-lg rounded-full text-[11px] font-bold tracking-tight mb-4 border border-stone-200">
                <span>Real habits, real numbers</span>
              </div>

              {/* How people stay consistent over time */}
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] font-sans">
                How people stay consistent over time
              </h3>

              {/* Giant orange 62,000+ with rotated overlay badging */}
              <div className="relative inline-block my-5 sm:my-7">
                
                {/* Vibrant orange glow behind count */}
                <div className="absolute inset-x-0 bottom-4 top-4 bg-orange-600/30 blur-[45px] rounded-full -z-10 animate-pulse pointer-events-none" />

                <span className="text-7xl sm:text-8xl font-black tracking-tighter text-[#FF5C23] leading-none drop-shadow-[0_4px_16px_rgba(255,92,35,0.3)]">
                  62,000+
                </span>

                {/* Angle rotated overlay pill */}
                <div className="absolute -bottom-1 -right-3 sm:-right-6 bg-stone-100 border border-stone-200 shadow-xl text-stone-900 px-3 py-1 rounded-full text-[10px] font-black tracking-tight rotate-[-4deg] sm:rotate-[-6deg] transition-all duration-300 hover:scale-105 select-none hover:rotate-[0deg]">
                  Check-ins logged last month
                </div>

              </div>

              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-xs mt-1">
                Beautiful gamified accountability, custom routines, and premium telemetry tracking so focus stays high.
              </p>
            </div>

            {/* Interactive Phone mockup */}
            <div className="relative">
              {/* Device shadow backing glow */}
              <div className="absolute inset-6 bg-orange-500/20 blur-[50px] rounded-[40px] -z-10 pointer-events-none" />

              {/* iPhone hardware frame modeling */}
              <div className="w-[245px] sm:w-[260px] h-[480px] sm:h-[510px] rounded-[38px] bg-[#070504] border-[8px] border-stone-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col relative">
                
                {/* Speaker grill notch lines */}
                <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-24 h-3.5 rounded-full bg-black z-35 flex items-center justify-center">
                  <div className="w-16 h-1.5 bg-stone-900 rounded-full" />
                </div>

                {/* Anti-reflective glare texture */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.04] to-white/0 pointer-events-none z-30" />

                {/* Top Status Indicators bar */}
                <div className="h-8 px-5 pt-2.5 flex justify-between items-center text-white text-[9px] font-bold z-30">
                  <span>19:02</span>
                  <div className="flex items-center gap-1.5 opacity-85">
                    <Wifi className="w-2.5 h-2.5" />
                    <Battery className="w-3 h-3 text-emerald-400 stroke-[2.5]" />
                  </div>
                </div>

                {/* Internal frame workspace */}
                <div className="flex-1 px-3 pb-3 overflow-y-auto no-scrollbar flex flex-col justify-between pt-1">
                  
                  {/* Headers segment */}
                  <div className="text-left py-0.5">
                    <h3 className="text-base font-black text-white tracking-tight leading-none font-sans">Weekly Overview</h3>
                    <p className="text-[9px] text-stone-500 font-bold mt-1 tracking-wide">Your progress across the week</p>
                  </div>

                  {/* Chart overlay display */}
                  <div className="bg-stone-900/90 border border-stone-850 p-2.5 rounded-xl relative my-1.5">
                    
                    <div className="flex justify-between items-center mb-1">
                      <div>
                        <h4 className="text-[10px] font-black text-stone-100">{weeklyData[selectedDay].label}</h4>
                        <p className="text-[7.5px] text-stone-500 font-mono">ACTIVE CIRCADIAN FOCUS</p>
                      </div>
                      <div className="px-1.5 py-0.5 rounded-full bg-stone-850 border border-stone-800 text-[7px] text-amber-500 font-bold flex items-center gap-0.5 cursor-pointer">
                        <span>Last week</span>
                        <ChevronRight className="w-2 h-2 rotate-90" />
                      </div>
                    </div>

                    {/* SVG Line/Spline visual render */}
                    <div className="w-full h-20 relative mt-1.5">
                      
                      <div className="absolute top-[25%] inset-x-0 h-[1px] bg-stone-800/40 pointer-events-none" />
                      <div className="absolute top-[50%] inset-x-0 h-[1px] bg-stone-800/40 pointer-events-none" />
                      <div className="absolute top-[75%] inset-x-0 h-[1px] bg-stone-800/40 pointer-events-none" />

                      <svg width="100%" height="100%" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none" className="overflow-visible">
                        <defs>
                          <linearGradient id="chart-glow-phone" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.32" />
                            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        <path d={pathFillString} fill="url(#chart-glow-phone)" className="transition-all duration-305" />
                        <path d={pathString} fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" className="transition-all duration-305" />

                        {points.map((p, index) => (
                          <g key={index} className="cursor-pointer group" onClick={() => setSelectedDay(index)}>
                            <circle 
                              cx={p.x} 
                              cy={p.y} 
                              r={index === selectedDay ? 4.5 : 3} 
                              fill={index === selectedDay ? '#ffffff' : '#332a21'} 
                              stroke={index === selectedDay ? '#f59e0b' : '#a88a68/50'}
                              strokeWidth={index === selectedDay ? 2 : 1}
                              className="transition-all duration-200 hover:scale-125"
                            />
                            {index === selectedDay && (
                              <circle 
                                cx={p.x} 
                                cy={p.y} 
                                r={8} 
                                fill="none" 
                                stroke="#f59e0b" 
                                strokeWidth="1.5" 
                                className="animate-ping opacity-60" 
                              />
                            )}
                          </g>
                        ))}
                      </svg>
                    </div>

                    {/* Day toggle buttons */}
                    <div className="flex justify-between items-center px-2 mt-1 text-[8px] font-black text-stone-500 font-mono">
                      {weeklyData.map((d, index) => (
                        <button 
                          key={index} 
                          onClick={() => setSelectedDay(index)}
                          className={`w-5 py-1 rounded transition-colors text-center cursor-pointer ${index === selectedDay ? 'text-white bg-[#FF5C23]/20 font-bold' : 'hover:text-stone-300'}`}
                        >
                          {d.day}
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Numeric Telemetry display slots */}
                  <div className="grid grid-cols-2 gap-1.5 my-1.5">
                    
                    <div className="bg-stone-900/90 border border-stone-850 rounded-xl p-2 text-left">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Flame className="w-3 h-3 text-amber-500" />
                        <span className="text-xs sm:text-sm font-black text-white leading-none">12</span>
                      </div>
                      <p className="text-[7.5px] text-stone-500 font-bold uppercase tracking-wider leading-tight">Streaks completed</p>
                    </div>

                    <div className="bg-stone-900/90 border border-stone-850 rounded-xl p-2 text-left">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Brain className="w-3 h-3 text-indigo-400" />
                        <span className="text-xs sm:text-sm font-black text-white leading-none">07</span>
                      </div>
                      <p className="text-[7.5px] text-stone-500 font-bold uppercase tracking-wider leading-tight">Focus sessions</p>
                    </div>

                  </div>

                  {/* routine capsules cards */}
                  <div className="flex-1 flex flex-col justify-between pt-0.5">
                    <div className="flex justify-between items-center py-0.5">
                      <h4 className="text-[8.5px] font-black text-stone-400 uppercase tracking-wider font-mono">Routine Stacks</h4>
                      <div className="flex gap-1">
                        <button className="w-3.5 h-3.5 rounded bg-stone-850 border border-stone-800 flex items-center justify-center text-stone-500 hover:text-white transition-colors cursor-pointer">
                          <ChevronLeft className="w-2 h-2" />
                        </button>
                        <button className="w-3.5 h-3.5 rounded bg-[#1c1917] border border-stone-805 flex items-center justify-center text-stone-500 hover:text-white transition-colors cursor-pointer">
                          <ChevronRight className="w-2 h-2" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 mt-0.5">
                      
                      <div className="bg-gradient-to-b from-[#113a26]/40 to-stone-900 border border-[#144f32]/50 rounded-xl p-2 text-left flex flex-col justify-between h-[72px]">
                        <div>
                          <span className="bg-[#125c3a]/50 border border-[#1b8052]/40 text-[#5eead4] px-1 py-0.5 rounded text-[6.5px] font-extrabold uppercase tracking-wide">3 habits</span>
                          <h5 className="text-[9px] font-black text-stone-100 mt-1 truncate">Morning Start</h5>
                        </div>
                        <p className="text-[7px] text-emerald-400/80 font-medium truncate">Water, stretch, plan</p>
                      </div>

                      <div className="bg-gradient-to-b from-[#21163b]/40 to-stone-900 border border-[#302157]/50 rounded-xl p-2 text-left flex flex-col justify-between h-[72px]">
                        <div>
                          <span className="bg-[#3b2d6a]/50 border border-[#503d8d]/40 text-[#c084fc] px-1 py-0.5 rounded text-[6.5px] font-extrabold uppercase tracking-wide">2 habits</span>
                          <h5 className="text-[9px] font-black text-stone-100 mt-1 truncate">Evening Reset</h5>
                        </div>
                        <p className="text-[7px] text-purple-400 font-medium truncate">Review, phone off</p>
                      </div>

                    </div>

                    <div className="pt-1.5">
                      <button className="w-full bg-[#FF5C23] text-white py-1 rounded-full text-[8.5px] font-black uppercase tracking-wider cursor-pointer hover:bg-orange-500 transition-colors flex items-center justify-center gap-1 active:scale-95">
                        <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        <span>Save Stack Complete</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>



      </div>
    </div>
  );
}
