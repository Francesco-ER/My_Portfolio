let menuanimate = document.querySelector('.toggle');
let menutoggle = document.querySelector('.menu');
menuanimate.addEventListener('click', () => {
  menuanimate.classList.toggle('active');
  menutoggle.classList.toggle('show');
})
