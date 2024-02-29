export default function swipeEvent(el: any, callback: any, ignoreValue = 100) {
  let startX = 0;
  let endX = 0;
  let startY = 0;
  let endY = 0;
  let ignore;

  el.addEventListener(
    "touchstart",
    (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    },
    false
  );

  el.addEventListener(
    "touchend",
    (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX;
      endY = e.changedTouches[0].clientY;

      startY > endY
        ? (ignore = startY - endY < ignoreValue)
        : (ignore = startY - endY > -ignoreValue);

      if (!ignore) return;
      if (endX < startX && startX - endX > 25) {
        callback(false);
      }
      if (endX > startX && endX - startX > 25) {
        callback(true);
      }
    },
    false
  );
}
