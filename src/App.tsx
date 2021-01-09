import React from "react";
import { Card } from "./Card";
import useCards from "./useCards";

const App = () => {
  const {
    images,
    grid,
    cardsFlipped,
    flip,
  }: {
    images: string[];
    cardsFlipped: boolean[];
    grid: number[][];
    flip: (indexToFlip: number) => void;
  } = useCards();

  return (
    <div className="app">
      <div className="board">
        {grid.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((index) => {
              return (
                <Card
                  key={index}
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
