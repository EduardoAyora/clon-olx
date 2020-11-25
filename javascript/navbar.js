var isMenuOpen = false
var burgerMenu = document.getElementById("burger-menu")
const expandedContainer = document.getElementById("expanded-container")

function expandedControl() {
    if(window.innerWidth > 800) {
        expandedContainer.style.display = "none"
        isMenuOpen = false
    }
}
window.onresize = expandedControl;

function openMenu() {
    isMenuOpen = !isMenuOpen
    if(isMenuOpen) {
        expandedContainer.style.display = "block"
    } else {
        expandedContainer.style.display = "none"
    }
}