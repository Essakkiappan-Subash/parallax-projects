

const box = document.querySelector('.floating-box');
const allBoxImages = document.querySelectorAll('.img-box');
const slogans = document.querySelectorAll('.slogan');
const parallaxes = document.querySelectorAll('.parallax');

let initialTraslation = 40;
let initialRotation = 45;


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


// image
const showElements = (scrollTop, elements, animation) => {
    elements.forEach((element, i) => {
        const elemOffset = cumulativeOffset(element);
        if (scrollTop + window.innerHeight > elemOffset.top + element.offsetHeight) {
            element.classList.add(animation);
        }
    });
};

const calculateRangeValue = (oldMin, oldMax, newMin, newMax, oldValue) => {
    const oldRange = oldMax - oldMin;
    const newRange = newMax - newMin;

    return ((oldValue - oldMin) * newRange / oldRange) + newMin;
}


showElements(0, allBoxImages, 'animate')
showElements(0, slogans, 'textanim')
// image

const cards = document.querySelectorAll('.floating');
let scrollAmount = 0;
let oldScrollAmount = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    cards.forEach(card => {
        if (scrollTop + window.innerHeight > cumulativeOffset(card).top + card.offsetHeight) {
            if (scrollTop > oldScrollAmount) {
                scrollAmount--;
            } else if (scrollTop < oldScrollAmount) {
                scrollAmount++;
            }
            card.style.transform = `translateY(${scrollAmount + 0.9})`;
        }
    })
    oldScrollAmount = scrollTop;
})


window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    box.style.transform = `translateY(${initialTraslation + scrollTop/1.3}px) rotate(${initialRotation + scrollTop/30}deg)`;

    showElements(scrollTop, allBoxImages, 'animate')
    showElements(scrollTop, slogans, 'textanim')


    parallaxes.forEach((parallax, i) => {
        if ((scrollTop = window.innerHeight / 2) > parallax.offsetTop) {
            const oldMin = (parallax.offsetTop < window.innerHeight / 2) ? parallax.offsetTop : parallax.offsetTop - window.innerHeight / 2;
            const oldMax = oldMin - parallax.offsetHeight;
            const yPosition = calculateRangeValue(oldMin, oldMax, 0, -200, scrollTap);
            parallax.style.backgroundPosition = `center ${yPosition}px`;
        }
    });
})