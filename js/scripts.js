$(document).ready(function(){
  $("h1").click(function() {
    $("#toggle").toggle();
    $("#fade-toggle").fadeToggle();
    $("#slide-toggle").slideToggle();
  });
});
