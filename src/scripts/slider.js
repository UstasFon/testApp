const sliderItems = document.querySelector('.slider_items-wrapper');
const sliderImage = document.querySelector('.slider_box__image');

const imageArray = [
    {
        id: 1,
        image: './images/1.png'
    },
    {
        id: 1,
        image: './images/2.png'
    },
    {
        id: 1,
        image: './images/3.png'
    }
];

let toggleImage = (e) => {
    sliderImage.setAttribute('src', imageArray[e.target.id].image)
};

sliderItems.onclick = toggleImage;


