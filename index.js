//Two ways to add GSAP

// gsap.from("#home h1", {
//   color: "red",
//   duration: 2,
// });

// gsap.to("#home h1", {
//   color: "red",
//   duration: 2,
// });

var timeline = gsap.timeline();

timeline
  .from("header", {
    opacity: 0,
    y: -20,
  })
  .from(".navbar", {
    y: -10,
  })
  .from(".pop-up", {
    opacity: 0,
    scale: 0.8,
  })
