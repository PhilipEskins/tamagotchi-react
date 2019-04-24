import React from 'react';

import PropTypes from 'prop-types';

function Sleep(props) {

  function increaseSleep() {
    let newSleep = props.sleepDisplay;
    newSleep+=10;
    props.onIncreaseSleep(newSleep);
  }

  return(
    <div>
        <p>Alertness level: {props.sleepDisplay}</p>
      <button onClick={increaseSleep}>Naptime!</button>
    </div>
  );
}

Sleep.propTypes = {
  sleepDisplay: PropTypes.number,
  onIncreaseSleep: PropTypes.func
};

export default Sleep;
