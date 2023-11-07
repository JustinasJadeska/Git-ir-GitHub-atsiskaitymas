const introMenu = document.querySelector('#navigation li a[href=""]');
const windowSection = document.querySelector('#window');

function showWindow(){
    windowSection.style.display = 'block';
}

introMenu.addEventListener('keydown', function(event){
    if (event.key === 'Tab'){
    event.preventDefault();
    } else if (event.key === 'Enter'){
        showWindow();
    }  
});