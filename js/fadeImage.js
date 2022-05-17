document.addEventListener('DOMContentLoaded',init);
document.addEventListener('keypress', keypress_ivent);
var screenDiv;
var imageIndex = 0;
var imageNum = 11;

function keypress_ivent(e) {
	if(e.code === 'Space'){
        changeImage();
	}
	return false; 
}
 
function changeImage() {
    imageIndex++;
    if (imageIndex >= 11) imageIndex = 1;
    let str = 'url(img/' + imageIndex +'.png);';
    screenDiv.style.backgroundImage = 'url(img/' + imageIndex +'.png)';
}

function init() {
    screenDiv = document.getElementById('screen');
    const timer = setInterval(changeImage, 2000);
}

function fadeOut() {
    
}



