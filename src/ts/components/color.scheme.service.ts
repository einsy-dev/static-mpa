import { themeBtn, root, themeUseIcon } from "../document.elements";
import Cookie from "../utils/cookie";

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
