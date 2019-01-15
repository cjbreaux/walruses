$(document).ready(function(){
  $("h1").click(function() {
    $("#toggle").toggle();
    $("#fade-toggle").fadeToggle();
    $("#slide-toggle").slideToggle();
  });

  $("#toggle").click(function() {
    $("#toggle").toggle();
  });

  $("#fade-toggle").click(function() {
    $("#fade-toggle").fadeToggle();
  });

  $("#slide-toggle").click(function() {
    $("#slide-toggle").slideToggle();
  });
});
