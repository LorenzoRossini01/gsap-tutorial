import "./style.css";

import { gsap } from "gsap";
// const red = document.querySelector<HTMLElement>(".red");
// const blue = document.querySelector<HTMLElement>(".blue");
// const orange = document.querySelector<HTMLElement>(".orange");
// const squares = document.querySelectorAll<HTMLElement>(".square");

// gsap.to(squares, {
//   x: 500,
//   y: 200,
//   scale: 0.5,
//   rotate: 180,
//   duration: 1,
//   delay: 3.5,
// });
// gsap.from(squares, {
//   x: -500,
//   y: -200,
//   scale: 20,
//   rotate: 360,
//   backgroundColor: "yellow",
//   duration: 1,
//   delay: 2.5,
// });

// gsap.fromTo(
//   squares,
//   {
//     autoAlpha: 0,
//     x: 300,
//     scale: 20,
//     rotate: 180,
//   },
//   {
//     autoAlpha: 1,
//     rotate: 0,
//     x: 0,
//     y: 200,
//     scale: 0.5,
//     backgroundColor: "green",
//     delay: 0.5,
//     duration: 1,
//     ease: "elastic",
//   }
// );

// red?.addEventListener("mouseenter", () => {
//   gsap.fromTo(
//     red,
//     {
//       scale: 1.2,
//       duration: 1,
//     },
//     {
//       scale: 1,
//       duration: 1,
//     }
//   );
// });
// blue?.addEventListener("mouseenter", () => {
//   gsap.fromTo(
//     blue,
//     {
//       backgroundColor: "#ae7fff",
//     },
//     {
//       backgroundColor: "blue",
//       duration: 1,
//     }
//   );
// });
// orange?.addEventListener("mouseenter", () => {
//   gsap.to(orange, {
//     rotate: 360,
//     borderRadius: "50%",
//     duration: 1,
//   });
// });
// orange?.addEventListener("mouseleave", () => {
//   gsap.to(orange, {
//     rotate: -180,
//     borderRadius: "0",
//     duration: 1,
//   });
// });

// ### EASE

// document.querySelector("button")?.addEventListener("click", () => {
//   gsap.to(".square", {
//     x: 500,
//     duration: 3,
//     ease: "elastic.out",
//   });
//   gsap.to(".rect", {
//     x: 500,
//     duration: 3,
//     ease: "sine.inOut",
//   });
//   gsap.to(".circle", {
//     x: 500,
//     duration: 3,
//     ease: "expo",
//   });
// });

const dataNumberSquare = gsap.getProperty(".square", "data-number");
const widthSquare = gsap.getProperty(".square", "width");

console.log(dataNumberSquare, widthSquare);
