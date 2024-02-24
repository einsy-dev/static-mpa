import { main, offcanvas, offcanvasBtn, root } from "../document.elements";
import swipeEvent from "../utils/swipe";

offcanvasBtn.addEventListener("click", (e) => {
  if (!offcanvas.hasAttribute("style")) {
    offcanvas.setAttribute("style", "width: 250px");
  } else {
    offcanvas.removeAttribute("style");
  }
});

main.addEventListener("click", (e) => {
  if (offcanvas.hasAttribute("style")) {
    offcanvas.removeAttribute("style");
  }
});
swipeEvent(main, swipeHandler);

function swipeHandler(right: boolean) {
  if (right) {
    offcanvas.setAttribute("style", "width: 250px");
  }
}
