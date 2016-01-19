var painting = {
  //image source
  i: "images/moon.jpg",
  //title/alt
  t: "Blue Moon",
  //size
  s: "30 in x 30 in",
  //medium
  m: "Oil on canvas",
  //year
  y: "2012"
};

p1 = {
  i: "images/seahorse.jpg",
  t: "Sea Horse",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2015"
};

p2 = {
  i: "images/fly.jpg",
  t: "Fly",
  s: "9 in x 12 in",
  m: "Oil on canvas",
  y: "2014"
};

p3 = {
  i: "images/abstrct.jpg",
  t: "Abstract 1",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p4 = {
  i: "images/americanspirit.jpg",
  t: "American Spirit",
  s: "12 in x 24 in",
  m :"Oil on canvas",
  y: "2011"
};

p5 = {
  i: "images/boats.jpg",
  t: "Boats",
  s: "24 in x 24 in",
  m: "Oil on canvas",
  y: "2011"
};

p6 = {
  i: "images/body.jpg",
  t: "Occupy Body",
  s: "34 in x 62 in",
  m: "Oil on canvases",
  y: "2011"
};

p7 = {
  i: "images/clouds.jpg",
  t: "Sunset",
  s: "17 in x 24 in",
  m: "Oil on canvas",
  y: "2014"
};

p8 = {
  i: "images/daisy.jpg",
  t: "Daisies",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p9 = {
  i: "images/donut.jpg",
  t: "Donut",
  s: "20 in x 20 in",
  m: "Oil on canvas",
  y: "2015"
};

p10 = {
  i: "images/dragon.jpg"
  t: "Dragon",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p11 = {
  i: "images/eagle.jpg",
  t: "Eagle",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2015"
};

p12 = {
  i: "images/girls.jpg",
  t: "Girls",
  s: "55 in x 16 in",
  m: "Oil on canvas",
  y: "2012"
};

p13 = {
  i: "images/grey.jpg",
  t: "The Blue Hand Is Dead! Long Live The Blue Hand",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2015"
};

p14 = {
  i: "images/jewel.jpg",
  t: "The Jewel In The Lotus",
  s: "12 in x 12 in",
  m: "Oil on canvas",
  y: "2013"
};

p15 = {
  i: "images/moth.jpg",
  t: "Moth",
  s: "20 in x 20 in",
  m: "Oil on canvas",
  y: "2015"
};

p16 = {
  i: "images/si.jpg",
  t: "Si",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p17 = {
  i: "images/snail.jpg",
  t: "Snail From The Sea",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p18 = {
  i: "images/snowytrees.jpg",
  t: "Snowy Trees",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p19 = {
  i: "images/stilllife.jpg",
  t: "Still Life At Reed College",
  s: "31 in x 23 in",
  m: "Oil on canvas",
  y: "2014"
};

p20 = {
  i: "images/stream.jpg",
  t: "A Happy Little Stream, ft. Bob Ross",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p21 = {
  i: "images/toastr.jpg",
  t: "Toastr",
  s: "23-17 in x 32 in",
  m: "Oil on canvas",
  y: "2014"
};

p22 = {
  i: "images/trees.jpg",
  t: "Trees",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p23 = {
  i: "images/trophy.jpg",
  t: "Trophy",
  s: "24 in x 24 in",
  m: "Oil on canvas",
  y: "2015"
};

p24 = {
  i: "images/volcano.jpg",
  t: "Volcano",
  s: "16 in x 20 in",
  m: "Oil on canvas board",
  y: "2014"
};

p25 = {
  i: "images/yizhi.jpg",
  t: "Self Portrait (Yi Zhi)",
  s: "36 in x 36 in",
  m: "Oil on canvas",
  y: "2013"
};

p3 = {
  i:
  t:
  s:
  m:
  y:
};

p3 = {
  i:
  t:
  s:
  m:
  y:
};

p3 = {
  i:
  t:
  s:
  m:
  y:
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
