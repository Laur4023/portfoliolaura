const menubutton = document.getElementsByClassName('menubutton')[0]
const links = document.getElementsByClassName('links')[0]

menubutton.addEventListener('click', () => {
links.classList.toggle('active')
})