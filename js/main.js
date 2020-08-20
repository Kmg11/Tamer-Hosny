/// <reference types="jquery" />
$(function () {
    // Navbar
    let navBtn = $(".nav-btn");
    let navContent = $(".nav-content");

    // Open Nav Bar
    navBtn.on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("show");
        navContent.toggleClass("show");
    });

    // Close Navbar When Click Anywhere
    $(document).on("click", function (e) {
        if (navBtn.hasClass("show") && navContent.hasClass("show")) {
            if (e.target !== navBtn && e.target !== navContent) {
                navBtn.removeClass("show");
                navContent.removeClass("show");
            }
        }
    });

    // Stop Propagation For Nav Button & Nav Content
    navContent.click(function (e) {
        e.stopPropagation();
    })

    // Close Navbar When Click On Esc Key
    $(document).keydown(function (e) {
        if (navBtn.hasClass("show") && navContent.hasClass("show")) {
            if (e.keyCode === 27) {
                navBtn.removeClass("show");
                navContent.removeClass("show");
            }
        }
    });

    // Smothe Scroll
    $("nav ul li:not(:first-of-type)").click(function () {
        $('html, body').animate({
            scrollTop: $($(this).data("scroll")).offset().top
        }, 1000);
    });

    $("header .info button").click(function () {
        $("html, body").animate({
            scrollTop: $(".listen").offset().top
        }, 1000);
    });

    // Albums Section
    $(".albums div").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".player .music h2, .our-player h2").text($(this).text());
    });

    $(".player .music div").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    $(".player .music div > span").click(function () {
        $(".player .music h2, .our-player h2").text($(this).text());
    });

    function setActiveSong(target) {
        $('.player .music div').removeClass('active');
        target.addClass('active');
    }

    $('.albums div').on('click', function () {
        var target = $(this).data('name');
        setActiveSong($('.' + target));
    });

    function setActiveAlbum(target) {
        $('.albums div').removeClass('active');
        target.addClass('active');
    }

    $('.player .music div').on('click', function () {
        var target = $(this).data('name');
        setActiveAlbum($('.' + target));
    });

    // Run Nice Scroll
    $("body, html").niceScroll({
        cursorcolor: '#e000dc',
        cursorwidth: "8px",
        cursorborderradius: 0,
        cursorborder: '1px solid #e000dc',
        scrollspeed: "30",
        touchbehavior: true
    });
});
