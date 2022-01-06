import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { HowTheOtherHalfEats } from '../../assets/bookCovers';

const Singh = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="Priya Fielding-Singh"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/how-the-other-half-eats/id1552672105"
        bookTitle="How the Other Half Eats"
        editorialNotes="In writing this fascinating and informative book, ethnographer Priya Fielding-Singh interviewed nearly 200 parents (mostly moms) about their families’ diets. Her findings were almost shockingly consistent. Overwhelmingly, mothers feel drained and alone in their worries about their children’s nutrition, experiencing near-constant stress about how to provide good food that’s healthy and tasty. Fielding-Singh follows four particular families across racial and class boundaries, and learns that whether the issue is getting overscheduled children to the dinner table or simply having enough food to eat, it’s clear that all families and children could use more empathy and support. If you’ve ever found yourself worrying about how to feed your kids a nutritious meal they’ll actually enjoy, <i>How the Other Half Eats</i> will leave you feeling heard."
        genre="Social Science,Books,Nonfiction,Health, Mind & Body,Diet & Nutrition"
        imageSrc={HowTheOtherHalfEats}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Singh;
