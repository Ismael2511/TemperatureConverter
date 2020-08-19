//NAV BAR SCROLL CHANGE
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('Scroll');
    } else {
        $('nav').removeClass('Scroll')
    }
})

//TEXT APPEARING EFFECT

function scrollAppear() {
    /*SECTION 1 HEADER
    var textHeader = document.querySelector('.text-header');
    var headerPosition = textHeader.getBoundingClientRect().top;
    var hdPosition = window.screenTop;

    if ( headerPosition ) {
        textHeader.classList.add('text-appear-header');
    }
    $(document).ready(function(){
        var textHeaeder = document.querySelector('.text-header');
        textHeaeder.classList.add('text-appear-header');
    })*/

    //SECTION 2
    var textTop = document.querySelector('.text-top');
    var textGet = document.querySelector('.text-get');
    var btn = document.querySelector('.btn');
    var getPosition = textTop.getBoundingClientRect().top;
    var scPosition = window.innerHeight / 4;
   

    if( getPosition < scPosition ) {
        textTop.classList.add('text-appear-top');
        textGet.classList.add('text-appear-get');
        btn.classList.add('btn-appear');
        
       // console.log(topPosition)
    }
}

window.addEventListener('scroll', scrollAppear);

//COUNTER UP
function counterAppear(){
    var mainNum = document.querySelector('.main-num');
    //var num2 = document.querySelector('.num2');
    //var num3 = document.querySelector('.num3');
    var numPosition = mainNum.getBoundingClientRect().top;
    var scNumPosition = window.innerHeight / 2;
   

    if( numPosition < scNumPosition ) {
        mainNum.classList.add('num-appear');
        //num2.classList.add('num-appear');
        //num3.classList.add('num-appear');

    }
}

window.addEventListener('scroll', counterAppear);

jQuery(document).ready(function( $ ) {
    $('figure').counterUp({
        delay: 20,
        time: 3000
    });
});


//SMOOTH SCROLL

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d/1.7;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
} 

var section = document.querySelector('.work'); 

section.addEventListener('click',function() {
    smoothScroll('.main-about', 3000);
});

//ON CLICK SUBMENU

$('.about').on(function(){
    var ul = document.querySelector('.about');
    ul.classList.add('showUl')
})


//LOADER

window.addEventListener('load',() => {
    const load = document.querySelector('.preload');
    load.classList.add('preload-finish');
});

//COUNTER CLICK


 //VARIABLES
let score = document.querySelector('#score');
let btnClic = document.querySelector('.btn-clic');
let num1 = document.querySelector('.num-1');
let num2 = document.querySelector('.num-2');
let num3 = document.querySelector('.num-3');
let num4 = document.querySelector('.num-4');
let num5 = document.querySelector('.num-5');


 //Make them invisible
 document.querySelector('.num-1').style.display = 'none';
 document.querySelector('.num-2').style.display = 'none';
 document.querySelector('.num-3').style.display = 'none';
 document.querySelector('.num-4').style.display = 'none';
 document.querySelector('.num-5').style.display = 'none';


btnClic.addEventListener('click',function(){
    
    let random = Math.floor(Math.random() * 5 + 1); 

    document.querySelector('#score').textContent = random;

    if ( random == 1 ) {
        document.querySelector('.num-1').style.display = 'block';
        document.querySelector('.num-2').style.display = 'none';
        document.querySelector('.num-3').style.display = 'none';
        document.querySelector('.num-4').style.display = 'none';
        document.querySelector('.num-5').style.display = 'none';

        num1.classList.add('random-slide');        
    }
    else if ( random == 2 ) {
        document.querySelector('.num-1').style.display = 'none';
        document.querySelector('.num-2').style.display = 'block';
        document.querySelector('.num-3').style.display = 'none';
        document.querySelector('.num-4').style.display = 'none';
        document.querySelector('.num-5').style.display = 'none';  
        
        num2.classList.add('random-slide');        

    }
    else if ( random == 3 ) {
        document.querySelector('.num-1').style.display = 'none';
        document.querySelector('.num-2').style.display = 'none';
        document.querySelector('.num-3').style.display = 'block';
        document.querySelector('.num-4').style.display = 'none';
        document.querySelector('.num-5').style.display = 'none';

        num3.classList.add('random-slide');        

    }
    else if ( random == 4 ) {
        document.querySelector('.num-1').style.display = 'none';
        document.querySelector('.num-2').style.display = 'none';
        document.querySelector('.num-3').style.display = 'none';
        document.querySelector('.num-4').style.display = 'block';
        document.querySelector('.num-5').style.display = 'none';

        num4.classList.add('random-slide');        

    }
    else if ( random == 5 ) {
        document.querySelector('.num-1').style.display = 'none';
        document.querySelector('.num-2').style.display = 'none';
        document.querySelector('.num-3').style.display = 'none';
        document.querySelector('.num-4').style.display = 'none';
        document.querySelector('.num-5').style.display = 'block';

        num5.classList.add('random-slide');        
    }
});

let fruits = [
    {fruit:'apple',price:200},
    {fruit:'pear',price:500},
    {fruit:'pinapple',price:100},
    {fruit:'banana',price:240}
];

const fruitArry = fruits.filter(filterFruit => {
    return filterFruit.price < 300
})
console.log(fruitArry)

let liquidos = [
    {bebida:'agua',price:200},
    {bebida:'refresco',price:500},
    {bebida:'Jugo',price:100},
    {bebida:'Cerveza',price:240}
];

const liquidoArry = liquidos.find(bebidaFind =>{
    return bebidaFind.bebida === 'agua'
})
console.log(liquidoArry)

liquidos.forEach(liquido => {
    console.log(liquido.bebida)
})

const validacionMayor = fruits.some(fruit => {
    return fruit.price >= 100
})
console.log(validacionMayor)

const totalPrices = liquidos.reduce((currentPrice, liquido) => {
    return liquido.price + currentPrice 
}, 0)
console.log(totalPrices)
