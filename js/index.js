// JS goes here
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener("DOMContentLoaded", function(event) {
    let hamburgerMenu = document.querySelector('.hamburger-menu-icon-closed');
    let extendedNavModal = document.querySelector('.menu-expanded');

    extendedNavModal.style.display = "none";
    
    

    
    
    hamburgerMenu.addEventListener('click', () => {
        if (extendedNavModal.style.display === "none") {
            extendedNavModal.style.display = "block";
            hamburgerMenu.src = "img/nav-hamburger-close.png";
        } else {
            extendedNavModal.style.display = "none";
            hamburgerMenu.src = "img/nav-hamburger.png";
        }
    })
    
        console.log("It works")
    
    })

    function toggle_visibility() {
        let heroImgCopy = document.querySelector('#bar');
        if(heroImgCopy.style.display === 'none') {
            heroImgCopy.style.display = 'block';
            console.log("Hero copy is gone!")
    } else
        heroImgCopy.style.display = 'none';
        console.log("Epic Fail")
}