(function ($) {
    "use strict";

    $(document).ready(function () {
        $('#status').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({ 'overflow': 'visible' });

        $('#nav-slide').on('show.bs.collapse', function () {
            $(this).hide(0);
            $('#nav-slider').animate({ 'left': '-76px' }, 'slow');
            $(this).show('slow');
            $('#navbar-toggle > span').removeClass('fa-bars');
            $('#navbar-toggle > span').addClass('fa-times');
        });
        $('#nav-slide').on('hide.bs.collapse', function () {
            $(this).show(0);
            $('#nav-slider').animate({ 'left': '0px' }, 'slow');
            $(this).hide('slow');
            $('#navbar-toggle > span').removeClass('fa-times');
            $('#navbar-toggle > span').addClass('fa-bars');
        });

        // $('.twitterfeed').tweet({
        //     modpath: 'assets/twitter/',
        //     count: tweets_count,
        //     username: twitter_username,
        //     loading_text: 'loading twitter feed...',
        //     template: "{join}{text}{time}",
        //     retweets: true
        // });

        init_scrollToTop();

        __init();
    });

    var nt_title = $('#nt-title').newsTicker({
        row_height: 40,
        max_rows: 1,
        duration: 3000,
        pauseOnHover: 0
    });

    $(window).resize(function () {
        __init();
    });

    function __init() {
        $('#nav-slider').css({ 'left': '0px' });
        $('#nav-slide').removeClass('in');
        $('#nav-slide').hide(0);

        if (!$.browser.mobile) {
            $('#nav-slide li').tooltip();
        }
        if (!$.browser.mobile) {
            $('html').niceScroll({ scrollspeed: 200 });
        }

        // var progress_label = $('<span></span>').html(progress_status + ' Complete');
        // $('#progress-status').html(progress_label);
        // $('#progress-status').width(progress_status);

        // $('#counter').countdown({
        //     finalDate: countdown_timer
        // });

        // $('.skill > .progress > .progress-bar').each(function () {
        //     $(this).css({ width: $(this).data('value') + '%' });
        //     $(this).html('<span>' + $(this).data('value') + '%</span>');
        // });


        window.setHeight();

        new WOW().init();

        init_smoothScroll();

        // loadTwitterSlider();

        // init_gmaps();

        if (!$.browser.mobile) {
            $('#header-panel').parallax("50%", 0.6);
            $('#subscribe-panel').parallax("50%", 0.6);
            $('#why-us-panel').parallax("50%", 0.4);
            $('#expositor-panel').parallax("50%", 0.4);
            $('#where-panel').parallax("50%", 0.4);
            $('#cta-panel').parallax("50%", 0.4);
            $('#services-panel').parallax("50%", 0.4);
        } else {
            $('#header-panel').css({ 'background-attachment': 'scroll' });
            $('#subscribe-panel').css({ 'background-attachment': 'scroll' });
            $('#why-us-panel').css({ 'background-attachment': 'scroll' });
            $('#cta-panel').css({ 'background-attachment': 'scroll' });
            $('#where-panel').css({ 'background-attachment': 'scroll' });
            $('#expositor-panel').css({ 'background-attachment': 'scroll' });
            $('#services-panel').css({ 'background-attachment': 'scroll' });
        }

        if (show_slider) {
            hide_bgs();
            load_bgslider();
        }
        else {
            hide_supersized();
        }

        if (!$.browser.mobile) {
            if (isHtmlVideo) {
                var BV = new $.BigVideo();
                BV.init();
                BV.show(html_video_url, { ambient: true });
            }

            if (isYoutubeVideo) {
                load_bgvideo();
            }
        }
        else {
            show_fixedbg = true;
        }

        if (!show_fixedbg) {
            hide_bgs();
        }
    }

    function init_scrollToTop() {
        $('body').append('<a href="#top" class="scrollup"><span class="fa fa-angle-up"></span></a>');

        $(window).scroll(function () {
            var scroll = 600;
            if ($(this).scrollTop() > scroll) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        $('.scrollup').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    }

    window.setHeight = function () {
        var headerHeight = $('#header > .pattern-dark-1').height();
        var subscribeHeight = $('#subscribe > .pattern-dark').height()
        var aboutHeight = $('#why-us > .pattern-dark').height()
        var ctaHeight = $('#cta > .pattern-dark').height()
        var whereHeight = $('#where > .pattern-dark').height()

        var expositorHeight = $('#expositor > .pattern-dark').height()
        var servicesHeight = $('#services > .pattern-dark').height()
        var contactHeight = $('#contact > .pattern-dark').height()
        var windowHeight = $(window).height();

        var setPadding = windowHeight > headerHeight ? (windowHeight - headerHeight) / 2 : 0;
        $('#header > .pattern-dark-1').css({ 'padding': setPadding + 'px 0' });
        setPadding = windowHeight > subscribeHeight ? (windowHeight - subscribeHeight) / 2 : 0;
        $('#subscribe > .pattern-dark').css({ 'padding': setPadding + 'px 0' });
        setPadding = windowHeight > aboutHeight ? (windowHeight - aboutHeight) / 2 : 0;
        $('#why-us > .pattern-dark').css({ 'padding': setPadding + 'px 0' });
        setPadding = windowHeight > ctaHeight ? (windowHeight - ctaHeight) / 2 : 0;
        $('#cta > .pattern-dark').css({ 'padding': setPadding + 'px 0' });

        setPadding = windowHeight > whereHeight ? (windowHeight - whereHeight) / 2 : 0;
        $('#where > .pattern-dark').css({ 'padding': setPadding + 'px 0' });

        setPadding = windowHeight > expositorHeight ? (windowHeight - expositorHeight) / 2 : 0;
        $('#expositor > .pattern-dark').css({ 'padding': setPadding + 'px 0' });
        setPadding = windowHeight > servicesHeight ? (windowHeight - servicesHeight) / 2 : 0;
        $('#services > .pattern-dark').css({ 'padding': setPadding + 'px 0' });
        setPadding = windowHeight > contactHeight ? (windowHeight - contactHeight) / 2 : 0;
        $('#contact > .pattern-dark').css({ 'padding': setPadding + 'px 0' });
    }

    function loadTwitterSlider() {
        $('.twitterfeed').flexslider({
            selector: ".slides > li",
            animation: "slide",
            easing: "easeInBack",
            useCSS: false,
            directionNav: false,
            slideshowSpeed: 2000,
            pauseOnHover: true,
            direction: "vertical"
        });
    }

    function init_smoothScroll() {
        $('#nav-slide li a').smoothScroll({
            speed: 2000,
            easing: 'swing'
        });
    }

    function hide_bgs() {
        $('#header-panel, #subscribe-panel, #why-us-panel, #expositor-panel, #cta-panel, #where-panel, #services-panel').css({ 'background': 'none' });
    }

    function hide_supersized() {
        $('#progress-back').hide();
        $('#supersized-loader').hide();
        $('#supersized').hide();
    }

    function load_bgslider() {
        $('#progress-back').show();
        $('#supersized-loader').show();
        $('#supersized').show();
        $('#supersized').remove();
        $('body').append('<ul id="supersized"></ul>');
        $.supersized({
            slide_interval: 10000,
            transition: 1,
            transition_speed: 1000,
            slide_links: 'blank',
            slides: slides_array
        });
    }

    function extract_youtubeID(url) {
        var youtube_id;
        youtube_id = url.replace(/^[^v]+v.(.{11}).*/, "$1");
        return youtube_id;
    }

    function load_bgvideo() {
        $('#bg-video').mb_YTPlayer({
            videoURL: youtube_video_url,
            containment: 'body',
            mute: true,
            showControls: false,
            loop: true,
            autoplay: true,
            showYTLogo: false,
            realfullscreen: true
        });
    }

    // function init_gmaps() {
    //     $('.map-canvas').each(function () {
    //         var $this = $(this);
    //         var gmapId = 'gmap_' + $.now() + 1;
    //         $this.attr('id', gmapId);
    //         var lat = $this.data('latitude');
    //         var lng = $this.data('longitude');
    //         var zoom = $this.data('zoom');
    //         var shade = $this.data('shade');
    //         var icon = $this.data('marker');
    //         var saturation = $this.data('saturation');
    //         var map_info = $this.parent().find('.map-info').html();

    //         var myLatlng = new google.maps.LatLng(lat, lng);
    //         var mapOptions = {
    //             zoom: zoom,
    //             center: myLatlng,
    //             mapTypeControlOptions: {
    //                 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    //             },
    //             scrollwheel: false,
    //             disableDefaultUI: true,
    //             draggable: false
    //         };

    //         var styles = [
    //             {
    //                 stylers: [
    //                     { hue: shade },
    //                     { saturation: saturation }
    //                 ]
    //             }, {
    //                 featureType: "road",
    //                 elementType: "geometry",
    //                 stylers: [
    //                     { lightness: 100 },
    //                     { visibility: "on" }
    //                 ]
    //             }, {
    //                 featureType: "road",
    //                 elementType: "labels",
    //                 stylers: [
    //                     { visibility: "off" }
    //                 ]
    //             }
    //         ];

    //         var marker = new google.maps.Marker({
    //             position: myLatlng,
    //             animation: google.maps.Animation.DROP,
    //             icon: icon
    //         });

    //         var map = new google.maps.Map(document.getElementById(gmapId), mapOptions);
    //         map.setOptions({ styles: styles });

    //         marker.setMap(map);

    //         document.getElementById(gmapId).addEventListener("touchstart", thisTouchStart, true);
    //         document.getElementById(gmapId).addEventListener("touchend", thisTouchEnd, true);
    //         document.getElementById(gmapId).addEventListener("touchmove", thisTouchMove, true);
    //     });
    // }

    var dragFlag = false;
    var start = 0, end = 0;

    function thisTouchStart(e) {
        dragFlag = true;
        start = e.touches[0].pageY;
    }

    function thisTouchEnd() {
        dragFlag = false;
    }

    function thisTouchMove(e) {
        if (!dragFlag) return;
        end = e.touches[0].pageY;
        window.scrollBy(0, (start - end));
    }
})(jQuery);