$(document).ready(function () {
    // Hide the reply card when the page loads.
   
    $('#see-more').click(function () {
        $("#video-description").toggleClass("wrapped");
    });
    $("#reply-link").click(function () {
        $(this).parents("div.row").next("div.card").slideToggle();
    });
    $(".heart").click(function () {
        var icon = $(this).children('.fa-heart');
        icon.addClass("pulse").one("animationend", function () {
            $(icon).removeClass("pulse");
            
        });
        icon.toggleClass("hearted");
    });
});
    $(".reply").click(function(){
        $()
    });
  });