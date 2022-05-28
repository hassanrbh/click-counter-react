import React from 'react';
import Counts from './counts';

class ClickCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
          count: 0,
          previousClicks: [],
    };

    this.click = this.handleClick.bind(this);
    this.reset = this.resetClickCounter.bind(this);
    this.reduce = this.reduceClickCounter.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState(
      {
        count: this.state.count + 1,
      }
    );
  }

  resetClickCounter(event) {
    event.preventDefault();
    const previous = this.state.previousClicks;
    previous.push(this.state.count);
    this.setState({ count: 0 , previous})
    console.log(this.state.previousClicks)
  }

  reduceClickCounter(event) {
    event.preventDefault();
    this.setState({ count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.click}>CLICK ME!!</button>
        <br />
        <button onClick={this.reset}>RESET ME!!</button>
        <br />
        <button onClick={this.reduce}>REDUCE ME!!</button> 
        <br />
        <h1>
          <span>{this.state.count}</span>
        </h1>
        <Counts previousClicks={this.state.previousClicks}/>
      </div>
    );
  }
}

export default ClickCounter;