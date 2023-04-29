import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      btnDisabled: false,
      interval: "",
      intervalStorage: [],
    };
  }

  startClicked = () => {
    this.setState({
      btnDisabled: true,
    });
    let timer = setInterval(() => {
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
    this.setState({
      interval: timer,
    });
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisabled: false,
    });
  };

  intervalClicked = () => {
    const { intervalStorage, hour, minute, second } = this.state;
    if ((hour, minute, second)) {
      intervalStorage.push(`${hour}:${minute}:${second}`);
      this.setState({
        intervalStorage,
      });
    }
  };

  render() {
    const { hour, minute, second, btnDisabled, intervalStorage } = this.state;

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
            <button className="btn btn-danger" onClick={this.stopClicked}>
              Stop
            </button>
          </div>
          <div className="timer-btn">
            <button
              disabled={!btnDisabled}
              className="btn btn-secondary"
              onClick={this.intervalClicked}
            >
              Interval
            </button>
          </div>
          <div className="timer-btn">
            <button className="btn btn-warning">Clear</button>
          </div>
        </div>

        <div className="timer-container-interval text-center">
          {intervalStorage.map((item, index) => {
            return (
              <p key={index} className="m-2">
                {index + 1}: {item}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
