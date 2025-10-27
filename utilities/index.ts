import gsap from "gsap";
import ScrollSmoother from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const _config = {
  sticky_header() {
    window.addEventListener("scroll", function (event) {
      const scroll = window.pageYOffset;
      if (scroll < 100) {
        document.querySelector(".ed-header")?.classList.remove("sticky");
      } else {
        document.querySelector(".ed-header")?.classList.add("sticky");
      }
    });
  },
};
