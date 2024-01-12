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
            logo.src = '/images/logo-white.webp'
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
// делаем функцию контроля видео 
function controlVimeoVideo() {
    var player = new Vimeo.Player(document.getElementById('vimeo-video'));
    const vimeoPlay = document.querySelector('.video-titles');
  
    // Используем async/await для ожидания завершения player.ready()
    async function init() {
        let playV = false;
      await player.ready()
        player.pause();
        const vimeoPlayBtn = vimeoPlay.querySelector('.vimeo-play'); 
         vimeoPlay.onclick = () => {
            if(!playV){
            playV = true;
            player.play();
            player.setVolume(1);
            vimeoPlayBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 9h2v6h-2zM9 9h2v6H9z"></path>
            </svg>
            `;
            vimeoPlay.style.backgroundImage = 'none';
           
            }else{
            playV = false;
            player.pause();
            vimeoPlayBtn.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
                <path d="m9 17 8-5-8-5z"></path>
            </svg>
            `;
            vimeoPlay.style.backgroundImage = 'url(/images/bg-vimeo.jpg)'
            }
        };
       
    }
    init();
  }
controlVimeoVideo();