'use client';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const hobbies = [
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '5%',
    top: '0%',
  },
  {
    title: 'Traveling',
    emoji: '✈️',
    left: '55%',
    top: '3%',
  },
  {
    title: 'Cosplay',
    emoji: '🧝‍♀️',
    left: '40%',
    top: '25%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
    left: '13%',
    top: '33%',
  },
  {
    title: 'Crafting',
    emoji: '🔱',
    left: '66%',
    top: '40%',
  },
  {
    title: 'Sewing',
    emoji: '🪡',
    left: '30%',
    top: '57%',
  },
];

export const HobbiesBox = () => {
  const constraintRef = useRef(null);

  return (
    <div className="relative flex-1" ref={constraintRef}>
      {hobbies.map((hobby) => (
        <motion.div
          key={hobby.title}
          className="inline-flex items-center gap-2 xs:px-4 sm:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full xs:py-0.5 sm:py-1 absolute"
          style={{
            left: hobby.left,
            top: hobby.top,
          }}
          drag
          dragConstraints={constraintRef}>
          <span className="xs:text-xs sm:text-[15px] font-semibold sm:tracking-wide text-gray-950/70">{hobby.title}</span>
          <span className="text-lg">{hobby.emoji}</span>
        </motion.div>
      ))}
    </div>
  );
};
