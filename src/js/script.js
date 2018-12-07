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



        $('.menu').on('click', '.menu-btn-1', function (e) {
            e.preventDefault()
            $(this).parent().children('.mobile-menu-1').slideToggle(300);
        })

        $('.mobile-menu').hide()

        
        $('.menu').on('click', '.dekstop-menu', function (e) {
            e.preventDefault()
            $(this).parent().children('.mobile-menu').slideToggle(300);
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
        })

        $('.pay').on('click', function (e){
            e.preventDefault()
            $('.header-pay').slideToggle(300)
            $('.header-like').slideUp(0)
            $('.header-user').slideUp(0)
        })

        $('.user').on('click', function (e){
            e.preventDefault()
            $('.header-user').slideToggle(300)
            $('.header-like').slideUp(0)
            $('.header-pay').slideUp(0)
        })

        $('label').on('click', function (){
            $(this).toggleClass('active')
        })


        // $('.select-filter').select2({
            
        // })

        $('.select-filter').select2({
            dropdownCssClass: 'select-two',
            minimumResultsForSearch: -1
        });
        $('.js-example-basic-single').select2({
  
        });

    })

    //=require partials/plugins.js
})(jQuery)