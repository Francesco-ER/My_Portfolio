let menuanimate = document.querySelector('.toggle');
let menutoggle = document.querySelector('.menu');
let menuLinks = document.querySelectorAll('.menu-item a[href^="#"]');

menuanimate.addEventListener('click', () => {
  menuanimate.classList.toggle('active');
  menutoggle.classList.toggle('show');
});

menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", () => {
    menutoggle.classList.remove("show");
  })
});