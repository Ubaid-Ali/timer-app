import React from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton'



const Timer = () => {

  function startTimer() {
    console.log('Starting timer.');
  }

  function stopTimer() {
    console.log('Stopping timer.');
  }

  function resetTimer() {
    console.log('Resetting timer.');
  }

  return (
    <div className="timer-container">
      <div className="timer-display">

      </div>
      <div className="button-container">
        <TimerButton buttonAction={startTimer} buttonValue={"start"} />
        <TimerButton buttonAction={stopTimer} buttonValue={"stop"} />
        <TimerButton buttonAction={resetTimer} buttonValue={"reset"} />
      </div>
    </div>
  )
}

export default Timer;