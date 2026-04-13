$(function () {


    if ($(window).width() < 768) {
        $("#intro").show();
        $("#intro").css("z-index", "1");
        $("#fullpage").css("z-index", "5");
    } else {
        setTimeout(() => {
            $("#intro").fadeOut();
        }, 6000);

    }

    let mainIntro;

    $(window).resize(function () {
        if ($(window).width() < 768) {
            $("#intro").show();
            $("#intro").css("z-index", "1");
            $("#fullpage").css("z-index", "5");
        } else {
            clearTimeout(mainIntro);
            mainIntro = setTimeout(() => {
                $("#intro").fadeOut();
            }, 3000);
        }
    });

    $(".skip").click(function(){
        clearTimeout(mainIntro);
        $("#intro").fadeOut();
    })


    //service
    $(".service_img li:not(:first-child)").hide();
    $(".service_list li").click(function () {
        let idx = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".service_img li").eq(idx).fadeIn().siblings().fadeOut(0);
    });

    //hero_swiper
    const h_swiper = new Swiper(".h_swiper", {
        autoplay: {
            delay: 2500, // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        loop: true,
    });

    //service_swiper
    const service_swiper = new Swiper(".service_swiper", {
        autoplay: {
            delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
            disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
        centeredSlides: true,  // 첫번째 슬라이드 가운데 배치
        loop: true,
        breakpoints: {
            375: {
                // 가로해상도가 375px 이상
                slidesPerView: 1,
                spaceBetween: 20,
            },
            640: {
                // 가로해상도가 640px 이상
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar", // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
            clickable: true, // 버튼 클릭 여부
        },

    });





    //news
    const news_list = new Swiper(".news_list", {
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        speed: 1000,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next', // 다음 버튼
            prevEl: '.swiper-button-prev', // 이전 버튼
        },

        breakpoints: {
            930: {
                // 가로해상도가 640px 이상
                slidesPerView: 2, // 한 슬라이드에 보여줄 갯수
                spaceBetween: 50, // 슬라이드 사이 여백
            },
            1310: {
                // 가로해상도가 768px 이상
                slidesPerView: 3,
                spaceBetween: 40,
            },
        },
    });



    //partner
    const partner_list = new Swiper(".partner_list", {
        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            574: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 40,
            },
            1500: {
                slidesPerView: 8,
                spaceBetween: 50,
            },
        },
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 5000,
        loop: true,
    });


});