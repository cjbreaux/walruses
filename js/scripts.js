$(document).ready(function(){
  var elements = ["h1","p","img"];
  elements.forEach(function(element){
    $(element).click(function(){
      alert("you clicked an " + element +" element")
    })
  })

  // $("h1").click(function() {
  //   $("#toggle").toggle();
  //   $("#fade-toggle").fadeToggle();
  //   $("#slide-toggle").slideToggle();
  // });
  //
  // $("#toggle").click(function() {
  //   $("#toggle").toggle();
  // });
  //
  // $("#fade-toggle").click(function() {
  //   $("#fade-toggle").fadeToggle();
  // });
  //
  // $("#slide-toggle").click(function() {
  //   $("#slide-toggle").slideToggle();
  // });
  //
  // $(".instant p").click(function() {
  //   $("#toggle").toggle();
  // });
  //
  // $(".fading p").click(function() {
  //   $("#fade-toggle").fadeToggle();
  // });
  //
  // $(".slide p").click(function() {
  //   $("#slide-toggle").slideToggle();
  // });

});
