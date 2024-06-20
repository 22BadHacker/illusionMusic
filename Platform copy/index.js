let left_scroll = document.getElementById('left_scrolls');
let right_scroll = document.getElementById('right_scrolls');

let playlist = document.getElementsByClassName('playlist')[0];

left_scroll.addEventListener('click', ()=>{
    playlist.scrollLeft -=100;
});

right_scroll.addEventListener('click', ()=>{
    playlist.scrollLeft +=100;
});




let left_scrollss = document.getElementById('left_scrollss');
let right_scrollss = document.getElementById('right_scrollss');

let male = document.getElementsByClassName('playlists')[0];

left_scrollss.addEventListener('click', ()=>{
    male.scrollLeft -=100;
});

right_scrollss.addEventListener('click', ()=>{
    male.scrollLeft +=100;
});




let left_scrolls = document.getElementById('scroll_lefts1');
let right_scrolls = document.getElementById('scroll_rights1');

let female = document.getElementsByClassName('playlist1')[0];

left_scrolls.addEventListener('click', ()=>{
    female.scrollLeft -=100;
});

right_scrolls.addEventListener('click', ()=>{
    female.scrollLeft +=100;
});



let left_list = document.getElementById('left_list');
let right_list = document.getElementById('right_list');

let lists = document.getElementsByClassName('list')[0];

left_list.addEventListener('click', ()=>{
    lists.scrollLeft -=100;
});

right_list.addEventListener('click', ()=>{
    lists.scrollLeft +=100;
});


let left_song = document.getElementById('left_song');
let right_song = document.getElementById('right_song');

let songs = document.getElementsByClassName('songs')[0];

left_song.addEventListener('click', ()=>{
    songs.scrollLeft -=100;
});

right_song.addEventListener('click', ()=>{
    songs.scrollLeft +=100;
});



let left_podcast = document.getElementById('left_scroll4');
let right_podcast = document.getElementById('right_scroll4');

let podcast = document.getElementsByClassName('podcast')[0];

left_podcast.addEventListener('click', ()=>{
    podcast.scrollLeft -=100;
});

right_podcast.addEventListener('click', ()=>{
    podcast.scrollLeft +=100;
});




let left_maroc = document.getElementById('left_maroc');
let right_maroc = document.getElementById('right_maroc');

let maroc = document.getElementsByClassName('maroc')[0];

left_maroc.addEventListener('click', ()=>{
    maroc.scrollLeft -=100;
});

right_maroc.addEventListener('click', ()=>{
    maroc.scrollLeft +=100;
});



let left_marocs = document.getElementById('left_marocs');
let right_marocs = document.getElementById('right_marocs');

let marocs = document.getElementsByClassName('marocs')[0];

left_marocs.addEventListener('click', ()=>{
    marocs.scrollLeft -=100;
});

right_marocs.addEventListener('click', ()=>{
    marocs.scrollLeft +=100;
});






let ads = document.getElementById('adss');
// setTimeout(function() => {
//     ads.style.display = 'none';
// }, 5000);



function out(){
    ads.style.display = 'none';
    ads.style.transition = 3;
}

const myTime = setTimeout(out, 11000);







const open = document.getElementById('open');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const open5 = document.getElementById('open5');



function clickMe(){
    open.play();
    open.style.display = 'block';
};



function clickMe1(){
    open1.play();
    open1.style.display = 'block';
};


function clickMe2(){
    open2.play();
    open2.style.display = 'block';
};



function clickMe3(){
    open3.play();
    open3.style.display = 'block';
};


function clickMe4(){
    open4.play();
    open4.style.display = 'block';
};


function clickMe5(){
    open5.play();
    open5.style.display = 'block';
};








