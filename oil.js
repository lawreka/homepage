var painting = {
  //image source
  i: "images/moon.jpg",
  //title/alt
  t: "Blue Moon",
  //size
  s: "30in",
  //medium
  m: "Oil on canvas",
  //year
  y: "2015"
};

painting1 = {
  i: "images/moth.jpg",
  t: "Moth"
};

painting2 = {
  i: "images/fly.jpg",
  t: "Fly"
};

var portfolio = [painting, painting1, painting2];

function displayPainting(p, i, t, s, m, y){
  $("<img>").attr("src", p.i).addClass("image").appendTo("#frame");
  $("#title").text(p.t);
  $("#size").text(p.s);
  $("#medium").text(p.m);
  $("#year").text(p.y);
};

$("#left").on("mouseenter", function(){
  $("#left").toggleClass("actL");
});
$("#left").on("mouseleave", function(){
  $("#left").toggleClass("actL");
});
$("#left").on("click", prevPaint);
$("#right").on("mouseenter", function(){
  $("#right").toggleClass("actR");
});
$("#right").on("mouseleave", function(){
  $("#right").toggleClass("actR");
});
$("#right").on("click", nextPaint);

var paintIndex = 0;
displayPainting(portfolio[paintIndex]);

function nextPaint(event){
  event.preventDefault();
  if (paintIndex == (portfolio.length - 1)){
    paintIndex = 0;
  }
  else{
    paintIndex = paintIndex + 1;
  }
  console.log(paintIndex);
  displayPainting(portfolio[paintIndex]);
}

function prevPaint(event){
  event.preventDefault();
  if (paintIndex == 0){
    paintIndex = portfolio.length - 1;
  }
  else{
    paintIndex = paintIndex - 1;
  }
  console.log(paintIndex);
  displayPainting(portfolio[paintIndex]);
}

function displayPainting(p, i, t, s, m, y){
  if ($("#frame").has("img")){
    $("#frame").empty();
  }
  $("<img>").attr("src", p.i).addClass("image").appendTo("#frame");
  $("#title").text(p.t);
  $("#size").text(p.s);
  $("#medium").text(p.m);
  $("#year").text(p.y);
};
