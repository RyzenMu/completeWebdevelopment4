'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');
const header = document.querySelector('.header');// selects first element with class header2
const allSections = document.querySelectorAll('.section'); // selects all elements with class section




const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', closeModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//page navigation

// old method
// this old method has performance issues this has 3 addEventlisterners for 3
// and will have 1000 addEventListerners for 1000 links
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });

// new Method
// event Delegation
// 1. Add event listner to common parent
// 2. Determine what element originated the event.
document.querySelector('.nav__links').addEventListener('click', function(e){
  e.preventDefault();
   console.log("event target", e.target);
   //matching strategy
   if (e.target.classList.contains('nav__link')){
     const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior : 'smooth',
    });
   };
});

//tabbed Components
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// adding event handlers on  3 tabs

// old bad practice
// tabs.forEach( t => t.addEventListener('click', function(){
//   console.log('clcicked');
// }));

// new practice is using event delegations
tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');
    console.log(clicked);
    // guard clause
    if(!clicked) return;

    //activate tab
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    // removing content
    tabsContent.forEach(c=> c.classList.remove('operations__content--active'));
    
    // Activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//MENU FADDING
const nav = document.querySelector('.nav');
const handleHover = function(e){
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');
  siblings.forEach(el => {
    if (el !== link) el.style.opacity = this;
  });
  logo.style.opacity = this;
}
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout',  handleHover.bind(1)); 

//Sticky Navigation
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function(){
  console.log(this.window.scrollY);
  if(this.window.scrollY > initialCoords.top){
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

//inserction of observer api
const obsCallback = function(entries, observer){
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  root : null,
  threshold : [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function(entries){
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin : `${navHeight}px`,
});
headerObserver.observe(header);

// Reveal sections
const revealSection = function(entries, observer){
  const [entry] = entries;
  //guard clause
  if (!entry.isIntersecting)
  if(entry.isIntersecting) entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
  root : null,
  threshold : 0.15,
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//LAZING LOADING IMAGES
const imgTargets = document.querySelectorAll('img[data-src]');
const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  // replace the src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root : null,
  threshold : 0,
  rootMargin : '200px',
});
imgTargets.forEach(img => imgObserver.observe(img));


// sliders
const slider = function() {
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('slider__btn--right');
const dotContainer = document.querySelectorAll('.dots');
let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');
slider.style.transform = `scale(0.5) translateX(-1200px)`;
slider.style.overflow = `visible`;
slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`);
// 0%, 100%, 200%, ....

const createDots = function (){
slides.forEach(function(_, i){
  dotContainer.insertAdjacentHTML('beforeend',
    `<button class="dots__dot" data-slide="${i}"></button>`)
})
};

 const activeDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach( dot => 
    dot.classList.remove('.dots__dot--active')
  );
  document.querySelector(`.dots__dot[data-slide"${slide}"]`)
}
const goToSlide = function(slides){
  slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`);
};
// next slide 
const nextSlide = function(){
  if(curSlide === maxSlide - 1){
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
};
const prevSlide = function (){
  if (curSlide === 0){
    curSlide = maxSlide -1;
  } else {

    curSlide--;
  }
  goToSlide(curSlide);
  activeDot(curSlide);
}
const init = function(){
  goToSlide(0);
  createDots();
  activeDot(0);
};
init();
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// adding key board events e.g right arrow key, left arrow key
document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft'){
    prevSlide();
  };
  // short circuting
  e.key === 'ArrowRight' && nextSlide();
})

// delegation
dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide);
  activeDot(slide);
  }
})
}
slider();


//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//

// LECTURES

// SELECTING DOM ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// const header = document.querySelector('.header');// selects first element with class header2
// const allSections = document.querySelectorAll('.section'); // selects all elements with class section
console.log(allSections);

document.getElementById('section--1');

// selecting by tag name
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

// selecting by class name
console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING HTML ELEMENTS
const message = document.createElement('div');
message.classList.add('cookie-message'); 
message.textContent = 'we use cookies for improved functionality and analytics';
message.innerHTML = 'we use cookies for improved functionality and analytics<button class="btn btn--close-cookie">Got it!</button>';

//inserting the html element
header.prepend(message); // prepend will make the first child.
header.append(message.cloneNode(true)); // append will make the last child.

// insering html elemnts before and after the html elements.
header.before(message);
header.after(message.cloneNode(true));

// deleting the html elements.
// remove method is used to delete the html element
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  // old-school method
  message.parentElement.removeChild(message);
});


// STYLES 
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// get styles from dom
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

//ATTRIBUTES
// get attributes
const logo = document.querySelector('.nav__logo'); 
console.log(logo.getAttribute('src'));
console.log((logo.src));
console.log(logo.alt);
console.log(logo.className);
console.log(logo.getAttribute('designer'));


//set attributes
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);
logo.setAttribute('company', 'Bankist');

//link attributes
const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link1 = document.querySelector('.nav__link--btn');
console.log(link1.href);
console.log(link1.getAttribute('href'));

//DATA aTTRIBUTES
console.log(logo.dataset.versionNumber); 

// classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// we can also add className
logo.className = 'jonas'; // do not use this snce it overrides existing class, like multiple classes.

// SMOOTH SCROLLING


//1. old school method
const btnsScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

btnsScrollTo.addEventListener('click', function(e){
  e.preventDefault();
  const s1_coords = section1.getBoundingClientRect();
  console.log('s1 coords',s1_coords);
  console.log(e.target.getBoundingClientRect());
  console.log('current scroll(x/y)', window.pageXOffset, pageYOffset);
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  // scrolling
  // window.scrollTo(s1_coords.left+window.pageXOffset, s1_coords.top+window.pageYOffset);


  // 2. new method for smooth scrolling
  section1.scrollIntoView({behavior:'smooth'});
});

  const alertH1 = () => {
     alert('addEventListerner: Great! You are reading the heading : D');
     h1.removeEventListener('mouseenter', alertH1);// removing after first time.
  }
  
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter',alertH1);

// old method
// h1.onmouseenter = function(e){
//   alert('addEventListerner: Great! You are reading the heading : D');
// };

// removing event lister after 5 seconds has passed using setTimeout
setTimeout(()=>h1.removeEventListener('mouseover', alertH1), 5000);

//Bubbling && Capturing
const randomInt = (min, max) => Math.floor(Math.random() *(max-min+1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);
  //stop propogation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('container', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
}, true);

//Event Delegation
//
///
// DOM TRAVESING
const h11 = document.querySelector('h1');
console.log(h11.querySelectorAll('.highlight'));

console.log(h11.childNodes);
console.log(h11.children);

h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orange';

console.log(h11.parentNode);
console.log(h11.parentElement);

//closest
h1.closest('.header').style.background = 'var(--gradient-primary)';

//siblings
console.log(h1.previousElementSibling); 
console.log(h1.nextElementSibling);

// getting all the siblings
console.log(h1.parentElement.children);

//fun
[...h1.parentElement.children].forEach(function(el){
  if(el !== h1) el.style.transform = 'scale(0.5)'
});

//BUILDING TABBED COMPONENTS

//DOM CONTENT LOADED
document.addEventListener('DOMContentLoaded', function(e){
  console.log('Html parsed and DOM tree built');
});

window.addEventListener('load', function(e){
  console.log('Page fully loaded');
})

window.addEventListener('beforeunload', function(e){
  // when close button is clicked
  e.preventDefault();
  // leaving confirmation
  e.returnValue = ''; // creates a pop up .. leave Site..?
});

//DEFER AND ASYNC
// always use defer 
// only modern browsers support async and defer
//





























