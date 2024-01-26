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
function hoverTitle(parentBlock,titleBlock){
    const titles = {
        1:'"The most expensive and critically-acclaimed coffee in America, maybe the world."',
        2:'"After the first three sips, I was one-hundred percent sure it was the best coffee I\'d ever tasted"',
        3:'"Port of Mokha Coffee Is Worth Every Penny."',
        4:'"Connoisseurs will note hints of dried strawberry, coffee blossom and crystallin."',
        5:'"Caffeine enthusiasts rejoice."'
    }
    const title = document.querySelector(`${titleBlock}`);
    const logos = document.querySelectorAll(`${parentBlock} img`);
    for (let i = 0; i < logos.length; i++) {
        const logo = logos[i];
        let num = logo.getAttribute('data-number');
        logo.onmousemove = () => {
            title.textContent = titles[num];
        };
        console.log(logo);
    }
};
hoverTitle('.partners-flex','.partners-title');


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


function viewCard(){
const eyes = document.querySelectorAll('.card-eye');
// ловим события клик по определенной карточке
const text = {
    'THEYEMENTRILOGY':
    `PLEASE NOTE, DUE TO SEASONAL SHIPPING DELAYS 
    ﻿ALL ORDERS MADE AFTER DECEMBER 
    13th WE CAN NOT GUARANTEE DELIVERY IN TIME FOR THE HOLIDAYS 
    The Trilogy Box includes three 4oz bags...`,

    'AL-DURRAR-SINGLEFARMERMICROLOTBOX':
    ` PLEASE NOTE, DUE TO SEASONAL SHIPPING DELAYS ﻿ALL ORDERS MADE AFTER DECEMBER 13th WE CAN NOT GUARANTEE 
    DELIVERY IN TIME FOR THE HOLIDAYS Al Durrar’s bright, fruit-forward flavors shine like...`,

    'MOKHAMONTHLYSUBSCRIPTION':
    `To say that the Yemeni people are hospitable is an understatement. 
    Upon entering a village in the Al-Jabal region, it is customary to be greeted with the playing of drums...`,

    'KINTOESPRESSOGLASS80ML':
    `Whether you’re raising coffee from seed to harvest, roasting a new varietal, 
    or preparing your morning cup —
     small touches make a big difference. When you’re savoring the finer points...`,

    'KINTOCOFFEEGLASS250ML':
    `Incredible coffee deserves an incredible glass. The Kinto Coffee Glass maintains your 
    coffee’s heat and offers the ideal tactile experience to accompany your coffee.`,

    'ALDURRAR&KINTOGLASSES(SETOF2GLASSES)'
    :
    `The Coffee:Al Durrar’s bright, fruit-forward flavors shine like gems.
     Running alongside those bands of tropical sweetness are rich, 
    earthy flavors of dark chocolate. This coffee represents a trophy of Yemeni...`,

    'PORTOFMOKHADIGITALGIFTCARD':
    `This gift card can unlock everything Port of Mokha has to offer, from stunning small-batch coffee, 
    to delicious chocolate covered espresso beans, to the gear you need to brew a...`


}
for(let i = 0; i < eyes.length; i++){
    const eye = eyes[i];
    const infoCard = {
        title:'',
        price:'',
        text:'',
        href:'',
        src:'',
    }
    
    eye.onclick = () => {
        console.log(eye.parentNode);
        const title = eye.parentNode.querySelector('.card-title').textContent.trim(); 
        const price = eye.parentNode.querySelector('.card-price').textContent.trim(); 
        const src = eye.parentNode.querySelector('.card-image a img').src; 
        const href = eye.parentNode.querySelector('.card-image a').href; 
        infoCard.title = title;
        infoCard.price = price;
        infoCard.src = src;
        infoCard.href = href;
        infoCard.text = text[infoCard.title.replaceAll(' ','').toUpperCase()];
       document.querySelector('.view-card').classList.add('view-card-show');
       document.querySelector('.view-card-image img').src = infoCard.src;
       document.querySelector('.view-card-title').textContent = infoCard.title;
       document.querySelector('.view-card-price').textContent = infoCard.price;
       document.querySelector('.view-card-text').textContent = infoCard.text;
       document.querySelector('.view-card-btn').href = infoCard.href;
       setTimeout(()=>{
        document.querySelector('.view-card .loader').style.display = 'none';
        document.querySelector('.view-card .view-card-wrapp').style.display = 'flex';
       },1000)
    }
};
const closeBtn = document.querySelector('.close-view-card');
closeBtn.onclick = () => {
    document.querySelector('.view-card').classList.remove('view-card-show');
    document.querySelector('.view-card .loader').style.display = 'block';
    document.querySelector('.view-card .view-card-wrapp').style.display = 'none';
}
};
viewCard();

