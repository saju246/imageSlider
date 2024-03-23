const images = ['./image/1-2.jpg','./image/2-1.jpg','./image/2.jpg','./image/3-2.jpg','./image/4-2.jpg','./image/4.jpg','./image/5-1.jpg','./image/5.jpg','./image/6.jpg','./image/6-1.jpg'];
let currentImage = 0;
const sliderImage = document.getElementById('sliderImage');

function nextImage(){
    currentImage++;
    if(currentImage >= images.length){
        currentImage = 0;

    }
    updateImage();
}

function prevImage(){
    currentImage --;
    if(currentImage < 0){
        currentImage = images.length-1;
    }
    updateImage();
}

function updateImage(){
    sliderImage.src = images[currentImage];
}