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
}) => (
  <div
    className="card"
    style={{
      background: `url(${isFlipped ? image : cover})`,
      backgroundSize: "cover",
    }}
    onClick={flip}
  />
);
