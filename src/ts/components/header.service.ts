import { header } from "../document.elements";

let scroll = window.scrollY;
window.addEventListener("scroll", () => {
  const newScroll = window.scrollY;
  if (newScroll > scroll) {
    header.setAttribute("style", "height: 0");
  } else {
    header.removeAttribute("style");
  }
  scroll = newScroll;
});
