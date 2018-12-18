(function ($) {
    'use strict'

    $(document).ready(function () {
        svg4everybody({})

        $('.home-content__head-like').on('click', function(e){
            e.preventDefault()
            $(this).toggleClass('active')
        })

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
        var HomeBottom = new Swiper ('.swiper-container-recomendation', {
           
            slidesPerView: 'auto',
            dynamicMainBullets: 3,
            slidesPerView: 3,
            pagination: {
              el: '.swiper-pagination-bottom',
              clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1180: {
                  slidesPerView: 2
                }
            },    
        })
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

        $("#register-validate").validate({
            rules: {
                name: {
                    required: true
                },
                password: {
                    required: true
                },
                password2: {
                    required: true
                },
                number: {
                    required: true,
                    number: true
                },
                mail: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:  {
                    required: ' '
                },
                password:  {
                    required: ' '
                },
                password2:  {
                    required: ' '
                },
                number:  {
                    required: ' ',
                    number: ' '
                },
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

        $('.menu').on('click', '.menu-btn', function (e) {
            e.preventDefault()
            $(this).parent().children('.mobile-menu').slideToggle(300);
        })


        $('.list__item').on('click', '.row-link__arrow', function () {
            $(this).parent().find('.hide').fadeToggle(200);
            $(this).parent().find('.row-link__arrow').toggleClass('active');
        })


        $('.favorites-info').on('click', '.close', function () {
            $(this).parent().parent().fadeOut(200);
        })


        $('.menu').on('click', '.menu-btn-1', function (e) {
            e.preventDefault()
            $(this).parent().children('.mobile-menu-1').slideToggle(300);
        })

        // $(document).on('mouseup', function (e){ 
        //     var div = $(".pay"); 
        //     if (!div.is(e.target) && div.has(e.target).length === 0) { 
        //       $(".header-pay").slideUp(300); 
        //     }
        // })
        $(document).on('mouseup', function (e){ 
            var div = $(".header__interface-items"); 
            if (!div.is(e.target) && div.has(e.target).length === 0) { 
              $(".header-pay").slideUp(300); 
            }
        })
        $(document).on('mouseup', function (e){ 
            var div = $(".header__interface-items"); 
            if (!div.is(e.target) && div.has(e.target).length === 0) { 
              $(".header-user").slideUp(300); 
            }
        })
        $(document).on('mouseup', function (e){ 
            var div = $(".header__interface-items"); 
            if (!div.is(e.target) && div.has(e.target).length === 0) { 
              $(".header-like").slideUp(300); 
              $(".header__interface-item").remoteClass('active')
            }
        })

        $('.home__head').on('click', function(){
            $(".header-like").slideUp(300); 
            $(".header-user").slideUp(300); 
            $(".header-pay").slideUp(300); 
        })

        $('.product-filter').on('click', '.product-filter__name', function () {
            $(this).parent().children('.product-filter__block-repeat').slideToggle(300);
            $(this).parent().children('.product-filter__name').toggleClass('active')
        })


        $('.mobile-filter').on('click', function () {
            $('.product-filter__repeat').slideDown(300)
        })

        $('.mobile-filter__close').on('click', function () {
            $('.product-filter__repeat').slideUp(300)
        })

        $('.like').on('click', function (){
            $('.header-like').slideToggle(300)
            $('.header-pay').slideUp(0)
            $('.header-user').slideUp(0)
            $(this).toggleClass('active')
        })

        $('.pay').on('click', function (e){
            e.preventDefault()
            $('.header-pay').slideToggle(300)
            $('.header-like').slideUp(0)
            $('.header-user').slideUp(0)
            $(this).toggleClass('active')
        })

        $('.user').on('click', function (e){
            e.preventDefault()
            $('.header-user').slideToggle(300)
            $('.header-like').slideUp(0)
            $('.header-pay').slideUp(0)
            $(this).toggleClass('active')
        })

        $('.btn-gen_1').on('click', function (e){
            e.preventDefault()
            $('.modal-name').fadeIn(500)
        })
        $('.circle').on('click', function (e){
            e.preventDefault()
            $('.modal-name').fadeOut(500)
        })
        // $('.palitre').on('hover', function () {
        //     $('.hint-palitre').fadeToggle(500);
        // })

        $('label').on('click', function (){
            $(this).toggleClass('active')
        })

        $('.select-personal').select2({
            dropdownCssClass: 'select-dropdown',
            minimumResultsForSearch: -1
        })

        $('.select-filter').select2({
            dropdownCssClass: 'select-two',
            minimumResultsForSearch: -1
        })

        $('.select-basket').select2({
            dropdownCssClass: 'select-basket-dropdown',
        });

    })

    //=require partials/plugins.js
})(jQuery)