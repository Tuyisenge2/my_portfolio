 
function toggleMenu() {
    var smallScreenMenu = document.getElementById("smallScreenMenu");
    var menuButtonImage = document.getElementById("menubut");

    if (smallScreenMenu.style.display === "none" || smallScreenMenu.style.display === "") {
        smallScreenMenu.style.display = "flex";
        menuButtonImage.src = "images/cancelBut.svg"; 
    } else {
        smallScreenMenu.style.display = "none";
        menuButtonImage.src = "images/bars-solid.svg"; 
    }
}