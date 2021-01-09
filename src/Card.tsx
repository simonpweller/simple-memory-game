import React from "react";

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
    <div className="card" onClick={flip}>
      <img
        src={image}
        alt="A cute fox"
        style={
          isFlipped
            ? { width: "100%", height: "100%", objectFit: "cover" }
            : { width: 0, height: 0 }
        }
      />
    </div>
  );
};
