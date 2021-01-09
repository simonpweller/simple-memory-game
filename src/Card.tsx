import React from "react";
import cover from "./images/cover.jpg";

export const Card = ({
  image,
  isFlipped,
  flip,
}: {
  image: string;
  isFlipped: boolean;
  flip: () => void;
}) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${isFlipped ? image : cover})`,
      }}
      onClick={flip}
    />
  );
};
