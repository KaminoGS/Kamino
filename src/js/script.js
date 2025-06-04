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