const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('links');
    const links = document.querySelectorAll('.links');

    burger.addEventListener('click',()=>{
    //toggle nav
    nav.classList.toggle('nav-active')

    //animation af links
    links.forEach(link=>{
    if(link.style.animation) {
    link.style.animation = ''
    } else {
    link.style.animation = `linkfade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    }); 
    //burger animation
    burger.classList.toggle('toggle');
    });

}
navslide();