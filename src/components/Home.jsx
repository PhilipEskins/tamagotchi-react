import React from 'react';
import Tam from './Tam';
import egg from '../assets/img/egg.jpg';
import { Link } from 'react-router-dom';

function Home() {
  return(
    <div>
      <h1>Home works!</h1>
      <p>Click on the egg to begin!</p>
      <Link to="tam"><img src={egg}/></Link>
    </div>
  );
}

export default Home;
