let aboutBtn = document.querySelector('.about-btn');
let workBtn = document.querySelector('.work-btn');
let menu = document.querySelector('.menu');
let pageBody = document.querySelector('.page');

aboutBtn.addEventListener('click', function(){
    document.querySelector('.about-show').classList.toggle('show')
    document.querySelector('.rotate_about').classList.toggle('rotate')
});

workBtn.addEventListener('click', function(){
    document.querySelector('.work-show').classList.toggle('show')
    document.querySelector('.rotate_work').classList.toggle('rotate')
});

document.querySelector('.hamburger').addEventListener('click',function(){
   // this.classList.toggle('click')
    menu.classList.toggle('showMenu');
    document.querySelector('.bars').classList.toggle('open')
    this.classList.toggle('open')
    /**-------BlackOut Page--------- */
    pageBody.classList.toggle('blackout')

})

//-----------Parallax------------
window.addEventListener('scroll',function(){
    const parallax = document.querySelector('.parallax')
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .3 + 'px)' ;

})

window.addEventListener('scroll',function(){
    let scrollPosition = window.scrollY > 0;
    const nav = document.querySelector('.nav-bar');

    nav.classList.toggle('nav-scroll',scrollPosition)
   
})

/**GSAP */
//rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second. 
gsap.fromTo('.hero-clipped', {scaleX:0},{duration:1,scaleX:1});
gsap.fromTo('.logo', {x:-200,opacity:0},{duration:1,x:0,delay:.5,opacity:1});
gsap.fromTo('.hamburger', {y:-5,opacity:0},{duration:1,delay:.6,y:0,opacity:1});
gsap.fromTo('.btn', {yPercent:-5,opacity:0},{duration:1,delay:.6,yPercent:0,opacity:1});
