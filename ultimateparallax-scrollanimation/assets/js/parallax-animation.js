const box = document.querySelector('.floating-box');
const allBoxImages = document.querySelectorAll('.img-box');
const slogans = document.querySelectorAll('.slogan');
const cards = document.querySelectorAll('.floating');

let initialTraslation = 40;
let initialRotation = 45;


// Image show
var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
        top += element.offsetTop || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);
    
    return{
        top: top,
        left: left
    };
};

// Image, content anmation
const showElements = (scrollTop, elements, animation) => {
    elements.forEach((element, i) => {
        const elemOffset = cumulativeOffset(element);
        if (scrollTop + window.innerHeight > elemOffset.top + element.offsetHeight) {
            element.classList.add(animation);
        }
    })
};

// Image, content anmation

showElements(0, allBoxImages, 'animate') // Image show
showElements(0, slogans, 'textanim') // content show


let scrollAmount = 0;
let oldScrollAmount = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    cards.forEach(card => {
        if ((scrollTop + window.innerHeight) > cumulativeOffset(card).top + card.offsetHeight) {
            if (scrollTop > oldScrollAmount) {
                scrollAmount --;
            } else if (scrollTop < oldScrollAmount) {
                scrollAmount ++;
            }
            card.style.transform = `translateY(${scrollAmount * .9}px) `;
        }
    });
    oldScrollAmount = scrollTop;
});


// rotate box - Hero
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    box.style.transform = `translate(0, ${initialTraslation + window.scrollY/1.3}px) rotate(${initialRotation + scrollTop/30}deg)`;
    // fastBox.style.transform = `translate(${initialTraslationFastX + window.scrollY/1.3}px) rotate(${initialRotation + scrollTop}deg)`;

    showElements(scrollTop, allBoxImages, 'animate') // Image show
    showElements(scrollTop, slogans, 'textanim') // content show

});
// rotate box - Hero