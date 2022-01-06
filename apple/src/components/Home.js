import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

import BookCoverCarousel from '../components/carousel';

const Home = () => {
  return (
    <div>
      <BookCoverCarousel />
      <br />
      <h4>Apple Books Store by Jordan Ho</h4>
    </div>
  )
};

Home.propTypes = {
  
};

export default Home;
