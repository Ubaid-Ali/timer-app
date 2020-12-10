import React from 'react'
import './TimerButton.css'

const TimerButton = ({ buttonAction, buttonValue, className }) => {
    return (
        <div className={`button-container ${className}`} onClick={() => buttonAction()}>
            <p className="button-value"> {buttonValue} </p>
        </div>
    )
}

export default TimerButton;