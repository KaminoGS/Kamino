const standart = document.getElementById("standart-mode");
const dark = document.getElementById("dark-mode");
const black = document.getElementById("black-mode");

function applytheme(themeClass){
    document.body.classList.remove("darkcolors", "blackcolors")

    if(themeClass !== "standart"){
        document.body.classList.add(themeClass)
    }
}

standart.addEventListener("click", () => {
    applytheme("standart"); 
});
dark.addEventListener("click", () => {
    applytheme("darkcolors"); 
});
black.addEventListener("click", () => {
    applytheme("blackcolors"); 
});