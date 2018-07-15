import React, { Component } from 'react'

class Countdown extends Component {
    constructor(props) {
        super(props);
        this.countdown = props.start;
    }

    componentDidMount() {
        this.startTimer();
    }

    startTimer() {
        var self = this;
        this.intervalTimer = setInterval(function () {
            self.countdown = self.countdown - 1;
            self.setState({ key: Math.random() })
        }, 1000);
    }

    render() {
        return (
            <div>
                Countdown: {this.countdown}
            </div>
        )
    }
}

export default Countdown