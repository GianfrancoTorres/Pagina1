     const Hamburger = document.querySelector('.hamburger');
     const menu = document.querySelector('.menu-navegacion');

     console.log(menu)
     console.log(Hamburger)
     
     Hamburger.addEventListener('click', ()=>{
        menu.classList.toggle("spread")
    })
    window.addEventListener('click', e=>{
        if(menu.classList.contains('spread') && e.target != menu && e.target != Hamburger){
            menu.classList.toggle("spread")

        }
    })