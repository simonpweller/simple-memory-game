import shuffle from "lodash.shuffle";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";

export const getShuffledImages = (): string[] => {
  const images = [image1, image2, image3, image4, image5, image6];
  return shuffle([...images, ...images]);
};
