//------------------------------------------------------------------------------troca de temas
const standart = document.getElementById("standart-mode");
const dark = document.getElementById("dark-mode");
const black = document.getElementById("black-mode");
//---------------------------------- criando a função
function applytheme(themeClass){
    document.body.classList.remove("darkcolors", "blackcolors")

    if(themeClass !== "standart"){
        document.body.classList.add(themeClass)
    }
}

//----------------------------------chamando a função
standart.addEventListener("click", () => {
    applytheme("standart"); 
});
dark.addEventListener("click", () => {
    applytheme("darkcolors"); 
});
black.addEventListener("click", () => {
    applytheme("blackcolors"); 
});


//----------------------------------------------------------------------localização pela nav
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]'); 
    const navLinks = document.querySelectorAll('nav ul li a');

    function activateNavLink() {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - document.querySelector('header').offsetHeight;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSectionId) { 
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', activateNavLink);

    activateNavLink();
});


//--------------------------------------------------------------------------------carrossel

document.addEventListener('DOMContentLoaded', () => {
    const carrosselElement = document.querySelector('.janela-carrossel');
    const totalItems = document.querySelectorAll('.imgcarrossel').length; //length (len)
    const viewPortWidth = document.querySelector('#carrossel-container').offsetWidth; // pega largura
    
    let currentIndex = 0;
    const slideInterval = 3000; // tempo de transição

    function updateCarrosselPosition() {
        carrosselElement.style.transform = `translateX(${-currentIndex * viewPortWidth}px)`;
    }

    function nextSlide() {
        if (currentIndex < totalItems - 1) { //conta os slides, se chegar no final, zera
            currentIndex++;
        } else {
            currentIndex =0;
        }
        updateCarrosselPosition();
    }

    setInterval(nextSlide, slideInterval);

    window.addEventListener('resize', () => {
        viewPortWidth = document.querySelector('#carrossel-container').offsetWidth;
        updateCarrosselPosition(); 
    });
    
    updateCarrosselPosition();
});


//----------------------------------------------------------------- hambuquer menu --------------------------



document.addEventListener('DOMContentLoaded', () => {

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links ul li a'); 

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
        hamburgerMenu.classList.toggle('active'); 
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active'); 
            hamburgerMenu.classList.remove('active'); 
        });
    });

});