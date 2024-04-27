const tl = gsap.timeline({ paused: true });
const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');


burgerBtn.addEventListener('click', () => {
  if (menu.classList.contains('menu--open')) {
    menu.classList.remove('menu--open');
    tl.reverse();
  } else {
    menu.classList.add('menu--open');
    tl.play();
  }
});

tl
  .from(".menu  ", { opacity: 0, y: "-100%", duration: 0.5 })
  .from(".menu__left",
    { opacity: 0, y: "100%", duration: 0.5 }
  )
  .from(".menu__right",
    { opacity: 0, y: "100%", duration: 0.5 },
  )
  .from(".social",
    { opacity: 0, y: "100%", duration: 0.7 },
  )
  .eventCallback('onReverseComplete', () => {
    menu.classList.remove('menu--open');
  });

closeBtn.addEventListener("click", () => tl.reverse())


const loaderTimeline = gsap.timeline();
loaderTimeline
  .from('.hero__title', { opacity: 0, y: 50, duration: 0.5 })
  .from('.hero__btn', { opacity: 0, y: 50, duration: 0.5 }, '-=0.3')
  .fromTo('.hero__descr', { opacity: 0 }, { opacity: 1, duration: 1 })
  .from('.photos-wrap img', { opacity: 0, y: -20, stagger: 0.2, duration: 0.5 }, '-=0.3');



