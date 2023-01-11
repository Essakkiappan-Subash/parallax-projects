

const horizantalBox = document.querySelector('.horizantal-floating-box');
const fastBox = document.querySelector('.fast-floating-box');

let initialTraslationX = 0;
let initialTraslationY = 40;
// let initialRotation = 45;

// let initialTraslation2 = 50;
// let initialRotation2 = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    // const scrollTop2 = scrollTop / 3;

    horizantalBox.style.transform = `translate(${initialTraslationX + window.scrollY}px , ${initialTraslationY + window.scrollY/1.15}px) rotate(${initialRotation + scrollTop}deg)`;
    fastBox.style.transform = `translate(0, ${initialTraslation + window.scrollY}px) rotate(${initialRotation + scrollTop/4}deg)`;
})