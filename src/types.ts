export type HabitTimeOfDay = 'morning' | 'afternoon' | 'evening' | 'allday';

export interface Habit {
  id: string;
  name: string;
  category: string;
  timeOfDay: HabitTimeOfDay;
  completed: boolean;
  history: string[]; // dates of completed days, e.g. '2026-06-17'
  streak: number;
  totalTargetDays: number;
  completedCount: number;
  iconName: string; // lucide icon identifier
  color: string; // tailwind color class e.g., 'amber' | 'emerald' | 'orange' | 'cyan'
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  iconName: string;
  glowColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  habit: string;
  streak: string;
}
