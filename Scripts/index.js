// const imgElements = document.querySelectorAll('img');

// new simpleParallax(imgElements, {
//     scale: 1.6,
//     transition: 'ease-in-out'
// });

const loginButtonElement = document.querySelector('.login');
const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const filterDownElement = document.getElementById('filter__down');
const filterUpElement = document.getElementById('filter__up');
const filterContentElement = document.querySelector('.filter__content');

const showMoreButtonElement = document.querySelector('.show__more__btn');
const hidenContentElement = document.querySelector('.hiden__content');
const showLessButtonElement = document.querySelector('.show__less');


function displayLoginForm() {
    const asideElement = document.querySelector('.model');
    asideElement.style.display = 'block';
    backdropElement.style.display = 'block';
};

function hideLoginForm () {
    asideElement.style.display = 'none';
    backdropElement.style.display = 'none';
};

function showFilterContent () {
    filterDownElement.style.display = 'none';
    filterUpElement.style.display = 'block';
    filterContentElement.style.display = 'block';
};

function hideFilterContent () {
    filterUpElement.style.display = 'none';
    filterDownElement.style.display = 'block';
    filterContentElement.style.display = 'none';
};

// displayNoneElements.style.display = 'none';

function showDisplayNoneElement () {
    hidenContentElement.style.display = 'block';
    showMoreButtonElement.style.display = 'none'
    showLessButtonElement.style.display = 'block'
};

function hideHidenContent () {
    hidenContentElement.style.display = 'none';
    showMoreButtonElement.style.display = 'block'
    showMoreButtonElement.style.display = 'flex'
    showLessButtonElement.style.display = 'none'
}


loginButtonElement.addEventListener('click', displayLoginForm);

backdropElement.addEventListener('click', hideLoginForm);

filterDownElement.addEventListener('click', showFilterContent);
filterUpElement.addEventListener('click', hideFilterContent);

showMoreButtonElement.addEventListener('click', showDisplayNoneElement);
showLessButtonElement.addEventListener('click', hideHidenContent)