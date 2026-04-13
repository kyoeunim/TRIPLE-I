$(function(){

  //porfolio
  const pf_list = new Swiper(".pf_list", {
       autoplay: {
        delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
        loop: true,
        breakpoints: {
            340: {
            // 가로해상도가 375px 이상
            slidesPerView: 1,
            spaceBetween: 20,
            },
            440: {
            // 가로해상도가 375px 이상
            slidesPerView: 2,
            spaceBetween: 20,
            },
            660: {
            // 가로해상도가 640px 이상
             slidesPerView: 3,
            spaceBetween: 40,
            },
            1024:{
            slidesPerView: 3,
            spaceBetween: 50,
            },
          },
  });
    const search_list = new Swiper(".search_list", {
       autoplay: {
        delay: 5000, // 슬라이드가 머무르는 시간, 5000=5초
        disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
        },
        speed: 1000, // 슬라이드 동작 속도
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
            spaceBetween: 0,
            },
            1200:{
            slidesPerView: 2,
            spaceBetween: 40,
            },
          },
  });
    //service
  $("a[href^='#']").click(function (event) {
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
  });
  $(".btn_list li .btn_more").click(function () {
    $(this).addClass("on");
    $(this).parent().siblings().find(".btn_more").removeClass("on");
    let idx = $(this).parent().index();
    $("#service_con > li").eq(idx).fadeIn().siblings().hide();
  });

    //contact_QandA
  $(".answer").hide(); // 초기에는 모두 숨김

  // 질문 버튼 클릭 시 답변 슬라이드 다운
  $(".question li").on("click", function () {
    $(this).find(".answer").slideDown();
    $(this).siblings().find(".answer").slideUp();
  });
});