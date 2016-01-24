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
  y: "2014",
  //background color
  b: "rgb(229, 232, 219)"
};

o1 = {
  i: "images/jewelindaalotus.jpg",
  t: "The Jewel In The Lotus",
  s: "722 px x 500 px",
  m: "Photoshop",
  y: "2014",
  b: "rgb(75, 76, 84)"
};

o3 = {
  i: "images/lanternphoto.JPG",
  t: "Lantern",
  s: "1224 px x 1224 px",
  m: "Digital photo",
  y: "2014",
  b: "rgb(6, 4, 5)"
};

o4 = {
  i: "images/kitteh.jpg",
  t: "Kitteh",
  s: "18 in x 24 in",
  m :"Spray paint on newsprint",
  y: "2012",
  b: "rgb(179, 163, 143)"
};

o5 = {
  i: "images/phone.png",
  t: "Hello I Am Phone",
  s: "na",
  m: "Durational performance",
  y: "2015",
  b: "rgb(251, 251, 251)"
};

o6 = {
  i: "images/pump.jpg",
  t: "Pumpky",
  s: "6 in x 6 in",
  m: "Watercolor on paper",
  y: "2010",
  b: "rgb(242, 244, 242)"
};

o7 = {
  i: "images/strugs.png",
  t: "Strugs",
  s: "2592 px x 432 px",
  m: "Digital illustration",
  y: "2015",
  b: "rgb(250, 250, 250)"
};

o8 = {
  i: "images/turtle.jpg",
  t: "Turtle With Teeth",
  s: "7 in x 5 in",
  m: "Linoprint",
  y: "2010",
  b: "rgb(225, 219, 208)"
};

o9 = {
  i: "images/yoga.png",
  t: "Drawing Exercises",
  s: "864 px x 864 px",
  m: "Digital illustration",
  y: "2015",
  b: "rgb()"
};

o10 = {
  i: "images/yolologo.jpg",
  t: "YOLO",
  s: "? in x ? in",
  m: "Spray paint on trash",
  y: "2013",
  b: "rgb(48, 39, 29)"
};

o11 = {
  i: "images/birthday.jpg",
  t: "Birthday Cake",
  s: "~11 in x ~4 in",
  m: "Found object sculpture: candles, Jack Daniel's bottle",
  y: "2016",
  b: "rgb(187, 106, 65)"
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
  o10,
  //birthday
  o11,
]


function displayPainting(p, i, t, s, m, y){
  $("<img>").attr("src", p.i).addClass("image").appendTo("#frame");
  //add below for background color stealing
  //$("#image").load(function(){
  //  steal();
  //});
  $("#title").text(p.t);
  $("#size").text(p.s);
  $("#medium").text(p.m);
  $("#year").text(p.y);
};

var pics = document.getElementById("frame");
var hammertime = new Hammer(pics);
var hammertiem = new Hammer(pics);
hammertime.on("swipeleft", nextPaint);
hammertiem.on("swiperight", prevPaint);

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
  //add to above line for background color stealing
  //.attr("id", "backgroundImage").attr("onload", "steal()");
  $("#title").text(o.t);
  $("#size").text(o.s);
  $("#medium").text(o.m);
  $("#year").text(o.y);
  $("main").attr("style", "background-color:" + o.b);
};

// to use background color stealing
// function steal(){
//   var backgroundColorThief = new BackgroundColorTheif();
//   var rgb = backgroundColorThief.getBackGroundColor(document.getElementById("backgroundImage"));
//   document.getElementById("backGroundColor").style.backgroundColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] +')';
//   console.log("steal?");
// };
