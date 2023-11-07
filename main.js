
const windowIntro = document.querySelector('#window-intro');
const windowWork = document.querySelector('#window-work');
const windowAbout = document.querySelector('#window-about');
const windowContact = document.querySelector('#window-contact');

const headerContainer = document.querySelector('header');

function showWindow(windowSection){
    headerContainer.style.display = 'none';
    windowIntro.style.display = 'none';
    windowWork.style.display = 'none';
    windowAbout.style.display = 'none';
    windowContact.style.display = 'none';

    windowSection.style.display = 'block';
}
document
    .querySelector('#intro-link')
    .addEventListener('click', () => {
        showWindow(windowIntro);   
});

document
    .querySelector('#work-link')
    .addEventListener('click', () => {
        showWindow(windowWork);   
});

document
    .querySelector('#about-link')
    .addEventListener('click', () => {
        showWindow(windowAbout);   
});

document
    .querySelector('#contact-link')
    .addEventListener('click', () => {
        showWindow(windowContact);   
});


const closeIntro = document.querySelector('#close-intro');
const closeWork = document.querySelector('#close-work');
const closeAbout = document.querySelector('#close-about');
const closeContact = document.querySelector('#close-contact');

closeIntro.addEventListener('click', function(){
    windowIntro.style.display = 'none';
    headerContainer.style.display = 'block';
});

closeWork.addEventListener('click', function(){
    windowWork.style.display = 'none';
    headerContainer.style.display = 'block';
});

closeAbout.addEventListener('click', function(){
    windowAbout.style.display = 'none';
    headerContainer.style.display = 'block';
});

closeContact.addEventListener('click', function(){
    windowContact.style.display = 'none';
    headerContainer.style.display = 'block';
});
