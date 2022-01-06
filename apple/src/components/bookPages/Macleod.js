import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { Tenderness } from '../../assets/bookCovers';

const Macleod = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="Alison Macleod"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/tenderness/id1566547772"
        bookTitle="Tenderness"
        editorialNotes="In this moving historical novel, wonderful things happen when art stands up to censorship. British Canadian author Alison MacLeod explores the inspiring story behind author D. H. Lawrence’s brave and controversial novel <i>Lady Chatterley’s Lover</i>. In 1928, Lawrence published the novel privately, knowing that its honest depiction of sexuality would prompt swift censorship. But it wasn’t until 1960—three decades after the author’s death—that the full text was finally made available to the public, prompting a British trial that ended in a groundbreaking win for the publisher. MacLeod deftly weaves factual accounts together with fictionalized characters and events, bringing to life the struggles around sensuality, class, and freedom of speech that marked both of these turbulent historical periods. <i>Tenderness</i> is a story about love—and the fight to celebrate it."
        genre="Literary,Books,Fiction & Literature,Historical"
        imageSrc={Tenderness}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Macleod;
