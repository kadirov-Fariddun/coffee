(()=>{
    $('.slider-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay:true,
        autoplaySpeed:3000,
      });
      $('.slider-products-track').slick({
        slidesToShow:1,
        dots:true,
      });
      $('.story-slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        fade:true,
        swipe: false,
        cssEase: 'ease-out', // Используем ease-out для плавного завершения анимации
        speed: 1000, // Скорость анимации в миллисекундах
        pauseOnHover:false,
      });
      $('.story-slider-info-wrapper').slick({
        dots:true,
        swipe:false,
        arrows:false
      })
       $('.story-slider-info-item-image').slick({
        arrows:false,
        swipe:true
       });
      
})();