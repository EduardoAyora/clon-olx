// Get the search modals
var searchModals = document.getElementsByClassName("search-modal")
// Get the button that opens the modal
var btn = document.getElementById("search-button")
// When the user clicks the button, open the modal 
btn.onclick = function() {
    for (let index = 0; index < searchModals.length; index++) {
        searchModals[index].style.display = "block"
    }
}

// Get the profile modals
var profileModals = document.getElementsByClassName("profile-modal")
// Get the button that opens the modal
var btn = document.getElementById("profile-button")
// When the user clicks the button, open the modal 
btn.onclick = function() {
    for (let index = 0; index < profileModals.length; index++) {
        profileModals[index].style.display = "block"
    }
}

// Cerrando los modals
var outerModals = document.getElementsByClassName("overlay-styles")
var innerModals = document.getElementsByClassName("modal-styles")
var closeButtons = document.getElementsByClassName("close")
// When the user clicks on <closeButtons> (x), close the modal
for (let index = 0; index < closeButtons.length; index++) {
    closeButtons[index].onclick = function() {
        for (let index = 0; index < outerModals.length; index++) {
            outerModals[index].style.display = "none"
            innerModals[index].style.display = "none"
        }
    }
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (let index = 0; index < outerModals.length; index++) {
        if (event.target == outerModals[index]) {
            for (let index = 0; index < outerModals.length; index++) {
                outerModals[index].style.display = "none"
                innerModals[index].style.display = "none"
            }
        }
    }
}