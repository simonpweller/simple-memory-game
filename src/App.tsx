import React, { useState } from "react";
import range from "lodash.range";
import { getShuffledImages } from "./images";
import { Card } from "./Card";

const App = () => {
  const rows: number[] = range(3);
  const cols: number[] = range(4);
  const [images] = useState(getShuffledImages());

  return (
    <div className="app">
      <div className="board">
        {rows.map((row) => (
          <div className="row" key={row}>
            {cols.map((col) => {
              let index = row * cols.length + col;
              return <Card key={col} image={images[index]} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
