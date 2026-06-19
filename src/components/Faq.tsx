import { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles, Check } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: ReactNode;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData: FaqItem[] = [
    {
      question: "What happens if I miss a day?",
      answer: (
        <div className="space-y-2">
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            <span className="font-semibold text-white">Nothing is broken.</span> Just continue the next day. Consistency matters more than perfection.
          </p>
        </div>
      )
    },
    {
      question: "Will small habits really change my life?",
      answer: (
        <div className="space-y-2">
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            <span className="font-semibold text-white">Yes.</span> Small habits create big results over time. Even a <span className="text-amber-500 font-bold">1% improvement daily</span> leads to massive transformation in months.
          </p>
        </div>
      )
    },
    {
      question: "Who is this habit tracker for?",
      answer: (
        <div className="space-y-3">
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            This is for everyone who wants to improve and elevate their daily routines:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {[
              "Students striving for structured learning",
              "Working professionals managing energy",
              "Entrepreneurs building compound focus",
              "Fitness beginners forming base discipline",
              "Self-improvement learners exploring routines"
            ].map((target, idx) => (
              <div key={idx} className="flex items-center gap-2 text-stone-400 text-xs">
                <span className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>{target}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative z-30 w-full max-w-7xl mx-auto py-16 sm:py-24 px-4 flex flex-col items-center select-none overflow-hidden">
      
      {/* Decorative localized ambient glowing elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-red-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Section subtitle & title */}
      <div className="text-center mb-16 relative flex flex-col items-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-500/5 text-red-400 border border-red-500/10 rounded-full text-[10px] font-mono tracking-widest uppercase mb-4">
          <HelpCircle className="w-3 h-3 text-red-400" />
          <span>HAVE QUESTIONS?</span>
        </div>
        
        <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-display">
          Frequently Asked Questions
        </h3>
        <p className="text-stone-400 text-xs sm:text-sm mt-3 max-w-md mx-auto leading-relaxed">
          Clear answers to help you start your compound habit journey today.
        </p>
      </div>

      {/* FAQ Accordion List layout */}
      <div className="w-full max-w-3xl space-y-4 px-2">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
                isOpen 
                  ? 'border-amber-500/30 bg-[#0e0c0b]' 
                  : 'border-stone-850/60 bg-[#0a0807] hover:border-stone-800'
              }`}
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xl sm:text-2xl font-bold transition-all duration-300 ${isOpen ? 'text-amber-500 scale-110' : 'text-stone-600'}`}>
                    ❓
                  </span>
                  <span className={`text-sm sm:text-base font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-stone-300'}`}>
                    {item.question}
                  </span>
                </div>

                <div className={`p-2 rounded-xl transition-all duration-300 ${isOpen ? 'bg-amber-500/10 text-amber-500 rotate-180' : 'bg-stone-900/60 text-stone-500'}`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Collapsible Answer container */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-stone-900/50 flex gap-4">
                      <span className="text-xl sm:text-2xl font-bold text-amber-500 shrink-0 select-none">
                        👉
                      </span>
                      <div className="flex-1">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

    </section>
  );
}
