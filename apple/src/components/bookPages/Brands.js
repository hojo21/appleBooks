import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { OurFirstCivilWar } from '../../assets/bookCovers';

const Brands = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="H. W. Brands"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/our-first-civil-war/id1553001690"
        bookTitle="Our First Civil War"
        editorialNotes="Experience the American Revolution as the riveting, dangerous thrill ride that it was. In his compulsively readable book, historian H. W. Brands focuses on the stories of George Washington and Benjamin Franklin as they each become central figures in the complex fight between the Patriots and the Loyalists. With visceral detail and meticulous research, Brands offers an in-depth examination of this pivotal, volatile period in American history and all its intense battles. We loved following the intimate stories of the young, inexperienced Washington and the fascinatingly eccentric Franklin. Brands lets us see these legendary heroes as real people while keeping us in awe of their extraordinary accomplishments. Exhilarating and reflective, Our First Civil War makes American history read like a page-turning thriller."
        genre="United States,Books,History,Biographies & Memoirs"
        imageSrc={OurFirstCivilWar}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Brands;
