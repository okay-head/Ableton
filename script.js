'use strict';

//navbar
$('.mobile-dropdown').hide();
// $('.menu').hide();


$('.menu-btn').click(()=>{
   $('.mobile-dropdown').slideToggle(600)
   $('.main').toggleClass('blue-bg')
   // setTimeout(() => {
      
   // }, 1000);

   // $('.menu').slideToggle(1100)
   // $('.fall1').slideToggle(1200)
   // $('.fall2').slideToggle(600)
   // $('.fall3').slideToggle(900)
   // $('.menu').slideToggle(300)
   // $('.fall2').slideToggle(800)
   // $('.fall3').slideToggle(1200)


   
})



// --- hide show ---
const intro = document.querySelector('.intro')
const section1 = document.querySelector('.section-1')
const section2 = document.querySelector('.section-2')
const section3 = document.querySelector('.section-3')
const section4 = document.querySelector('.section-4')
const section5 = document.querySelector('.section-5')

// collections
const array = [intro,section1,section2,section3,section4,section5];


function offset(element) {
   const x = Math.round(window.scrollY + element.getBoundingClientRect().top);
   return x;
}

/* function show(element) {
   $(element.toString()).show();
   console.log(element)
} */

// initialization
$('.intro,.section-1,.section-2,.section-3,.section-4,.section-5').addClass('fade-out');
$('.intro,.section-1,.section-2,.section-3,.section-4,.section-5').addClass('transition');



window.onscroll = function change() {

   array.forEach(element => {
      if (window.scrollY>offset(element)-480) {
      element.classList.remove('fade-out')
      array.shift(); //removes the element from the array to reduce overhead
   }
})    
   
}