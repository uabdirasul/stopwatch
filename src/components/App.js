import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <div className="timer-container">
          <h1 className="mb-4">
            <span>Online</span> Stopwatch
          </h1>

          <div className="timer-col">
            <p className="timer-hours">0</p>
            <p className="timer-label">Hours</p>
          </div>

          <div className="timer-col">
            <p className="timer-minutes">0</p>
            <p className="timer-label">Minutes</p>
          </div>

          <div className="timer-col">
            <p className="timer-seconds">0</p>
            <p className="timer-label">Second</p>
          </div>
        </div>

        <div className="timer-container text-center">
          <div className="timer-btn">
            <button className="btn btn-success">Start</button>
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
