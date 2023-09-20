import {Component} from 'react'

class DigitalTimer extends Component {
  state = {minutes: 25, second: 0, count: 25, pause: true}

  componentDidMount() {
    this.controlTimer()
  }

  increaseCount = () => {
    this.setState(prev => {
      const {count, minutes} = prev
      return {
        count: count + 1,
        minutes: minutes + 1,
      }
    })
  }

  decreaseCount = () => {
    this.setState(prev => {
      const {count, minutes} = prev
      return {
        count: count - 1,
        minutes: minutes - 1,
      }
    })
  }

  controlTimer = () => {
    const {pause, count, second, minutes} = this.state

    if (pause) {
      this.timerId = setInterval(() => {
        if (second <= 0) {
          this.setState({
            second: 59,
            minutes: minutes - 1,
          })
        } else {
          this.setState({
            second: second - 1,
          })
        }
      }, 1000)
    } else {
      clearInterval(this.timerId)
    }
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    const {count} = this.state
    this.setState({
      second: 0,
      minutes: count,
    })
  }

  changeTimer = () => {
    const {pause} = this.state
    this.setState({pause: !pause})
  }

  render() {
    const {minutes, second, count, pause} = this.state

    return (
      <div>
        <div>
          <h1>Digital TImer</h1>
        </div>
        <div>
          <div>
            <p>
              {minutes},{second}
            </p>
            <p>{pause ? 'Paused' : 'Running'}</p>
          </div>
          <div>
            <div>
              <button onClick={this.changeTimer}>
                {pause ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                  />
                )}
                <p>{pause ? 'Start' : 'Pause'}</p>
              </button>
            </div>
            <div>
              <button onClick={this.resetTimer}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
              </button>
              <p>Reset</p>
            </div>
            <div>
              <p>Set timer limit</p>
              <div>
                <button onClick={this.decreaseCount}>-</button>
                <p>{count}</p>
                <button onClick={this.increaseCount}>+</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
