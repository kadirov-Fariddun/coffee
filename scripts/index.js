// создаем функцию фиксирования хедера при сколее
function headerFixed(){
    const menuDesctop = document.querySelector('.menu-desctop');
    const menuMobile = document.querySelector('.menu-mobile');
    const btnTop = document.querySelector('.btn-top')
   window.onscroll = () =>{
    const logo = menuDesctop.querySelector('.logo img');
        if(window.scrollY > 42){
            menuDesctop.classList.add('header-fixed');
            menuMobile.classList.add('header-fixed');
            logo.src = '../images/logo.webp';
        }else{
            logo.src = '../images/logo-white.webp'
            menuMobile.classList.remove('header-fixed');
            menuDesctop.classList.remove('header-fixed');
        };
        if(window.scrollY > 470){
            btnTop.classList.add('active');
        }else{
            btnTop.classList.remove('active');
        };
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
            vimeoPlay.style.backgroundImage = 'url(../images/bg-vimeo.jpg)'
            }
        };
       
    }
    init();
  }
controlVimeoVideo();
//функциия которая при ховере отображает нужные title
function hoverTitle(){
    const titles = {
        1:'"The most expensive and critically-acclaimed coffee in America, maybe the world."',
        2:'"After the first three sips, I was one-hundred percent sure it was the best coffee I\'d ever tasted"',
        3:'"Port of Mokha Coffee Is Worth Every Penny."',
        4:'"Connoisseurs will note hints of dried strawberry, coffee blossom and crystallin."',
        5:'"Caffeine enthusiasts rejoice."'
    }
    const title = document.querySelector('.partners-title');
    const logos = document.querySelectorAll('.partners-flex img');
    for (let i = 0; i < logos.length; i++) {
        const logo = logos[i];
        let num = logo.getAttribute('data-number');
        logo.onmousemove = () => {
            title.textContent = titles[num];
        }
    }
};
hoverTitle();

function changeTitleCoffeePage(buttons,titleBlock){
    const btns = document.querySelectorAll(buttons);
    const title = document.querySelector(titleBlock);
    const titles = {
        '1':'',
        '2':'Gift a unique coffee experience of some of the highest-rated coffee in the world. Guaranteed to impress the biggest coffee enthusiasts.',
        '3':'Great coffee you can rely on every month. Choose between subscriptions that delivery rotating monthly flavors or for those who want to enjoy the same great cup every month.',
    };
    for(let i = 0;i<btns.length;i++){
        let btn = btns[i].querySelector('button').textContent;
        btns[i].onclick = () => {
             title.querySelector('.head-page-title').innerHTML = 'GIFTS';
             if(btn == '1'){
                title.style.backgroundImage = 'url(../images/shop-bg-head.webp)'
                title.innerHTML = 
             `
             <div class="head-page-title">GIFTS</div>
             <p>${titles[btn]}</p>`;
             title.innerHTML = 
             `
             <div class="head-page-title">All products</div>`;
             }else if(btn == '2'){
                title.style.backgroundImage = 'url(../images/shop-bg-2.webp)'
                title.innerHTML = 
             `
             <div class="head-page-title">GIFTS</div>
             <p>${titles[btn]}</p>`;
             }else{
                title.innerHTML = 
                `
                <div class="head-page-title">SUBSCRIPTIONS</div>
                <p>${titles[btn]}</p>`;
             }
        }
       
    }
}
changeTitleCoffeePage('.slider-products .slick-dots li','.shop')