(function ($) {
    "use strict";

    $(document).ready(function () {
        if (show_styleswitcher) {
            var render_styleswitcher = '<div id="style-switcher" class="push">\
    <div class="switcher-container">\
        <div class="rows">\
            <div class="btn-group-vertical styles" data-toggle="buttons">\
                <label class="btn btn-default" id="opt-fixedbg">\
                    <input type="radio" name="options" />\
                    <span class="fa fa-picture-o"></span>Fixed Background\
                </label>\
                <label class="btn btn-default" id="opt-slider">\
                    <input type="radio" name="options" />\
                    <span class="fa fa-desktop"></span>Slider\
                </label>\
                <label class="btn btn-default" id="opt-yt-video">\
                    <input type="radio" name="options" />\
                    <span class="fa fa-youtube-play"></span>Youtube Video\
                </label>\
                <label class="btn btn-default" id="opt-html-video">\
                    <input type="radio" name="options" />\
                    <span class="fa fa-video-camera"></span>HTML5 Video\
                </label>\
            </div>\
        </div>\
        <div class="clearfix"></div>\
        <a class="puller" href="#_"><i class="fa fa-cog"></i></a>\
    </div>\
    <div class="clearfix"></div>\
</div>';

            $('body').append(render_styleswitcher);

            $("#style-switcher .puller").click(function () {
                if ($("#style-switcher").hasClass("push")) {
                    $("#style-switcher").removeClass("push").addClass("pull");
                }
                else {
                    $("#style-switcher").removeClass("pull").addClass("push");
                }
            });

            $("#style-switcher #opt-slider").removeClass('active');
            $("#style-switcher #opt-fixedbg").removeClass('active');
            $("#style-switcher #opt-html-video").removeClass('active');
            $("#style-switcher #opt-yt-video").removeClass('active');
            if (show_slider) {
                $("#style-switcher #opt-slider").addClass('active');
            }
            else if (show_fixedbg) {
                $("#style-switcher #opt-fixedbg").addClass('active');
            }
            else if (isHtmlVideo) {
                $("#style-switcher #opt-html-video").addClass('active');
            }
            else if (isYoutubeVideo) {
                $("#style-switcher #opt-yt-video").addClass('active');
            }

            $("#style-switcher #opt-slider").click(function () {
                location.href = 'full-background-slider.html';
            });
            $("#style-switcher #opt-fixedbg").click(function () {
                location.href = 'fixed-background-image.html';
            });
            $("#style-switcher #opt-html-video").click(function () {
                location.href = 'html5-video-background.html';
            });
            $("#style-switcher #opt-yt-video").click(function () {
                location.href = 'youtube-video-background.html';
            });

        }
    });
})(jQuery);