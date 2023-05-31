'use strict';

let learning = document.querySelector('.learns');
let sec = document.querySelector('.section1');
let span = document.querySelector('span');
let footer = document.querySelector('footer');
let childHeader = document.querySelector('.child-header');

learning.addEventListener('click', function () {
  sec.scrollIntoView({
    behavior: 'smooth',
  });
});
childHeader.addEventListener('click', function (e) {
  e.preventDefault();
  let x = e.target;
  if (e.target.classList.contains('learn')) {
    let y = e.target.getAttribute('href');
    let z = document.querySelector(y);
    z.scrollIntoView({
      behavior: 'smooth',
    });
  }
});
let leo = document.querySelectorAll('.instant');
let article = document.querySelectorAll('.ret');
let blog = document.querySelector('.blog');
blog.addEventListener('click', function (e) {
  e.preventDefault();
  let buttons = blog.children;

  if (e.target.classList.contains('instant')) {
    let x = e.target.getAttribute('class');
    let y = x.split(' ');

    let k = y[2];
    leo.forEach(function (val) {
      val.classList.remove('rcb');
    });
    let req = document.querySelector(`#${k}`);
    article.forEach(function (val) {
      val.classList.add('article');
    });
    req.classList.remove('article');
    e.target.classList.add('rcb');
  } else {
    console.log('hi');
  }
});
let nav = document.querySelector('.header-1');
nav.addEventListener('mouseover', function (e) {
  e.preventDefault();
  let x = e.target;

  if (x.classList.contains('stone')) {
    let sib = x.closest('.child-header').querySelectorAll('.stone');
    let logo = x.closest('.header-1').querySelector('.child-header-1');
    sib.forEach(function (val) {
      val.style.opacity = 0.35;
    });
    x.style.opacity = 1;
    logo.style.opacity = 0.35;
  }
});
nav.addEventListener('mouseout', function (e) {
  e.preventDefault();
  let x = e.target;

  if (x.classList.contains('stone')) {
    let sib = x.closest('.child-header').querySelectorAll('.stone');
    let logo = x.closest('.header-1').querySelector('.child-header-1');
    sib.forEach(function (val) {
      val.style.opacity = 1;
    });
    x.style.opacity = 1;
    logo.style.opacity = 1;
  }
});
let obsfunction = function (entries) {
  let [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};
let details = nav.getBoundingClientRect().height;

let obj = {
  root: null,
  threshold: 0,
  rootMargin: `-${details}px`,
};
let main = document.querySelector('.header');
let observer = new IntersectionObserver(obsfunction, obj);
observer.observe(main);
let mayer = document.querySelectorAll('.kyle');
console.log(mayer);
let arg = function (entries) {
  let [entry] = entries;

  if (entry.isIntersecting) {
    entry.target.classList.remove('levis');
  }
};
let brazil = {
  root: null,
  threshold: 0.1,
};

let obs = new IntersectionObserver(arg, brazil);
mayer.forEach(function (val) {
  val.classList.add('levis');
  obs.observe(val);
});
let dekock = document.querySelector('.login');
dekock.addEventListener('click', function (e) {
  e.preventDefault();
  alert('Please use this button if you already have account');
});
let big = document.querySelector('.big');
let sense = document.querySelector('.forms');
let lacto = document.querySelector('.lacto');
big.addEventListener('click', function (e) {
  e.preventDefault();
  sense.classList.remove('form');
  sense.classList.add('casata');
  lacto.classList.add('apple');
});
const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
