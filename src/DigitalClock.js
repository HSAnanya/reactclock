import React, { useState, useEffect } from 'react';

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(timer); 
  }, []);

  const formatTime = (value) => value.toString().padStart(2, '0');

  return (
    <div id="time" style={{ fontSize: '3rem', fontFamily: 'monospace', textAlign: 'center' }}>
      {formatTime(time.getHours())} :
      {formatTime(time.getMinutes())} :
      {formatTime(time.getSeconds())}
    </div>
  );
}

export default DigitalClock;
