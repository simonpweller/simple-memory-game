import range from "lodash.range";
import { useState } from "react";
import { getShuffledImages } from "./images";

const useCards = () => {
  const [images] = useState(getShuffledImages());
  const grid: number[][] = range(3).map((rowIndex) => {
    return range(4).map((colIndex) => {
      return rowIndex * 4 + colIndex;
    });
  });

  const [cardsFlipped, setCardsFlipped] = useState(images.map(() => false));

  const flip = (indexToFlip: number) => {
    const nextCards = [...cardsFlipped];
    nextCards[indexToFlip] = !nextCards[indexToFlip];
    setCardsFlipped(nextCards);
  };

  return { images, grid, cardsFlipped, flip };
};

export default useCards;
