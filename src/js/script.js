(function ($) {
    'use strict'

    $(document).ready(function () {
        svg4everybody({})

        var HomeHead = new Swiper ('.swiper-container-head', {
            slidesPerView: 'auto',
            loop: true,
            pagination: {
              el: '.swiper-pagination-head',
              clickable: true
            },
            autoplay: {
                delay: 3000,
            },
            speed: 1000
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

        $('.home-content__head-mobile button').on('click', function(e){
            e.preventDefault()
            $(this).toggleClass('active')
            $('.swiper-slide-inner').slideToggle(300)
        })

        $('.footer-mobile button').on('click', function(e){
            e.preventDefault()
            $(this).toggleClass('active')
            $('.footer__block_second').slideToggle(300)
            $('.footer__block_last ul').slideToggle(300)
        })

        $('.header__mobile-menu').on('click', function(e){
            e.preventDefault()
            $(this).toggleClass('active')
            $('.header__wrapper').toggleClass('show')
        })

        $("#home-validate").validate({
            rules: {
                mail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                mail:  {
                    required: ' ',
                    email: ' '
                }
            }
        })

        $('.home-content__head-mobile button').on('click', function (e) {
            e.preventDefault()
            $('.home-content__head-mobile button span').toggle()
        })


        
        $('.menu-btn').on('click', function (e) {
            e.preventDefault()
            $('.mobile-menu').slideToggle(300)
        })

        $('.menu-btn-1').on('click', function (e) {
            e.preventDefault()
            $('.mobile-menu-1').slideToggle(300)
        })
    })

    //=require partials/plugins.js
})(jQuery)