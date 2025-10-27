import "./style.css";

import { gsap } from "gsap";

const buttonStart = document.querySelector(".start");
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

// buttonStart?.addEventListener("click", () => {
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

// const dataNumberSquare = gsap.getProperty(".square", "data-number");
// const widthSquare = gsap.getProperty(".square", "width");

// console.log(dataNumberSquare, widthSquare);

// ### STAGGER

// gsap.set("header li", {
//   autoAlpha: 0,
//   y: -200,
// });

// buttonStart?.addEventListener("click", () => {
//   gsap.to("header li", {
//     autoAlpha: 1,
//     y: 0,
//     stagger: {
//       // each:0.1,
//       amount: 4,
//     },
//     duration: 2,
//     ease: "elastic",
//   });
// });

// ### REPEAT & YOYO
// buttonStart?.addEventListener("click", () => {
//   gsap.to(".circle", {
//     // y: 100,
//     autoAlpha: 0,
//     stagger: {
//       repeat: -1,
//       yoyo: true,
//       // each: 0.1,
//       amount: 1,
//       from: "random",
//       grid: "auto",
//       axis: "x",
//       // ease: "bounce.in",
//     },
//     duration: 0.5,
//     // ease: "power3.out",
//   });
// });

// buttonStart?.addEventListener("click", () => {
//   gsap.to(".square", {
//     // rotate: "random(0,180)",
//     x: "+=50",
//     duration: 1,
//     ease: "power2.inOut",
//     // repeat: 3,
//     // repeatDelay: 0.5,
//     // yoyo: true,
//     repeat: -1,
//     // repeatDelay: 0.5,
//     repeatRefresh: true,
//   });
// });

// ### CALLBACK FUNCTIONS

// buttonStart?.addEventListener("click", () => {
//   const tween = gsap.to(".square", {
//     duration: 1,
//     ease: "sine.in",
//     x: 200,
//     borderRadius: 10,
//     backgroundColor: "#ff9922",
//     repeat: -1,
//     onRepeat: () => {
//       console.log("repeat");
//     },
//     // onStart: () => {
//     //   console.log("started");
//     // },
//     // onComplete: () => {
//     //   console.log("completed");
//     // },
//     // onInterrupt: () => {
//     //   console.log("interrupted");
//     // },
//     // onUpdate: () => {
//     //   console.log("Updated");
//     // },
//   });

//   // setTimeout(() => {
//   //   tween.kill();
//   // }, 2000);
// });

// ### GET TWEEN METHODS
// const tween = gsap.to(".square", {
//   id: "square-tween",
//   duration: 5,
//   ease: "sine.out",
//   x: 500,
//   y: 200,
//   backgroundColor: "#ff9922",
// });

// buttonStart?.addEventListener("click", () => {
//   const tweens = gsap.getTweensOf(".square");
//   const squareTween = gsap.getById("square-tween");

//   console.log(tweens);
//   console.log(squareTween);

// console.log("tween Is Teewning " + gsap.isTweening(".square"));
// console.log("tween Is Active " + tween.isActive());
// gsap.killTweensOf(".square", "backgroundColor,y");
// tween.kill(".active", "backgroundColor,y");
// console.log("tween Is Teewning " + gsap.isTweening(".square"));
// console.log("tween Is Active " + tween.isActive());
// });

// ### GSAP SNAP PLUGIN

buttonStart?.addEventListener("click", () => {
  const tween = gsap.to(".square", {
    id: "square-tween",
    duration: 5,
    ease: "sine.out",
    x: 500,
    backgroundColor: "#ff9922",
    snap: {
      // x: "20",
      // x: [0, 100, 250, 500],
      x: {
        values: [0, 100, 250, 500],
        radius: 30,
      },
    },
  });
});
