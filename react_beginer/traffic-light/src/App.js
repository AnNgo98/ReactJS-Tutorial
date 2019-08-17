import React from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/traffic-light'
const RED = 0;
const ORANGE =1;
const GREEN =2;
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentCorlor: GREEN
    };
    setInterval(() => {
      console.log(this.state.currentCorlor);
      this.setState({
        currentCorlor: this.getNextColor(this.state.currentCorlor)
      });
    }, 2000);
  }
  getNextColor(color) {
    switch (color) {
      case RED:
        return ORANGE;
      case ORANGE:
        return GREEN;
      default:
        return RED;
    }
  } 
  render() {
    const {currentCorlor} = this.state;
    return (
      <div className="App">
        <TrafficLight currentCorlor={currentCorlor}></TrafficLight>
      </div>
    );
  }
}

export default App;
