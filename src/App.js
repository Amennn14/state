import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    show: false,
    timepassed: 0
  };

  timer() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timepassed: prevState.timepassed+ 1
      }));
    }, 1000);
  }
  

  timestopped() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { show, timepassed } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {show ? "Hide" : "Show"}
        </button>
        
        {show && (
          <div>
            <h2>Full name</h2>
            <p>Bio.</p>
            <p>profession:</p>
            <img src='https://cdn-icons-png.flaticon.com/512/4123/4123763.png'alt='unkown pic'></img>
          </div>
        )}
        
        <h3>Time since button clicked: {timepassed} seconds</h3>

        
      </div>
    );
  }
}

export default App;
