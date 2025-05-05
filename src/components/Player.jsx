import React from 'react';
import { motion } from 'framer-motion';

const Player = ({ x, y, team, name, currentTime }) => {
  const adjustedX = x + (currentTime % 10) * 2;
  const adjustedY = y + (currentTime % 10) * 1;

  return (
    <motion.div
      className={`absolute w-6 h-6 rounded-full flex items-center justify-center text-xs text-white ${
        team === 'home' ? 'bg-blue-500' : 'bg-red-500'
      }`}
      style={{
        position: 'absolute',
      }}
      animate={{
        left: `${adjustedX}%`,
        top: `${adjustedY}%`,
      }}
      transition={{ duration: 0.5 }}
      title={name}
    >
      {name[0]}
    </motion.div>
  );
};

export default Player;
