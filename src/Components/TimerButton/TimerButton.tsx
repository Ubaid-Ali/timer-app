import React, { Component } from 'react'
import './TimerButton.css'

interface type {
    buttonAction: any
    buttonValue: string
}

class TimerButton extends Component<any, type> {

    render() {
        let { buttonAction, buttonValue } = this.props
        console.log('buttonAction', buttonAction)
        return (
            <div className="button-container" onClick={() => buttonAction()}>
                <p className="button-value"> {buttonValue} </p>
            </div>
        )
    }
}

export default TimerButton