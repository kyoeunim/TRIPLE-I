$(function () {

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['Hero', 'Service', 'Strength', 'News room', 'Contact', 'footer'],
        showActiveTooltip: true,
        responsiveWidth: 1024,
        onLeave: function (origin, destination, direction, trigger) {

            if (destination == 2 || destination == 4) {
                $("#header, #fp-nav").addClass("active");
            } else {
                $("#header, #fp-nav").removeClass("active");
            }
            if (destination == 6) {
                $("#header, #fp-nav").fadeOut();
            } else {
                $("#header, #fp-nav").fadeIn();
            }
        },

    });

      //pop_up
    $(".footer_link > li:nth-child(1)").click(function () {
        $(".privacy").fadeIn();
    });
    $(".pop_close").click(function () {
        $(".privacy").fadeOut();
    });
    $(".footer_link > li:nth-child(2)").click(function () {
        $(".user").fadeIn();
    });
    $(".pop_close").click(function () {
        $(".user").fadeOut();
    });

    //ham_btn
    $(".ham").click(function () {
        $(".mgnb_wrap").fadeIn();
    });

    $(".close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });


});