import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    initialTimeInMinutes: 0,
    initialTimeInSeconds: 0,
  }

  tick = () => {
    const {initialTimeInSeconds} = this.state
    this.setState(prevState => ({
      initialTimeInSeconds: prevState.initialTimeInSeconds + 1,
    }))
    if (initialTimeInSeconds === 59) {
      this.setState(prevState => ({
        initialTimeInMinutes: prevState.initialTimeInMinutes + 1,
        initialTimeInSeconds: 0,
      }))
    }
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onStopTimer = () => {
    clearInterval(this.timerId)
  }

  onResetTimer = () => {
    clearInterval(this.timerId)
    this.setState({initialTimeInMinutes: 0, initialTimeInSeconds: 0})
  }

  render() {
    const {initialTimeInMinutes, initialTimeInSeconds} = this.state

    const timeInMinutes =
      initialTimeInMinutes > 9
        ? initialTimeInMinutes
        : `0${initialTimeInMinutes}`
    const timeInSeconds =
      initialTimeInSeconds > 9
        ? initialTimeInSeconds
        : `0${initialTimeInSeconds}`

    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="title">Stopwatch</h1>
          <div className="stop-watch-container">
            <div className="watch-and-timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="icon"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="time">
              {timeInMinutes}:{timeInSeconds}
            </h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-btn"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="Stop-btn"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                className="reset-btn"
                type="button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
