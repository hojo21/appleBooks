import React, { useState } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BookPage } from '../reusable';

import { TheIslandOfMissingTrees } from '../../assets/bookCovers';

const Shafak = () => {
  const [averageRating, setAverageRating] = useState(0.0);
  const [numberRatings, setNumberRatings] = useState(0);
  return (
    <div>
      <BookPage
        author="Elif Shafak"
        avgRating={averageRating}
        bookLink="https://books.apple.com/us/book/the-island-of-missing-trees/id1571283566"
        bookTitle="The Island of Missing Trees"
        editorialNotes="Set in Cyprus and London between 1974 and the late 2010s, Elif Shafak’s tale of star-crossed lovers is so captivating it feels almost magical at times. Of course, it doesn’t hurt that half of the novel is narrated by an exceptionally wise fig tree. <i>The Island of Missing Trees</i> tells the story of teenage sweethearts Kostas and Defne—he a Greek Christian, she a Turkish Muslim—and their ongoing struggles after leaving a divided postcolonial Cyprus. Shafak’s narrative sparkles with undercurrents of beauty and joy even as it explores themes of family, grief, and trauma. We especially adored the comic relief of Aunt Meryem, with her Marilyn Monroe–themed suitcases and her staunch unwillingness to mind her own business. This book is a profound celebration of love and the many ways that it endures across distance and time."
        genre="Fiction & Literature,Books"
        imageSrc={TheIslandOfMissingTrees}
        ratings={numberRatings}
      />
    </div>
  );
};

export default Shafak;
