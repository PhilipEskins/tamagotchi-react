import React from 'react';
import Counter from './Counter';

class Tam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      evolutionCounter: 0,
      lifeCounter: 100,
      feedCounter: 10,
      sleepCounter: 4
    };
    this.handleIncreaseFeed = this.handleIncreaseFeed.bind(this);

    this.handleIncreaseSleep = this.handleIncreaseSleep.bind(this);
  }

  decreaseFeed() {
    if (this.state.feedCounter != 0) {
      let newFeedCount = this.state.feedCounter;
      newFeedCount--;
      this.setState({feedCounter: newFeedCount});
    }
     else if (this.state.feedCounter === 0) {
       this.setState({feedCounter: 0});
      // this.startLifeCounter();
    }
  }

  handleIncreaseFeed(newFeed) {
    this.setState({feedCounter: newFeed});
  }

  decreaseSleep() {
    if (this.state.sleepCounter != 0) {
      let newSleepCount = this.state.sleepCounter;
      newSleepCount--;
      this.setState({sleepCounter: newSleepCount});
    } else if (this.state.sleepCounter === 0) {
      this.setState({sleepCounter: 0});
    }
  }

  handleIncreaseSleep(newSleep) {
    this.setState({sleepCounter: newSleep})
  }

  decreaseLife() {
    if (this.state.lifeCounter > 0) {
      let newLifeCount = this.state.lifeCounter;
      newLifeCount--;
      this.setState({lifeCounter: newLifeCount});
      console.log("Life: " + this.state.lifeCounter);
    } else {
      this.stopTimer(this.lifeUpdateTimer);
    }
  }



  startLifeCounter() {
    if (this.state.feedCounter === 0) {
      this.decreaseSleep();
      this.decreaseLife();
    } else if (this.state.sleepCounter === 0) {
      this.decreaseFeed();
      this.decreaseLife();
    } else {
      this.decreaseFeed();
      this.decreaseSleep();
      console.log("nothing");
    }
  }

  stopTimer(timer) {
    console.log("stop");
    clearInterval(timer);
  }

  componentDidMount() {
    this.lifeCheckTimer = setInterval(() => this.startLifeCounter(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.lifeUpdateTimer);
    clearInterval(this.feedUpdateTimer);
    clearInterval(this.sleepUpdateTimer);
  }

  render() {
    return(
      <div>
        <h1>Hello, I am Tamagotchi!</h1>

        <Counter
          feedDisplay= {this.state.feedCounter}
          onIncreaseFeed = {this.handleIncreaseFeed}
          sleepDisplay= {this.state.sleepCounter}
          onIncreaseSleep = {this.handleIncreaseSleep}
          />
      </div>
    );
  }
}

export default Tam;
