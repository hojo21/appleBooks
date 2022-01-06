import React, {useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { ASnakeFallsToEarth } from '../../assets/bookCovers';

const Badger = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="Darcie Little Badger"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/a-snake-falls-to-earth/id1585049721"
        bookTitle="A Snake Falls to Earth"
        editorialNotes="With rich symbolism and gorgeous imagination, Darcie Little Badger has created a vivid new folktale. Texas teen Nina is trying to understand her family’s odd history—and why it involves such incredibly long lifespans. Meanwhile, in the alternate universe known as the Reflecting World, young Oli, a snake person, is trying to figure out why his toad neighbor suddenly seems to be dying. When the girl and the snake’s paths cross on the eve of a Gulf Coast hurricane, their fast friendship is immediately tested by dangers that go beyond weather. With the lightest touch, Little Badger weaves warnings about ecology, cultural loss, climate change, and extinction of both species and languages into this captivating story. She loads A Snake Falls to Earth with everything that great stories have passed down through oral traditions. That makes this novel, like all folktales, a story that becomes more powerful the more that it’s shared."
        genre="Fantasy,Books,Young Adult,Fiction,Horror, Monsters & Ghosts,Culture, Places & People"
        imageSrc={ASnakeFallsToEarth}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Badger;
