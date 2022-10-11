const hamburgerButton = document.getElementById('hamburger')
const navList = getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)