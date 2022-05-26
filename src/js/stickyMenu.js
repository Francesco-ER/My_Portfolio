let nav = document.querySelector('.boton-menu');
let scrollableElement = document.body;
let menuanimate = document.querySelector('.toggle');
let clicksCount = 0;

menuanimate.addEventListener('click', () => {
  clicksCount++;
  if (clicksCount > 1) {
    clicksCount = 0;
  }
});

scrollableElement.addEventListener('wheel', checkScrollDirection);
function checkScrollDirection(event) {
  if (clicksCount === 0) {
    if (checkScrollDirectionIsUp(event)) {
      nav.classList.remove('sticky');
    } else {
      nav.classList.add('sticky');
    }
  }
}
function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
