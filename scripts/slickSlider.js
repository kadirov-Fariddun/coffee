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
      })
})();