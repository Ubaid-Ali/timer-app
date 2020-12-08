import React from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton'



const Timer = () => {

  const startTimer = () => {
    console.log('Starting timer.');
  }

  const stopTimer = () => {
    console.log('Stopping timer.');
  }

  const resetTimer = () => {
    console.log('Resetting timer.');
  }

  return (
    <div className="timer-container">
      <div className="time-display"></div>
      <div className="timer-button-container">
        <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
      </div>
    </div>
  );
}

export default Timer;