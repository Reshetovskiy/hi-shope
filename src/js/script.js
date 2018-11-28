(function ($) {
    'use strict'

    $(document).ready(function () {
        svg4everybody({})

        var HomeHead = new Swiper ('.swiper-container-head', {
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination-head',
              clickable: true
            }
        })


        var HomeBottom = new Swiper ('.swiper-container-bottom', {
            slidesPerView: 'auto',
            dynamicMainBullets: 3,
            pagination: {
              el: '.swiper-pagination-bottom',
              clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next-bottom',
                prevEl: '.swiper-button-prev-bottom',
            }
        })

        var HomeMiddle = (".swiper-container-middle")
        function initSwiper() {
            var screenWidth = $(window).width();
            if(screenWidth > 768 && HomeMiddle == (".swiper-container-middle")) {            
                HomeMiddle = new Swiper ('.swiper-container-middle', {
                    slidesPerView: 'auto',
                    navigation: {
                        nextEl: '.swiper-button-next-middle',
                        prevEl: '.swiper-button-prev-middle',
                    }
                });
            } else if (screenWidth < 768 && HomeMiddle != (".swiper-container-middle")) {
                HomeMiddle.destroy();
                HomeMiddle = (".swiper-container-middle");
                jQuery('.swiper-wrapper').removeAttr('style');
                jQuery('.swiper-slide').removeAttr('style');            
            }        
        }
        initSwiper();
    })
})(jQuery)
//=require partials/google_page_speed.js