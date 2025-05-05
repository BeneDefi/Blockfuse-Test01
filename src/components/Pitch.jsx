import React from 'react';
import Player from './Player';
import pitchImage from '../assets/pitch.png';

const Pitch = ({ currentTime }) => {
  const players = [
    { id: 1, team: 'home', x: 20, y: 30, name: 'Player 1' },
    { id: 2, team: 'away', x: 70, y: 60, name: 'Player 2' },
  ];

  return (
    <div
      className="relative w-full h-96 bg-green-800 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${pitchImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {players.map((player) => (
        <Player
          key={player.id}
          x={player.x}
          y={player.y}
          team={player.team}
          name={player.name}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
};

export default Pitch;
