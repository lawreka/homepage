$(window).on("load", function (){
  $("#dropdown-content").toggleClass("reveal");
})

var nav = $(".navlink");
nav.on("click", function (){
  $("#smallnav").toggleClass("hidden reveal");
  $("#dropdown-content").toggleClass("hidden reveal");
});

var small = $("#smallnav");
small.on("click", function (){
  $("#smallnav").toggleClass("hidden reveal");
  $("#dropdown-content").toggleClass("hidden reveal");
});
