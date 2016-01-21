var other = {
  //image source
  i: "images/glammskell.jpg",
  //title/alt
  t: "Glamour Portrait",
  //size
  s: "500 px x 340 px",
  //medium
  m: "Photoshop",
  //year
  y: "2014"
};

o1 = {
  i: "images/jewelindaalotus.jpg",
  t: "The Jewel In The Lotus",
  s: "722 px x 500 px",
  m: "Photoshop",
  y: "2014"
};

o3 = {
  i: "images/lanternphoto.JPG",
  t: "Lantern",
  s: "1224 px x 1224 px",
  m: "Digital photo",
  y: "2014"
};

o4 = {
  i: "images/kitteh.jpg",
  t: "Kitteh",
  s: "18 in x 24 in",
  m :"Spray paint on newsprint",
  y: "2012"
};

o5 = {
  i: "images/phone.png",
  t: "Hello I Am Phone",
  s: "na",
  m: "Durational performance",
  y: "2015"
};

o6 = {
  i: "images/pump.jpg",
  t: "Pumpky",
  s: "6 in x 6 in",
  m: "Watercolor on paper",
  y: "2010"
};

o7 = {
  i: "images/strugs.png",
  t: "Strugs",
  s: "2592 px x 432 px",
  m: "Digital illustration",
  y: "2015"
};

o8 = {
  i: "images/turtle.jpg",
  t: "Turtle With Teeth",
  s: "7 in x 5 in",
  m: "Linoprint",
  y: "2010"
};

o9 = {
  i: "images/yoga.png",
  t: "Drawing Exercises",
  s: "864 px x 864 px",
  m: "Digital illustration",
  y: "2015"
};

o10 = {
  i: "images/yolologo.jpg",
  t: "YOLO",
  s: "? in x ? in",
  m: "Spray paint on trash",
  y: "2013"
};

var portfolio2 = [
  //glam (2014)
  other,
  //jewelinlotus (2014)
  o1,
  //strugs (2015)
  o7,
  //lantern (2014)
  o3,
  //yoga (2015)
  o9,
  //phone (2015)
  o5,
  //pumpkin (2010)
  o6,
  //kitteh (2012)
  o4,
  //turtle (2010)
  o8,
  //yolo (2013)
  o10
]


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
displayPainting(portfolio2[paintIndex]);

function nextPaint(event){
  event.preventDefault();
  if (paintIndex == (portfolio2.length - 1)){
    paintIndex = 0;
  }
  else{
    paintIndex = paintIndex + 1;
  }
  console.log(paintIndex);
  displayPainting(portfolio2[paintIndex]);
}

function prevPaint(event){
  event.preventDefault();
  if (paintIndex == 0){
    paintIndex = portfolio2.length - 1;
  }
  else{
    paintIndex = paintIndex - 1;
  }
  console.log(paintIndex);
  displayPainting(portfolio2[paintIndex]);
}

function displayPainting(o, i, t, s, m, y){
  if ($("#frame").has("img")){
    $("#frame").empty();
  }
  $("<img>").attr("src", o.i).addClass("image").appendTo("#frame");
  $("#title").text(o.t);
  $("#size").text(o.s);
  $("#medium").text(o.m);
  $("#year").text(o.y);
};