const introMenu = document.querySelector('#navigation li a[href=""]');
const windowSection = document.querySelector('#window');

introMenu.addEventListener('click', function(event){
    event.preventDefault();

    windowSection.style.display = 'block';
})