import { tns } from "tiny-slider";

export var slider = tns({
  container: "#slider",
  items: 1,
  slideBy: "page",
  autoplay: true,
  autoplayButtonOutput: false,
  controls: true,
  controlsPosition: "bottom",
  nav: false,
  controlsText: ["<", ">"],
  mouseDrag: true,
});
