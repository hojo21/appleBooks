import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import {
  Image, Container, Row, Button
} from 'react-bootstrap';

import { BookReviews, CreateReview } from '.';

// need a for loop that iterates through passed in data. 

const populateTable = () => {

};

const BookPage = ({
  author, avgRating, bookLink, bookTitle, editorialNotes, genre, imageSrc, ratings
}) => {
  const [isCreateReviewDisplayed, setIsCreateReviewDisplayed] = useState(false);
  

  return (
    <div>
      <Image src={imageSrc}/>
      <h1>{bookTitle}</h1>
      <p>Written by: {author} Average Rating: {avgRating} ({ratings})</p>
      <p>{genre}</p><br /><br />
      <h4>Editorial Notes</h4>
      <p align="left">{editorialNotes}</p>
      <BookReviews
        rating={2.5}
      />
      {isCreateReviewDisplayed
        ? ( <CreateReview /> )
        : <br />
      }
      <Button variant="secondary" onClick={() => setIsCreateReviewDisplayed(!isCreateReviewDisplayed)}>Add a Review</Button>
    </div>
  )
};

BookPage.propTypes = {
  author: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  bookLink: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  editorialNotes: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  ratings: PropTypes.number.isRequired,
};

export default BookPage;
