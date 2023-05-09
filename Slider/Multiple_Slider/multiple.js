const slides = document.querySelector(".slides");
// 배열
const slide = document.querySelectorAll(".slides li");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIdx = 0;
const slideCount = slide.length;
const margin = 30;
const width = 300;

slides.style.width = (width+margin)*slideCount - margin + 'px';

nextBtn.addEventListener("click",() => {
    if(currentIdx <slideCount -3){
        moveNext(currentIdx + 1)
    }else{
        moveNext(0);
    }
});

prevBtn.addEventListener("click", ()=>{
    if(currentIdx > 0){
        moveNext(currentIdx - 1)
    }else{
        moveNext(slideCount-3);
    }
})

function moveNext(num){
    slides.style.left = -num*330 + 'px';
    currentIdx = num;
    console.log(currentIdx)
}

function movePrev(num){
    slides.style.left = num*330 + 'px';
    currentIdx = num;
    console.log(currentIdx)
}
