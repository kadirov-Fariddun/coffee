	$('.press-logo').on("mouseover", function () {
		var content = '<p><q>' + $(this).data("content") + '</q></p>';
	 	$('.press-wrapper .press-content p').replaceWith(content);
    });

	$('.slick-hero').slick({
      infinite: false,
      draggable :false,
      fade: true,
      touchMove:false,
      autoplay: false,
      speed: 1,
      slidesToShow: 1,
      useCSS:false
    });

   $('.slider_wrap').slick({
      infinite: true,
      fade: true,
      cssEase: 'linear',
      speed: 500,
      slidesToShow: 1
    });

	$('input[type=submit][name=checkout]').attr('disabled', false);

	$('.story-method-subsections').slick({
      arrows:false,
      draggable:false
    });

	$(".products-carousel").on('afterChange', function(event, slick, currentSlide) {
      	console.log(currentSlide);
      	var slide= currentSlide + 1;
      	$('.carousel-type[data-slide="'+slide+'"]').addClass('current').siblings().removeClass('current');
      	
	
    });

	$('.products-carousel').slick({
      arrows:false,
      draggable:true,
      adaptiveHeight: true
    });
	
	
  function InitSlider(){
    	const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const collection = urlParams.get('collection')
        if(collection){
          var slide = $('.carousel-type[data-collection="'+collection+'"]');
          var index = $(slide).data('slide');
          if(index){
             	slide.addClass('current').siblings().removeClass('current');
          		 $('.products-carousel').slick('slickGoTo', index - 1);
            	$('.slick-hero').slick('slickGoTo', index - 1);
          }
         
        }

  }
	InitSlider();


   $('.story-carousel-slides').slick({
      infinite: true
    });

	$('.story-method-step').click(function(e) {
     e.preventDefault();
     var slideno = $(this).data('slide');
     $(this).addClass("current").siblings().removeClass('current');
     $('.story-method-subsections').slick('slickGoTo', slideno - 1);
   	});

	$('.carousel-type').click(function(e) {
     e.preventDefault();
     var typeno = $(this).data('slide');
     $(this).addClass("current").siblings().removeClass('current');
     $('.products-carousel').slick('slickGoTo', typeno - 1);
      $('.slick-hero').slick('slickGoTo', typeno - 1);
   	});

	

	
	
	var images = document.getElementsByClassName('parallax');
    new simpleParallax(images, {
    
        scale: 1.3,
      	overflow: true
        
    });

    $(".product-info-frequency-option").click(function() {
        var t =  $('.tt-product-single-info .tt-price').data( "price" );
        console.log(t);
        var L = $(this).data("id");
       console.log(L );
        $(this).hasClass("selected") || ($(".product-info-frequency-option").removeClass("selected"), 
                                        $(this).addClass("selected"),  
                                         $(".product-info-frequency").attr("data-id", L), 

                                         $(".new-price").text("$" + t * (4 / L)  + " / Month")
                                        )
        $('.rc_select__frequency').val(L);
    })
    
    


var n;
MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), 
IPHONE = /iPhone|iPad|iPod/i.test(navigator.userAgent), ANDROID = /Android/i.test(navigator.userAgent),
SHARE_URL = window.location.href, FIREFOX = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, TABLET = $(window).width() <= 1024, VIMEO_ID = "250094253";

$("#vimeo-player").length && $(".module-video").each(function(e, s) {
      vimeoId = $(s).find(".module-video-player").data("vimeoId"), height = $(s).find(".module-video-player").data("height"), 
      $cover = $(s).find(".module-video-cover"), autoplay = false, 
      n = new Vimeo.Player("vimeo-player", {
          id: vimeoId,
          title: false,
          background: !MOBILE,
          byline: false,
          autoplay: autoplay,
          playsinline: false,
          loop: !1
      }), !autoplay || MOBILE ? (n.pause(), n.setVolume(0)) : (n.play(), n.setVolume(.8)), 
      
      $cover.click(function() {
          
          n.getPaused().then(function(e) {
            console.log(e);
             
              e ? n.play() : n.pause();
          });
          
      }), l = !1, n.on("pause", function() {
          	$cover.removeClass("play").addClass("pause");
          	$cover.removeClass("hide");
      }), n.on("ended", function() {
          i = !0, n.pause(), $cover.removeClass("play").removeClass("hide").addClass("pause");
      }), n.on("play", function() {
        	console.log('on play');
          n.setVolume(.8);
          $cover.addClass("hide").removeClass("pause").addClass("play");
      }), n.on("timeupdate", function(e) {
     
//           autoplay || l || n.pause(), e.percent > 0 && (l = !0, $cover.addClass("hide").removeClass("pause").addClass("play")), 
//           e.percent >= .99 && (i = !0, n.pause(), $cover.removeClass("play").removeClass("hide").addClass("pause"));
      }), MOBILE && $cover.addClass("mobile");
  });

$(window).scroll(function() {
   
  	if ($(".module-videos").is(':visible')){
        if ($('.module-videos').visible() && !FIREFOX) {
          n.play();
         }else{
            n.pause();
         }

    }
  
   
      if ($('.scroll-opacity').visible()) {
        
      	$(".scroll-opacity").find('.section-appear').addClass("opc");
      }
      else{
      	$(".scroll-opacity").find('.section-appear').removeClass("opc");
      }
  
  	
  	if ($('.scroll-opacity2').visible()) {
        
      	$(".scroll-opacity2").find('.section-appear').addClass("opc");
      }
      else{
      	$(".scroll-opacity2").find('.section-appear').removeClass("opc");
      }
  
  if ($('.scroll-opacity3').visible()) {
        
      	$(".scroll-opacity3").find('.section-appear').addClass("opc");
      }
      else{
      	$(".scroll-opacity3").find('.section-appear').removeClass("opc");
      }
        	
		
    
  	


    
});

