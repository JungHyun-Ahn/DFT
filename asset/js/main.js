function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

$(function(){
    if (window.location.hash) {
        const target = $(window.location.hash);
        if (target.length) {
            setTimeout(function () {
                ScrollTrigger.refresh();

                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        gsap.set(window, {
                            scrollTo: {
                                y: target,
                            }
                        });
                    });
                });
            }, 100);
        }
    }

    setScreenSize();
    let winWd = $(window).width();

    $(window).on('load', function () {setScreenSize();});
    $(window).on('resize', function() {
        setScreenSize();
        
        winWd = $(window).width();

        sect2Slide();
        sect3Slide();
        mainBtnPop();
    });

    
    function sect2Slide() {
        if(winWd < 768) {
            if(cont1Slide) {cont1Slide.destroy(true, true)}
            var cont1Slide = new Swiper(".sect3 .cont1 .swiper", {
                loop: true,
                slidesPerView: 'auto',
                pagination: {
                    el: '.sect3 .cont1 .swiper-pagination',
                    type: 'progressbar',
                },
                spaceBetween: 16,
            });
        }
    }
    
    function sect3Slide() {
        if(cont2Slide1) {cont2Slide1.destroy(true, true)}
        if(cont2Slide2) {cont2Slide2.destroy(true, true)}
        if(winWd < 768) {
            var cont2Slide2 = new Swiper(".sect3 .cont2 .swiper2", {
                loop: true,
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                pagination: {
                    el: '.sect3 .swiper2 .swiper-pagination',
                    type: 'progressbar',
                },
                spaceBetween: 16,
            });
        } else {
            var cont2Slide1 = new Swiper(".sect3 .cont2 .swiper1", {
                loop: true,
                slidesPerView: 'auto',
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                spaceBetween: 38,
                pagination: {
                    el: '.sect3 .swiper1-controls .swiper-pagination',
                    type: 'fraction',
                },
                navigation: {
                    nextEl: '.sect3 .swiper1-controls .swiper-button-next',
                    prevEl: '.sect3 .swiper1-controls .swiper-button-prev',
                },
            });
        }
    };
    
    function mainBtnPop() {
        if(winWd > 768) {
            $('.btn-popup').on('click', function() {
                $('#videoPopup').addClass('show');
            });
            $('#videoPopup .btn-close').on('click', function() {
                $('#videoPopup').removeClass('show');
            });
        }
    }
    
    mainBtnPop();
    sect2Slide();
    sect3Slide();
});