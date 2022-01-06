import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import {
  InputGroup, FormGroup, Button, Row, Col
} from 'react-bootstrap';
import {
  Grid, Box, Container, Typography, TextField, FormControlLabel, Checkbox, Link
} from '@mui/material';

const BookReviews = ({
  firstName, lastName, rating, review, reviewDate, reviewTitle
}) => {

  return (
    <>
      <h3>Book Reviews</h3>
      <Container component="main" maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <Typography inline component="h1" variant="h6" align="left" >{reviewTitle}, {rating}</Typography>
          <Typography variant="caption" display="block" align="left" gutterBottom>{reviewDate} by: {firstName} {lastName}</Typography>
          {/* turnary logic here: if edit button is clicked, change typography to textField, if not show typography */}
          <Typography variant="body1" align="left" gutterBottom>{review}</Typography>
        </Box>
      </Container>
    </>
  )
};

BookReviews.defaultProps = {
  firstName: "No",
  lastName: "Name",
  review: "Book Review",
  reviewDate: "12/10/21",
  reviewTitle: "Review Title",
}

BookReviews.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string,
  reviewDate: PropTypes.string,
  reviewTitle: PropTypes.string,
};

export default BookReviews;
