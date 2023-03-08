

const horizantalBox = document.querySelector('.horizantal-floating-box');
// const fastBox = document.querySelector('.fast-floating-box');

let initialTraslationX = 0;
let initialTraslationY = 40;
// let initialRotation = 45;

// let initialTraslationFastX = 44;
// let initialTraslationFastY = 230;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    horizantalBox.style.transform = `translate(${initialTraslationX + window.scrollY}px , ${initialTraslationY + window.scrollY/1.15}px) rotate(${initialRotation + scrollTop}deg)`;
    // fastBox.style.transform = `translate(${initialTraslationFastX + window.scrollY}px , ${initialTraslationFastY}px) rotate(${initialRotation + scrollTop}deg)`;
})