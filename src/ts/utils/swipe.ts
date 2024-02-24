export default function swipeEvent(el: any, callback: any) {
  let startX = 0;
  let endX = 0;

  el.addEventListener(
    "touchstart",
    (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    },
    false
  );

  el.addEventListener(
    "touchend",
    (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX;

      if (endX < startX) {
        callback(false);
      }
      if (endX > startX) {
        callback(true);
      }
    },
    false
  );
}
