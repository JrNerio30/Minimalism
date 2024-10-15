const heroTitle = document.querySelector('.hero-title')

gsap.fromTo(
  heroTitle,
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 }
);

gsap.fromTo(
  ".aside-title",
  {x: -100, opacity: 0},
  {x: 0, opacity: 1, duration: 0.5}
);

gsap.fromTo(
  ".item-1",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 }
);

gsap.fromTo(
  ".item-2",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.7 }
);

gsap.fromTo(
 ".item-3",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.9 }
);

gsap.fromTo(
  ".item-4",
  { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 1.1 }
);

gsap.fromTo(
  ".quote-1",
  {x: 100, opacity: 0},
  {x: 0, opacity: 1, duration: 0.5}
);

gsap.fromTo(
  ".quote-2",
  {x: 100, opacity: 0},
  {x: 0, opacity: 1, duration: 0.7}
);


