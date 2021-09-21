'use strict';

function offset(element) {
   const x = Math.round(window.scrollY + element.getBoundingClientRect().top);
   return x;
}

$('.intro,.section-1,.section-2,.section-3,.section-4').hide();

const array = ['.intro','.section-1','.section-2','.section-3','.section-4'];

window.onscroll = function change() {

   array.forEach(element => {
      console.log($(element))
      // if (window.scrollY>offset($(element))-350) {
      // $(element).fadeIn()  
      // array.shift(); //removes the element from the array to reduce overhead
   }
   );   
}