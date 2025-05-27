// set twitter username for tweets slider section
var twitter_username = 'gigagit';

// set tweets count
var tweets_count = 3;

var monthNames = [
  "Jan", "Feb", "Mar",
  "Apr", "May", "Jun", "Jul",
  "Aug", "Sep", "Oct",
  "Nov", "Dec"
];
var date = new Date().getTime() + (86400000 * 100);
var dt = new Date(date);
// set countdown timer date-time
// DD MMMM YYYY, hh:mm:ss 
// 25 March 2017, 19:00:00'
var countdown_timer = null; // <- set your date in place of null
if (countdown_timer == null) {
    countdown_timer = dt.getDate() + ' ' + monthNames[dt.getMonth()] + ' ' + dt.getFullYear() + ' 19:00:00';
}

// set progress status for your site
var progress_status = '70%';

// set any one of the following features to true/false
var show_slider = false;
var show_fixedbg = true;
var isHtmlVideo = false;
var isYoutubeVideo = false;

// add/remove the background slider images here
var slides_array = [
    { image: 'assets/slides/1.jpg' },
    { image: 'assets/slides/2.jpg' },
    { image: 'assets/slides/3.jpg' }
];

// set the youtube video URL
var youtube_video_url = 'http://www.youtube.com/watch?v=gQaDcIB43hI';
var html_video_url = 'http://vjs.zencdn.net/v/oceans.mp4';
var video_fallback_image = 'assets/images/1.jpg';

// show/hide the style switcher
var show_styleswitcher = true;