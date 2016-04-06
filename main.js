$(window).on("load", function (){
  $(".loading").fadeOut('1000');
  $("#dropdown-content").toggleClass("hidden reveal");
  $(".navlink").toggleClass("flashred");
});

$(".navlink").on("click", function (){
  $("#smallnav").toggleClass("hidden reveal");
  $("#dropdown-content").toggleClass("hidden reveal");
});

$("#smallnav").on("click", function (){
  $("#smallnav").toggleClass("hidden reveal");
  $("#dropdown-content").toggleClass("hidden reveal");
  $(".activepage").addClass("hidden");
});

$("#art").on("click", function (){
  $("#artdiv").toggleClass("hidden reveal");
});
$("#proj").on("click", function (){
  $("#projdiv").toggleClass("hidden reveal");
});
$("#res").on("click", function (){
  $("#resdiv").toggleClass("hidden reveal");
});
$("#else").on("click", function (){
  $("#elsediv").toggleClass("hidden reveal");
});

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
  //data value
  d: "other"
};

o1 = {
  i: "images/jewelindaalotus.jpg",
  t: "The Jewel In The Lotus",
  s: "722 px x 500 px",
  m: "Photoshop",
  y: "2014",
  d: "o1"
};

o3 = {
  i: "images/lanternphoto.JPG",
  t: "Lantern",
  s: "1224 px x 1224 px",
  m: "Digital photo",
  y: "2014",
  d: "o3"
};

o4 = {
  i: "images/kitteh.jpg",
  t: "Kitteh",
  s: "18 in x 24 in",
  m :"Spray paint on newsprint",
  y: "2012",
  d: "o4"
};

o5 = {
  i: "images/phone.png",
  t: "Hello I Am Phone",
  s: "na",
  m: "Durational performance",
  y: "2015",
  d: "o5"
};

o6 = {
  i: "images/pump.jpg",
  t: "Pumpky",
  s: "6 in x 6 in",
  m: "Watercolor on paper",
  y: "2010",
  d: "o6"
};

o7 = {
  i: "images/strugs.png",
  t: "Strugs",
  s: "2592 px x 432 px",
  m: "Digital illustration",
  y: "2015",
  d: "o7"
};

o8 = {
  i: "images/turtle.jpg",
  t: "Turtle With Teeth",
  s: "7 in x 5 in",
  m: "Linoprint",
  y: "2010",
  d: "o8"
};

o9 = {
  i: "images/yoga.png",
  t: "Drawing Exercises",
  s: "864 px x 864 px",
  m: "Digital illustration",
  y: "2015",
  d: "o9"
};

o10 = {
  i: "images/yolologo.jpg",
  t: "YOLO",
  s: "? in x ? in",
  m: "Spray paint on trash",
  y: "2013",
  d: "o10"
};

o11 = {
  i: "images/birthday.jpg",
  t: "Celebrate",
  s: "~11 in x ~4 in",
  m: "Found object sculpture",
  y: "2016",
  d: "o11"
};

o12 = {
  i: "images/ed.png",
  t: "Elise",
  s: "10 in x 11 in",
  m: "Digital illustration",
  y: "2016",
  d: "o12"
}

o13 = {
  i: "images/jb.png",
  t: "Jen",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o13"
}

o14 = {
  i: "images/jg.png",
  t: "Jamal",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o14"
}

o15 = {
  i: "images/bh.jpg",
  t: "Blake",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o15"
}

o16 = {
  i: "images/wc.jpg",
  t: "Winifred",
  s: "14 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o16"
}

o17 = {
  i: "images/lw.jpg",
  t: "Louise",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o17"
}

o18 = {
  i: "images/am.jpg",
  t: "Anna",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o18"
}

o19 = {
  i: "images/efu.jpg",
  t: "Eric",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o19"
}

o20 = {
  i: "images/ph.jpg",
  t: "Pat",
  s: "10 in x 14 in",
  m: "Digital illustration",
  y: "2016",
  d: "o20"
}

o21 = {
  i: "images/pisces.jpg",
  t: "Three Pisces (Aku, Lisa, Maya)",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o21"
}

o22 = {
  i: "images/moi.gif",
  t: "Moi",
  s: "300px x 300px",
  m: "gif",
  y: "2016",
  d: "o22"
}

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
  y: "2012",
  //data value
  d: "painting"
};

p1 = {
  i: "images/seahorse.jpg",
  t: "Sea Horse",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2015",
  d: "p1"
};

p2 = {
  i: "images/fly.jpg",
  t: "Fly",
  s: "12 in x 9 in",
  m: "Oil on canvas",
  y: "2014",
  d: "p2"
};

p3 = {
  i: "images/abstrct.jpg",
  t: "Abstract 1",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p3"
};

p4 = {
  i: "images/americanspirit.jpg",
  t: "American Spirit",
  s: "24 in x 12 in",
  m :"Oil on canvas",
  y: "2011",
  d: "p4"
};

p5 = {
  i: "images/boats.jpg",
  t: "Boats",
  s: "24 in x 24 in",
  m: "Oil on canvas",
  y: "2011",
  d: "p5"
};

p6 = {
  i: "images/body.jpg",
  t: "Occupy Body",
  s: "62 in x 34 in",
  m: "Oil on canvases",
  y: "2011",
  d: "p6"
};

p7 = {
  i: "images/clouds.jpg",
  t: "Sunset",
  s: "24 in x 17 in",
  m: "Oil on canvas",
  y: "2014",
  d: "p7"
};

p8 = {
  i: "images/daisy.jpg",
  t: "Daisies",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p8"
};

p9 = {
  i: "images/donut.jpg",
  t: "Donut",
  s: "20 in x 20 in",
  m: "Oil on canvas",
  y: "2015",
  d: "p9"
};

p10 = {
  i: "images/dragon.jpg",
  t: "Dragon",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p10"
};

p11 = {
  i: "images/eagle.jpg",
  t: "Eagle",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2015",
  d: "p11"
};

p12 = {
  i: "images/girls.jpg",
  t: "Girls",
  s: "16 in x 55 in",
  m: "Oil on canvas",
  y: "2012",
  d: "p12"
};

p13 = {
  i: "images/grey.jpg",
  t: "The Blue Hand Is Dead! Long Live The Blue Hand",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2015",
  d: "p13"
};

p14 = {
  i: "images/jewel.jpg",
  t: "The Jewel In The Lotus",
  s: "12 in x 12 in",
  m: "Oil on canvas",
  y: "2013",
  d: "p14"
};

p15 = {
  i: "images/moth.jpg",
  t: "Moth",
  s: "20 in x 20 in",
  m: "Oil on canvas",
  y: "2015",
  d: "p15"
};

p16 = {
  i: "images/si.jpg",
  t: "Si",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p16"
};

p17 = {
  i: "images/snail.jpg",
  t: "Snail From The Sea",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p17"
};

p18 = {
  i: "images/snowytrees.jpg",
  t: "Snowy Trees",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p18"
};

p19 = {
  i: "images/stilllife.jpg",
  t: "Still Life At Reed College",
  s: "31 in x 23 in",
  m: "Oil on canvas",
  y: "2014",
  d: "p19"
};

p20 = {
  i: "images/stream.jpg",
  t: "A Happy Little Stream (Composition by Bob Ross)",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p20"
};

p21 = {
  i: "images/toastr.jpg",
  t: "Toastr",
  s: "32 in x 23-17 in",
  m: "Oil on canvas",
  y: "2014",
  d: "p21"
};

p22 = {
  i: "images/trees.jpg",
  t: "Trees",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p22"
};

p23 = {
  i: "images/trophy.jpg",
  t: "Trophy",
  s: "24 in x 24 in",
  m: "Oil on canvas",
  y: "2015",
  d: "p23"
};

p24 = {
  i: "images/volcano.jpg",
  t: "Volcano",
  s: "20 in x 16 in",
  m: "Oil on canvas board",
  y: "2014",
  d: "p24"
};

p25 = {
  i: "images/yizhi.jpg",
  t: "Self Portrait (Yi Zhi)",
  s: "36 in x 36 in",
  m: "Oil on canvas",
  y: "2013",
  d: "p25"
};

p26 = {
  i: "images/bigsur.jpg",
  t: "Objects x Big Sur (Overlay of Big Sur, Maryanne Jacobsen)",
  s: "16 in x 24 in",
  m: "Oil on boards",
  y: "2011",
  d: "p26"
};

p27 = {
  i: "images/bottle.jpg",
  t: "Bouteille",
  s: "12 in x 8 in",
  m: "Oil on canvas paper",
  y: "2013",
  d: "p27"
};

p28 = {
  i: "images/darkness.jpg",
  t: "Light",
  s: "16 in x 20 in",
  m: "Oil on canvas paper",
  y: "2015",
  d: "p28"
};

p29 = {
  i: "images/lands.jpg",
  t: "Landscape",
  s: "16 in x 20 in",
  m: "Oil on canvas paper",
  y: "2015",
  d: "p29"
};

p30 = {
  i: "images/lily.jpg",
  t: "Lily",
  s: "12 in x 8 in",
  m: "Oil on canvas paper",
  y: "2014",
  d: "p30"
};

p31 = {
  i: "images/prayerhands.jpg",
  t: "Prayer Hands",
  s: "16 in x 20 in",
  m: "Oil on canvas paper",
  y: "2013",
  d: "p31"
};

p32 = {
  i: "images/prayerhands2.jpg",
  t: "Prayer Hands 2",
  s: "16 in x 20 in",
  m: "Oil on canvas paper",
  y: "2013",
  d: "p32"
};

p33 = {
  i: "images/seurat.jpg",
  t: "A Bit of Seurat (Excerpt from A Sunday on La Grande Jatte, Georges Seurat)",
  s: "16 in x 21 in",
  m: "Oil on paper",
  y: "2011",
  d: "p33"
};

p34 = {
  i: "images/teal.jpg",
  t: "Teal",
  s: "8 in x 12 in",
  m: "Oil on paper",
  y: "2013",
  d: "p34"
};

var allArts = [o22, o19, o18, o20, o17, o15, o14, o13, o12, o21, o16, o9, o7, other, o1, painting, p25, p15, p23, p6, p12, p2, p1, p21, p11, p16, p8, p27, p20, p31, p32, p7, p9, p28, p14, p13, p10, p18, p24, p19, p17, p22, p26, p29, p30, p34, p33, p3, p5, p4, o3, o11, o5, o6, o4, o8, o10];

$(".thumb").on("click", function (){
  var num = $(this).attr('data');
  showPainting(num);
  $("#gallery").toggleClass("hidden");
  $("#frame").toggleClass("hidden");
});

// $("#frame").on("click", function (){
//   $("#gallery").toggleClass("hidden");
//   $("#frame").toggleClass("hidden");
// });

function showPainting(num){
  $("#bign").attr("src", eval(num).i);
  $("#bign").attr("data", eval(num).d);
  $("#title").text(eval(num).t);
  $("#size").text(eval(num).s);
  $("#medium").text(eval(num).m);
  $("#year").text(eval(num).y);
}

$("#leftbutt").on("click", function(){
    var ind = $("#bign").attr('data');
    var currentArt = allArts.indexOf(eval(ind));
    if (currentArt == 0){
      currentArt = allArts.length - 1;
    }
    else {
      currentArt = currentArt - 1;
    }
  showPainting(allArts[currentArt]);
});

$("#rightbutt").on("click", function(){
    var ind = $("#bign").attr('data');
    var currentArt = allArts.indexOf(eval(ind));
    if (currentArt == allArts.length - 1){
      currentArt = 0;
    }
    else {
      currentArt = currentArt + 1;
    }
  showPainting(allArts[currentArt]);
});

$("#smallnav2").on("click", function(){
  $("#gallery").toggleClass("hidden");
  $("#frame").toggleClass("hidden");
});

$(".projectlink").on("mouseover", function(){
  var source = $(this).attr("href");
  $("#prevwindow").attr("src", source);
  $("#preview").removeClass("hidden");
});

$(".jobtitle").on("click", function(){
  $(this).next().toggleClass("hidden");
  $(".jobdescrip").toggleClass("reveal");
});

$(".clickable").on("click", function(){
  $(this).toggleClass("clickable");
});
