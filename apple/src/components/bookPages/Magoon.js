import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { RevolutionInOurTime } from '../../assets/bookCovers';

const Magoon = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="Kekla Magoon"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/revolution-in-our-time-the-black-panther-partys/id1574214141"
        bookTitle="Revolution in Our Time: The Black Panther Party’s Promise to the People"
        editorialNotes="“Black power!” wasn’t just a slogan in 1966. As YA novelist Kekla Magoon explores in this groundbreaking history, it was a revolutionary call to action. In the mid-20th century, Black men and women came together to challenge the centuries of systematic oppression that made up the American status quo, eventually morphing into an organized movement called the Black Panther Party for Self-Defense. Magoon’s rigorously researched book digs into that group’s accomplishments and the unconscionably unjust challenges it faced—which are all too often ignored in history books and pop culture. Magoon does more than give context to the images we’ve seen of beret-clad men with rifles. She details how the bulk of the party’s tireless efforts went into educating, feeding, and building Black communities. We were astounded by everything we learned about the Black Panthers’ true political ideals, and how the U.S. government still somehow justified suppressing them. Although it was written for young adults, <i>Revolution in Our Time</i> is required reading for anyone who wants to learn the true story behind one of America’s most notoriously misunderstood political movements."
        genre="Social Studies,Books,Young Adult,History,Biography"
        imageSrc={RevolutionInOurTime}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Magoon;
