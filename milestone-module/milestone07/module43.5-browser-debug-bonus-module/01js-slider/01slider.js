
const images = [
    'images/pic-1.jpeg',
    'images/pic-2.jpeg',
    'images/pic-3.jpeg',
    'images/pic-4.jpeg',
    'images/pic-5.jpeg',
    'images/pic-6.jpeg',
    'images/pic-7.jpeg',
    'images/pic-8.jpeg',
    'images/pic-9.jpeg',
    'images/pic-10.jpeg'
];

let imgIndex = 0;
const imgElement = document.getElementById('slider-img');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0;
    } 
    const imgUrl = images[imgIndex];
    imgElement.setAttribute('src', imgUrl);
    // console.log(imgUrl);
    imgIndex++;
}, 1000);


