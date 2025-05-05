import React from 'react';

const Timeline = ({ currentTime, setCurrentTime, maxTime }) => {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Match Countdown</h2>
      <input
        type="range"
        min="0"
        max={maxTime}
        value={currentTime}
        onChange={(e) => setCurrentTime(Number(e.target.value))}
        className="w-full"
        style={{ direction: 'rtl' }}
      />
      <div className="text-sm">Time Remaining: {formatTime(currentTime)}</div>
    </div>
  );
};

export default Timeline;
