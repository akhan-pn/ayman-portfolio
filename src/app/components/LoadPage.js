import { gsap, Power1 } from "gsap";

export default class LoadPage {
  constructor() {
    this.loadPageElement = document.querySelector(".loadpage");
    this.loadPagePhrase = document.querySelector(".loadpage__phrase");

    this.phrases = [
      "Developing since 2023.",
      "Full-stack web & mobile.",
      "Based in Hyderabad, India.",
      "Passionate about React.",
      "Building scalable apps.",
      "React Native experiences.",
      "User-centric design.",
      "Open for new projects.",
      "MERN-stack specialist.",
      "Problem-solving mindset.",
      "Crafting digital journeys.",
      "Pixel-perfect interfaces.",
      "Animating with GSAP.",
      "Performance-first coding.",
      "Cross-functional teammate.",
      "Continuous learner & explorer.",
    ];

    this.createPhrase();
    this.loading();
  }

  createPhrase() {
    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    this.loadPagePhrase.innerHTML =
      this.phrases[random(0, this.phrases.length - 1)];
  }

  loading() {
    return new Promise((resolve) => {
      const tl = gsap.timeline();

      tl.to(this.loadPageElement, {
        y: "0%",
        duration: 1,
        ease: Power1.easeOut,
        onComplete: resolve,
      });
      tl.to(this.loadPageElement, {
        y: "-100%",
        duration: 1,
        ease: Power1.easeOut,
        delay: 1,
      });
      tl.to(this.loadPageElement, {
        y: "100%",
        duration: 0,
      });
    });
  }
}
