import React, { useState, useEffect } from 'react';
import Pitch from './components/Pitch';
import Timeline from './components/Timeline';
import EventFeed from './components/EventFeed';

function App() {
  const [currentTime, setCurrentTime] = useState(2000);
  const maxTime = 2000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); 
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      <div className="flex-1 p-4">
        <Pitch currentTime={currentTime} />
      </div>
      <div className="w-full lg:w-80 bg-white p-4 shadow-lg">
        <Timeline currentTime={currentTime} setCurrentTime={setCurrentTime} maxTime={maxTime} />
        <EventFeed events={[
          { time: 4500, type: 'Goal', player: 'Player 1' }, 
          { time: 3600, type: 'Foul', player: 'Player 2' },
        ]} />
      </div>
    </div>
  );
}

export default App;