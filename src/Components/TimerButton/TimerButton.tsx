import React from 'react'
import './TimerButton.css'

const TimerButton = ({ buttonAction, buttonValue }) => {
    return (
        <div className="button-container" onClick={() => buttonAction()}>
            <p className="button-value"> {buttonValue} </p>
        </div>
    )
}


export default TimerButton;