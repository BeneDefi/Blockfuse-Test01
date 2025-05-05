import React from 'react';
import { motion } from 'framer-motion';

const EventFeed = ({ events }) => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Live Events</h2>
      <div className="space-y-2">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="p-2 bg-gray-100 rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-bold">{event.time}'</span> - {event.type} by {event.player}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EventFeed;