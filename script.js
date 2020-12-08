const navslide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('links');
    const links = document.querySelectorAll('.links');
    //toggle nav
    burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active')
    });
    //animation af links
    links.forEach(link=>{
    link.style.animation = `linkfade 0.5s ease forwards ${index / 7}s`
    console.log(index / 7);
    });
}
navslide();