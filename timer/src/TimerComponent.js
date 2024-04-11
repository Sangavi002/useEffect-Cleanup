import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  
  useEffect(() => {
    let timer;

    if (isRunning) {
      console.log('started');
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
      console.log('cleanup');
    };
  }, [isRunning]);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scrolled:', window.scrollY);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    console.log('Mounted the timer. ')

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      console.log('UnMounted the timer. ')
    };
  }, []); 

  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  const formatTime = timeInSeconds => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };


  return (
    <div>
      <h2>Timer</h2>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStartStop}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
    
    </div>
  );
};

export default Stopwatch;
