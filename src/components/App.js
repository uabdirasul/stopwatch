import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      btnDisabled: false,
    };
  }

  startClicked = () => {
    this.setState({
      btnDisabled: true,
    });
    setInterval(() => {
      const { hour, minute, second } = this.state;

      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 1000);
  };

  render() {
    const { hour, minute, second, btnDisabled } = this.state;

    return (
      <div>
        <div className="timer-container">
          <h1 className="mb-4">
            <span>Online</span> Stopwatch
          </h1>

          <div className="timer-col">
            <p className="timer-hours">{hour}</p>
            <p className="timer-label">Hours</p>
          </div>

          <div className="timer-col">
            <p className="timer-minutes">{minute}</p>
            <p className="timer-label">Minutes</p>
          </div>

          <div className="timer-col">
            <p className="timer-seconds">{second}</p>
            <p className="timer-label">Seconds</p>
          </div>
        </div>

        <div className="timer-container text-center">
          <div className="timer-btn">
            <button
              disabled={btnDisabled}
              className="btn btn-success"
              onClick={this.startClicked}
            >
              Start
            </button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-danger">Stop</button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-secondary">Interval</button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-warning">Clear</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
