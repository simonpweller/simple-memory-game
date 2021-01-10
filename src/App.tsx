import React from "react";
import { Card } from "./Card";
import useCards from "./useCards";

const App = () => {
  const {
    images,
    cardsFlipped,
    flip,
  }: {
    images: string[];
    cardsFlipped: boolean[];
    flip: (indexToFlip: number) => void;
  } = useCards();

  return (
    <div className="app">
      <div className="board">
        {images.map((image, index) => (
          <Card
            key={index}
            image={images[index]}
            isFlipped={cardsFlipped[index]}
            flip={() => flip(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
