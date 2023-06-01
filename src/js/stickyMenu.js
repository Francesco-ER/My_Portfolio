let nav = document.querySelector('.menu');
let scrollableElement = document.body;
let clicksCount = 0;

scrollableElement.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
  if (checkScrollDirectionIsUp(event)) {
    nav.classList.remove('sticky');
  } else {
    nav.classList.add('sticky');
  }
}
function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
