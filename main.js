// const menuOpen = document.getElementById('menu-open');
// const menuClose = document.getElementById('menu-close');
// const sidebar = document.querySelector('.container .sidebar');

// menuOpen.addEventListener('click', () => sidebar.style.right = '0');

// menuClose.addEventListener('click', () => sidebar.style.right = '-100%');


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let artist = document.getElementsByClassName('artists')[0];

left_scroll.addEventListener('click', () =>{
    artist.scrollLeft -= 330;
});

right_scroll.addEventListener('click', () =>{
    artist.scrollLeft += 330;
});




const dynamicText = document.querySelector('p .textt span')
const words = ['Music', 'Illusion', 'Freedom','Emotion', 'Dream', 'Artists', 'Happiness', 'Passion'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add('stop-blinking')

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    }else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
        style:{ opacity : [0, 1]};
    }else{
        isDeleting = !isDeleting;
        dynamicText.classList.remove('stop-blinking')
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();




let left = document.getElementById('left_scroll1');
let right = document.getElementById('right_scroll1');
let move = document.getElementsByClassName('art1')[0];

left.addEventListener('click', () =>{
    move.scrollLeft -= 300;
});

right.addEventListener('click', () =>{
    move.scrollLeft += 300;
});





let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');

let moves = document.getElementsByClassName('column')[0];

left_scrolls.addEventListener('click', ()=>{
    moves.scrollLeft -=400;
});

right_scrolls.addEventListener('click', ()=>{
    moves.scrollLeft +=350;
});





// box
const box = document.getElementById('box')
function openBox(){
    box.style.display = 'flex';
}


function closeBox(){
    box.style.display = 'none';
}



// Second box
const boxs = document.getElementById('boxs')
function openBoxs(){
    boxs.style.display = 'flex';
}

function closeBoxs(){
    boxs.style.display = 'none';

}



// Third Box

const boxss = document.getElementById('boxss')
function openBoxss(){
    boxss.style.display = 'flex';
}

function closeBoxss(){
    boxss.style.display = 'none';
}




// Third Box
const boxsss = document.getElementById('boxsss')

function openBoxsss(){
    boxsss.style.display = 'flex';
}
function closeBoxsss(){
    boxsss.style.display = 'none';
    
}

// Third Box
const boxssss = document.getElementById('boxssss')

function openBoxssss(){
    boxssss.style.display = 'flex';
}
function closeBoxssss(){
    boxssss.style.display = 'none';
    
}