import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { LoveInTheBigCity } from '../../assets/bookCovers';

const Hur = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="Sang Young Park & Anton Hur"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/love-in-the-big-city/id1558192250"
        bookTitle="Our First Civil War"
        editorialNotes="You can feel the urgency bouncing off the pages of Sang Young Park’s electrifying debut, one of the first gay novels ever published in South Korea. <i>Love in the Big City</i>’s massive popularity in that country—it sold out nine printings—speaks to a seismic shift in attitudes towards queer experiences. There’s also the universal appeal of the novel’s twentysomething narrator, Young, and his search for love and meaning in a vast urban playground. Told in four parts, this exuberant and poignant story takes us along for the ride as Young navigates affairs, friendships, and his fraught relationship with his mother. This is a frenetic, can’t-miss chronicle of young adulthood in all its uncertainty and joy."
        genre="Literary,Books,Fiction & Literature,Nonfiction,Social Science,Society,Gay"
        imageSrc={LoveInTheBigCity}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Hur;
