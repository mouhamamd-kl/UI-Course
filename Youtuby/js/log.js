$(document).ready(function(){
    $('.remove').click(function() {
      $(this).closest('.card').slideToggle('slow');
    });
  });
  