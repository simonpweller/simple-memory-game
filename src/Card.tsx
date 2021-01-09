import React from "react";

export const Card = ({ image }: { image: string }) => (
  <div
    className="card"
    style={{
      background: `url(${image})`,
      backgroundSize: "cover",
    }}
  />
);
