const sidebarTransition = document.querySelector(".side-bar-wrapper");
const itemsTransition = document.getElementById('items-wrapper1')
const arrowClickHandler = document.querySelectorAll(".arrow-click");
let updatedSideBarClass = document.querySelector(".side-bar-wrapper");
const idSideBar = document.getElementById('side-bar__scroll-bar-hidden')







// hide side-bar arrow

arrowClickHandler[0].addEventListener('click', function myFunction(){
    console.log('hello')
    sidebarTransition.classList.add("transition-side-bar");
    itemsTransition.classList.add('transiton-items-wrapper');
    arrowClickHandler[1].classList.remove('hidden');
    arrowClickHandler[0].classList.add('hidden');
   

    // set the initial content IN on reaload with the arrow. clicking in
    // means that in link reload the content must be set LOCKED_IN

    
    
    
});
// show side-bar arrow

arrowClickHandler[1].addEventListener('click', function myFunction(){
    sidebarTransition.classList.remove("transition-side-bar");
    itemsTransition.classList.remove('transiton-items-wrapper');
    arrowClickHandler[0].classList.remove('hidden');
    arrowClickHandler[1].classList.add('hidden'); 

    // set the initial content OUT on reaload with the arrow. clicking OUT or NoClick
    // means that in link reload the content must be set LOCKED_out

});



const currentLocation = location.href;
const menuItem = document.querySelectorAll(' ul a');
const menuLenght = menuItem.length;

for (let i = 0; i<menuLenght; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active";
        
        // removing initial animation when users lockedIn the content
        
    }      
}


// timed scrollBar on sideBar

const burger = document.querySelector('.burger-wraper');
const clonedBurger = document.querySelector('.burger-wraper__clone')
const menuBurger = document.querySelector('.menu__burger-up');
const line1 = document.querySelectorAll('.line1');
const line2 = document.querySelectorAll('.line2');
const line3 = document.querySelectorAll('.line3');

// const bodyBackgroud = document.querySelector('.wrapper__nav-bar')
// burger.addEventListener('click', function burgerClickHandler(){
//     menuBurger.classList.add('menu__burger-down');
//     line1[0].classList.toggle('line1rotated');
//     line2[0].classList.toggle('hidden');
//     line3[0].classList.toggle('line3rotated');
//     // bodyBackgroud.classList.toggle('opacity-backgroud');
// });

clonedBurger.addEventListener('click', function xanimationhandler(){
    menuBurger.classList.toggle('menu__burger-down');
    clonedBurger.classList.toggle('move-burger')
    line1[0].classList.toggle('line1rotated');
    line2[0].classList.toggle('hidden');
    line3[0].classList.toggle('line3rotated');
} )




