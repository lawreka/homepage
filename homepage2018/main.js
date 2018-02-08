$(window).on("load", function (){
  $(".loading").fadeOut('1000');
    $("#gallery").removeClass("hidden");
});

function play(){
       var audio = document.getElementById("audio");
       audio.play();
}
