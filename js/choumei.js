// JavaScript Document
	$(function(){
    var mySwiper = new Swiper('.swiper-container',{
       slidesPerView : 'auto',
       centeredSlides : true,
       watchSlidesProgress: true,
       initialSlide:1,//用来设定页面加载完成时，第几张图片先显示出来
       paginationClickable: true,

       onProgress: function(swiper){
           for (var i = 0; i < swiper.slides.length; i++){
             var slide = swiper.slides[i];
             var progress = slide.progress;
         // scale = 1 - Math.min(Math.abs(progress * 0.5), 1);

            es = slide.style;
        es.opacity = 1 - Math.min(Math.abs(progress/5),1);
           es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0px,0,'+(-Math.abs(progress*150))+'px)';

           }
         },

        onSetTransition: function(swiper, speed) {
           for (var i = 0; i < swiper.slides.length; i++) {
           es = swiper.slides[i].style;
           es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';
       }

         }
     });
 )};
