import { tns } from "tiny-slider";
import leftArrowImage from "../resources/left-arrow.png";
import rightArrowImage from "../resources/right-arrow.png";

const leftArrow = `
  <div>
    <img src="${leftArrowImage}"/>
  </div>
`;

const rightArrow = `
  <div>
    <img src="${rightArrowImage}"/>
  </div>
`;

export var slider = tns({
  container: "#slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  controlsPosition: "bottom",
  nav: false,
  controlsText: [leftArrow, rightArrow],
  mouseDrag: true,
});
