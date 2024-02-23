import "../pages/index.html";
import "../styles/index.scss";
import Cookie from "./utils/cookie";

const themeBtn = document.getElementById("theme-btn");
const root = document.getElementById("root");
const themeUseIcon = document.getElementById("theme-use-icon");
const preferedColorSchemeIsDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (Cookie.get("theme") === "dark" || preferedColorSchemeIsDark) {
  root.setAttribute("style", "color: white; background-color: rgb(33, 37, 41)");
  themeUseIcon.setAttribute("href", "#moon-icon");
} else {
  themeUseIcon.setAttribute("href", "#sun-icon");
}

themeBtn.addEventListener("click", () => {
  if (root.hasAttribute("style")) {
    root.removeAttribute("style");
    themeUseIcon.setAttribute("href", "#sun-icon");
    Cookie.set("theme", "dark");
  } else {
    root.setAttribute(
      "style",
      "color: white; background-color: rgb(33, 37, 41)"
    );
    themeUseIcon.setAttribute("href", "#moon-icon");
    Cookie.set("theme", "light");
  }
});

const offcanvas = document.getElementById("offcanvas");
const offcanvasBtn = document.getElementById("burger-btn");
offcanvasBtn.addEventListener("click", (e) => {
  if (offcanvas.hasAttribute("style")) {
    offcanvasHandler(false);
    return;
  }
  offcanvasHandler();
});
function offcanvasHandler(open = true) {
  if (open) {
    offcanvas.setAttribute("style", "width: 250px");
  } else {
    offcanvas.removeAttribute("style");
  }
}
