const intro = document.querySelector('#intro-link')
const work = document.querySelector('#work-link')
const about = document.querySelector('#about-link')
const contact = document.querySelector('#contact-link')

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

intro.addEventListener('keydown', function(event){
    if (event.key === 'Tab'){
    
    } else if (event.key === 'Enter'){
        showWindow(windowIntro);
    }  
});

work.addEventListener('keydown', function(event){
    if (event.key === 'Tab'){
    
    } else if (event.key === 'Enter'){
        showWindow(windowWork);
    }  
});

about.addEventListener('keydown', function(event){
    if (event.key === 'Tab'){
    
    } else if (event.key === 'Enter'){
        showWindow(windowAbout);
    }  
});

contact.addEventListener('keydown', function(event){
    if (event.key === 'Tab'){
    
    } else if (event.key === 'Enter'){
        showWindow(windowContact);
    }  
});