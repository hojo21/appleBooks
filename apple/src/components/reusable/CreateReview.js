import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types';
import {
  Pagination, InputGroup, FormGroup, Button, Row, Col
} from 'react-bootstrap';
import {
  Grid, Box, Container, Typography, TextField, FormControlLabel, Checkbox, Link
} from '@mui/material';

const CreateReview = ({

}) => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <h3>Book Title</h3>
      <Container component="main" maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="reviewTitle"
                  label="Review Title"
                  name="reviewTitle"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="rating"
                  label="Rating"
                  name="rating"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="review"
                  label="Review"
                  name="review"
                  autoComplete="family-name"
                />
              </Grid>
            </Grid>
            <br />
            <Button
                // onClick={() => }
            >Submit Review</Button>
          </Box>
        </Box>
      </Container>
      <br />
    </>
  )
};

CreateReview.propTypes = {

};

export default CreateReview;
