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
  const [firstIndex, setFirstIndex] = useState<number | null>(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const flip = (indexToFlip: number) => {
    if (isDisabled || cardsFlipped[indexToFlip]) return;

    const nextCards = [...cardsFlipped];
    nextCards[indexToFlip] = !nextCards[indexToFlip];
    setCardsFlipped(nextCards);

    if (firstIndex !== null && images[indexToFlip] !== images[firstIndex]) {
      flipBack(firstIndex, indexToFlip);
    }

    setFirstIndex(firstIndex === null ? indexToFlip : null);
  };

  const flipBack = (firstIndex: number, secondIndex: number) => {
    setIsDisabled(true);
    setTimeout(() => {
      const nextCards = [...cardsFlipped];
      nextCards[firstIndex] = false;
      nextCards[secondIndex] = false;
      setCardsFlipped(nextCards);
      setIsDisabled(false);
    }, 750);
  };

  return { images, grid, cardsFlipped, flip };
};

export default useCards;
