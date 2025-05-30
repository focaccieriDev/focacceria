$(document).ready(function () {
  /* show lightbox when clicking a thumbnail */
  $('.fp-info').click(function (event) {
    event.preventDefault();
    var content = $('.modal-body');
    content.empty();
    // console.log ((this).find('img'))
    var title = $(this).find('img').attr("data-title");
      var subtitle = $(this).find('h3 small').html();
    var description = $(this).find('img').attr("data-description");
        var image = $(this).find('img').attr("src");

    // console.log(title)

    // content.html($(this).html());

        $('.modal-title').html('<h2>' + title + '</h2><span style="margin-left:10px;font-size:16px">' + subtitle + '</span>');
        $('.modal-body').html('<img src="' + image + '"/><p style="background-color: #ffffff3b;font-size:20px">' + description + '</p>');
    // $('.modal-body p').html(description);
    // console.log(description)  	


    $(".modal-profile").modal({ show: true });
  });

});