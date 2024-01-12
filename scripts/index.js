// создаем функцию фиксирования хедера при сколее
function headerFixed(){
    const menuDesctop = document.querySelector('.menu-desctop');
    const menuMobile = document.querySelector('.menu-mobile');
   window.onscroll = () =>{
    const logo = menuDesctop.querySelector('.logo img');
        if(window.scrollY > 42){
            menuDesctop.classList.add('header-fixed');
            menuMobile.classList.add('header-fixed');
            logo.src = '/images/logo.webp';
        }else{
            logo.src = '../images/logo-white.webp'
            menuMobile.classList.remove('header-fixed');
            menuDesctop.classList.remove('header-fixed');
        }
    }
};
// создаем функцию show menu
function showMenu() {
    const burgerBtn = document.querySelector('.menu-mobile-btn');
    const closeBtn = document.querySelector('.close-menu-btn');
    const navbarMobile = document.querySelector('.navbar-mobile');
    burgerBtn.onclick = ()=>{
        navbarMobile.classList.add('navbar-mobile-show');
    }
    closeBtn.onclick = ()=>{
        navbarMobile.classList.remove('navbar-mobile-show');
    }
    navbarMobile.onclick = (e) => {
        if(e.target.className == 'navbar-mobile navbar-mobile-show') {
            navbarMobile.classList.remove('navbar-mobile-show');
        };
    }
    
}
headerFixed();
showMenu();
