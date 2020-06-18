const buttons = document.querySelectorAll('.calculator_model');
const calcImage = document.querySelector('.calculator_image__big');

const windowArray = [
    {
        src: './images/1windowBig.png'
    },
    {
        src: './images/2windowBig.png'
    },
    {
        src: './images/3windowBig.png'
    },
    {
        src: './images/4windowBig.png'
    },
    {
        src: './images/5windowBig.png'
    },
];

let toggleImage = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = (e) => {
            calcImage.setAttribute('src', windowArray[e.target.attributes.index.value].src)
        }
    }
};

toggleImage();
