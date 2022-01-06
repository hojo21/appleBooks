import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Carousel
} from 'react-bootstrap';
import {
  HowTheOtherHalfEats, RevolutionInOurTime, TheIslandOfMissingTrees
} from '../../assets/bookCovers';

const BookCoverCarousel = () => {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item className="line-height:inherit">
          <img
            src={HowTheOtherHalfEats}
            alt="First slide"
          />
          <h3>How the Other Half Eats</h3>
          <br />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={RevolutionInOurTime}
            alt="Second slide"
          />
          <h3>Revolution In Our Time</h3>
          <br />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={TheIslandOfMissingTrees}
            alt="Third slide"
          />
          <h3>The Island of Missing Trees</h3>
          <br />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default BookCoverCarousel;
