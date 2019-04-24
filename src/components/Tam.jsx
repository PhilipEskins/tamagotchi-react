import React from 'react';
import Counter from './Counter';

class Tam extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      evolutionCounter: 0,
      lifeCounter: 100,
      feedCounter: 100
    };
    this.handleIncreaseFeed = this.handleIncreaseFeed.bind(this);
  }

  decreaseFeed() {
    let newFeedCount = this.state.feedCounter;
    newFeedCount--;
    this.setState({feedCounter: newFeedCount});
    if (newFeedCount === 0) {
      this.stopTimer(this.feedUpdateTimer, newFeedCount);
      this.startLifeCounter();
    }
  }

  handleIncreaseFeed(newFeed) {
    this.setState({feedCounter: newFeed})
  }

  decreaseLife() {
    console.log("feed counter" + this.state.feedCounter);
    let newLifeCount = this.state.lifeCounter;
    newLifeCount--;
    this.setState({lifeCounter: newLifeCount});
    this.stopTimer(this.lifeUpdateTimer, newLifeCount);
    console.log("Life: " + this.state.lifeCounter);
  }

  startLifeCounter () {
    this.lifeUpdateTimer = setInterval(()=>
    this.decreaseLife(), 1000);
  }

  stopTimer(timer, counter) {
    if (counter === 0) {
      clearInterval(timer);
    }
  }

  componentDidMount() {
    this.feedUpdateTimer = setInterval(() => this.decreaseFeed(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.lifeUpdateTimer);
  }

  render() {
    return(
      <div>
        <h1>Hello, I am Tamagotchi!</h1>

        <Counter
          feedDisplay= {this.state.feedCounter}
          onIncreaseFeed = {this.handleIncreaseFeed}

          />
      </div>
    );
  }
}

export default Tam;
