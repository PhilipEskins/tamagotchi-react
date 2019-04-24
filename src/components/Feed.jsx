import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {

  function increaseFeed() {
    let newFeed = props.feedDisplay;
    newFeed+=10;
    props.onIncreaseFeed(newFeed);
  }

  return(
    <div>
        <p>Hunger level: {props.feedDisplay}</p>
      <button onClick={increaseFeed}>Feed Tamagotchi</button>
    </div>
  );
}

Feed.propTypes = {
  feedDisplay: PropTypes.number,
  onIncreaseFeed: PropTypes.func
};

export default Feed;
