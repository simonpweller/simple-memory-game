import React, { useState } from "react";
import range from "lodash.range";
import { getShuffledImages } from "./images";
import { Card } from "./Card";

const App = () => {
  const rows: number[] = range(3);
  const cols: number[] = range(4);
  const [images] = useState(getShuffledImages());

  const [cardsFlipped, setCardsFlipped] = useState(images.map(() => false));

  function flip(indexToFlip: number) {
    setCardsFlipped(
      cardsFlipped.map((flipped, index) =>
        index === indexToFlip ? !flipped : flipped
      )
    );
  }

  return (
    <div className="app">
      <div className="board">
        {rows.map((row) => (
          <div className="row" key={row}>
            {cols.map((col) => {
              let index = row * cols.length + col;
              return (
                <Card
                  key={col}
                  image={images[index]}
                  isFlipped={cardsFlipped[index]}
                  flip={() => flip(index)}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
