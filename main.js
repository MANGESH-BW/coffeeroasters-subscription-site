// const btnHamburger = document.querySelector('#btnHamburger');
// const header = document.querySelector('.header');
// const overlay = document.querySelector('.overlay');
// const header__menu = document.querySelector('.header__menu');
// const fadeElems = document.querySelectorAll('.has-fade');
// btnHamburger.addEventListener('click', function(){
//     console.log('click hamburger');

//     if(header.classList.contains('open')){ // Close Hamburger Menu
//     header.classList.remove('open');
//     fadeElems.forEach(function(element){
//         overlay.classList.remove('fade-in');
//         overlay.classList.add('fade-out');
//         header__menu.classList.remove('fade-in');
//         header__menu.classList.add('fade-out');
//     });
//     }
//     else { // Open Hamburger Menu
//         header.classList.add('open');
//         fadeElems.forEach(function(element){
//             overlay.classList.remove('fade-out');
//             overlay.classList.add('fade-in');
//             header__menu.classList.remove('fade-out');
//             header__menu.classList.add('fade-in');
//         });
//     }
// });
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const hamburger = document.querySelector(".ham");  
const headermenu = document.querySelector(".menu");  



hamburger.addEventListener('click', () => {  
   
 hamburger.classList.toggle("change")  
 headermenu.classList.toggle("nav-change")  
 overlay.classList.toggle("overlay")
});  



