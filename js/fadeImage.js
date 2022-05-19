document.addEventListener('DOMContentLoaded', init);
// document.addEventListener('keypress', keypress_ivent);
var screenDiv;
var imageIndex = 0;
var imageNum = 20;
var tl;

function init() {
  screenDiv = document.getElementById('screen');
  anim();
}

function anim() {
  tl = gsap.timeline().repeat(-1);
  tl.set(screenDiv, { opacity: 1 },0) 
  tl.to(screenDiv, { opacity: 0, onComplete: changeImage}, 3) 
    .to(screenDiv, { opacity: 1, }, 4)
    .to(screenDiv, { opacity: 1, }, 6)
}

function changeImage() {
  imageIndex = Math.floor(Math.random() * imageNum);
  let str = 'url(img/' + imageIndex + '.png);';
  screenDiv.style.backgroundImage = 'url(img/' + imageIndex + '.png)';
}

