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

$("#digi").on("click", function (){
  $("#digidiv").toggleClass("hidden reveal");
});
$("#oil").on("click", function (){
  $("#oildiv").toggleClass("hidden reveal");
});
$("#other").on("click", function (){
  $("#otherdiv").toggleClass("hidden reveal");
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
  m: "Collage",
  //year
  y: "2014",
  //data value
  d: "other"
};

o1 = {
  i: "images/jewelindaalotus.jpg",
  t: "The Jewel In The Lotus",
  s: "722 px x 500 px",
  m: "Collage",
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
  m: "Digital illustration/collage",
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

o23 = {
  i: "images/rs.jpg",
  t: "Roland",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o23"
}

o24 = {
  i: "images/kg.jpg",
  t: "Kate",
  s: "10 in x 10 in",
  m: "Digital illustration",
  y: "2016",
  d: "o24"
}

o25 = {
  i: "images/chrys.png",
  t: "Chrysanthemums and Crabs, after Qi Baishi",
  s: "10 in x 5 in",
  m: "Digital illustration",
  y: "2016",
  d: "o25"
}

o26 = {
  i: "images/ghostyslow.gif",
  t: "Ghosty",
  s: "360px x 360px",
  m: "gif",
  y: "2016",
  d: "o26"
}

o27 = {
  i: "images/kafe1.jpg",
  t: "Kafe 1 (Dark)",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "o27"
}

o28 = {
  i: "images/kafe2.jpg",
  t: "Kafe 2 (Light)",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "o28"
}

o29 = {
  i: "images/korhonen.png",
  t: "Korhonen",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "o29"
}

o30 = {
  i: "images/meringues.jpg",
  t: "Meringues",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "o30"
}

o31 = {
  i: "images/pizza.png",
  t: "Abandoned Pizza",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "o31"
}

o32 = {
  i: "images/gemlogo.png",
  t: "Gem logo",
  s: "360px x 360px",
  m: "Digital illustration",
  y: "2016",
  d: "o32"
}

o33 = {
  i: "images/loadinggif2.gif",
  t: "Loading gif",
  s: "360px x 360px",
  m: "gif",
  y: "2016",
  d: "o33"
}

o34 = {
  i: "images/chaus.JPG",
  t: "Chaussures",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "o34"
}

o35 = {
  i: "images/knucks.JPG",
  t: "Knucks",
  s: "2048px x 2732px",
  m: "Digital illustration/collage",
  y: "2016",
  d: "o35"
}

o36 = {
  i: "images/wunder.gif",
  t: "wunderbar",
  s: "900px x 540px",
  m: "gif",
  y: "2016",
  d: "o36"
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

p35 = {
  i: "images/churchsketch.png",
  t: "Acton Congregational",
  s: "6 in x 6 in",
  m: "Pen, paper",
  y: "unknown",
  d: "p35"
}

p36 = {
  i: "images/crabbo.png",
  t: "Crabbo",
  s: "3 in x 3 in",
  m: "Pen, Post-It",
  y: "2015",
  d: "p36"
}

p37 = {
  i: "images/drgnsketch.png",
  t: "Rawr",
  s: "6 in x 6 in",
  m: "Markers, paper",
  y: "unknown",
  d: "p37"
}

p38 = {
  i: "images/lilysketch.png",
  t: "Lilies",
  s: "6 in x 6 in",
  m: "Marker, paper",
  y: "unknown",
  d: "p38"
}

p39 = {
  i: "images/lobsta.png",
  t: "Lobsta",
  s: "3 in x 3 in",
  m: "Pen, Post-It",
  y: "2015",
  d: "p39"
}

p40 = {
  i: "images/parkppl.png",
  t: "Park People",
  s: "6 in x 6 in",
  m: "Pen, paper",
  y: "unknown",
  d: "p40"
}

p41 = {
  i: "images/redyolo.png",
  t: "Yolo Logo Redux",
  s: "1350px x 900px",
  m: "Digital illustration",
  y: "2016",
  d: "p41"
}

p42 = {
  i: "images/treesketch1.png",
  t: "Tree Sketch 1",
  s: "6 in x 6 in",
  m: "Marker, paper",
  y: "unknown",
  d: "p42"
}

p43 = {
  i: "images/treesketch2.png",
  t: "Tree Sketch 2",
  s: "6 in x 6 in",
  m: "Marker, paper",
  y: "unknown",
  d: "p43"
}

p44 = {
  i: "images/seahorse.png",
  t: "Seahorse",
  s: "3 in x 3 in",
  m: "Pen, Post-It",
  y: "2015",
  d: "p44"
}

p45 = {
  i: "images/auberg.JPG",
  t: "Auberg",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p45"
}

p46 = {
  i: "images/fruitbowl.JPG",
  t: "Fruit bowl",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p46"
}

p47 = {
  i: "images/wazup.png",
  t: "Hold Up",
  s: "750px x 2000px",
  m: "Digital illustration",
  y: "2016",
  d: "p47"
}

p48 = {
  i: "images/burn.gif",
  t: "Bridge burning",
  s: "2048px x 2732px",
  m: "gif",
  y: "2016",
  d: "p48"
}

p49 = {
  i: "images/buddha.PNG",
  t: "Buddha",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p49"
}

p50 = {
  i: "images/selfdark.JPG",
  t: "Self (Night)",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p50"
}

p51 = {
  i: "images/selflight.JPG",
  t: "Self (Day)",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p51"
}

p52 = {
  i: "images/ts.jpg",
  t: "Taro",
  s: "480px x 480px",
  m: "Digital illustration",
  y: "2016",
  d: "p52"
}

p53 = {
  i: "images/updown.2.gif",
  t: "FU",
  s: "2048px x 2732px",
  m: "gif",
  y: "2016",
  d: "p53"
}

p54 = {
  i: "images/zazmud.PNG",
  t: "Zazen mudra",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p54"
}

p55 = {
  i: "images/husk.JPG",
  t: "Husk",
  s: "1000px x 1000px",
  m: "Digital illustration",
  y: "2016",
  d: "p55"
}

p56 = {
  i: "images/silvery.JPG",
  t: "The Silvery Moon",
  s: "1000px x 1000px",
  m: "Digital illustration",
  y: "2016",
  d: "p56"
}

p57 = {
  i: "images/sunset.JPG",
  t: "Sunset",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p57"
}

p58 = {
  i: "images/isles.JPG",
  t: "Isles",
  s: "1000px x 1000px",
  m: "Digital illustration",
  y: "2016",
  d: "p58"
}

p59 = {
  i: "images/mam.jpg",
  t: "Pat 1",
  s: "960px x 960px",
  m: "Digital illustration",
  y: "2016",
  d: "p59"
}

p60 = {
  i: "images/mam2.JPG",
  t: "Pat 2",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p60"
}

p61 = {
  i: "images/mouths.PNG",
  t: "Body Language (Mouths)",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p61"
}

p62 = {
  i: "images/stump.JPG",
  t: "Stump with Gold Fungus",
  s: "1000px x 1200px",
  m: "Digital illustration",
  y: "2016",
  d: "p62"
}

p63 = {
  i: "images/sunset2.JPG",
  t: "Sunset 2",
  s: "2048px x 2732px",
  m: "Digital illustration",
  y: "2016",
  d: "p63"
}

p64 = {
  i: "images/hairdye.gif",
  t: "Hair dye",
  s: "1080px x 720px",
  m: "gif/collage",
  y: "2016",
  d: "p64"
}

p65 = {
  i: "images/kees",
  t: "</3",
  s: "2016px x 2304px",
  m: "gif",
  y: "2016",
  d: "p65"
}

p66 = {
  i: "images/weenkslow.gif",
  t: "^_~*",
  s: "2016px x 2448px",
  m: "gif",
  y: "2016",
  d: "p66"
}

p67 = {
  i: "images/tung.gif",
  t: ":P",
  s: "1872px x 2448px",
  m: "gif",
  y: "2016",
  d: "p67"
}
var digiArr = [p63, p62, p61, p58, p55, p56, p57, p51, p50, p49, p54, p47, p46, p45, o34, o29, o31, o27, o28, o30, o25, o32, p41, o9, o7, p67, p65, p66, p53, p48, o36, o22, o26, o33, p60, p59, p52, o24, o23, o19, o18, o20, o17, o15, o14, o13, o12, o16, p64, o35, o21, other, o1];

var oilArr = [painting, p25, p15, p23, p6, p12, p2, p21, p7, p9, p14, p19, p3, p5, p4, p1, p11, p16, p8, p20, p13, p10, p18, p24, p17, p22, p26, p27, p31, p32, p28, p29, p30, p34, p33];

var otherArr = [o11, o5, p39, p36, p44, p40, p38, o3, o10, p42, p43, p37, p35, o4, o8, o6];

$(".digithumb").on("click", function (){
  var num = $(this).attr('data');
  showPainting1(num);
  $("#digigallery").toggleClass("hidden");
  $("#frame1").toggleClass("hidden");
  $("#smallnav").toggleClass("hidden");
});

$(".oilthumb").on("click", function (){
  var num = $(this).attr('data');
  showPainting2(num);
  $("#oilgallery").toggleClass("hidden");
  $("#frame2").toggleClass("hidden");
  $("#smallnav").toggleClass("hidden");
});

$(".otherthumb").on("click", function (){
  var num = $(this).attr('data');
  showPainting3(num);
  $("#othergallery").toggleClass("hidden");
  $("#frame3").toggleClass("hidden");
  $("#smallnav").toggleClass("hidden");
});

// $("#frame").on("click", function (){
//   $("#gallery").toggleClass("hidden");
//   $("#frame").toggleClass("hidden");
// });

function showPainting1(num){
  $("#bign1").attr("src", eval(num).i);
  $("#bign1").attr("data", eval(num).d);
  $("#title1").text(eval(num).t);
  $("#size1").text(eval(num).s);
  $("#medium1").text(eval(num).m);
  $("#year1").text(eval(num).y);
}
function showPainting2(num){
  $("#bign2").attr("src", eval(num).i);
  $("#bign2").attr("data", eval(num).d);
  $("#title2").text(eval(num).t);
  $("#size2").text(eval(num).s);
  $("#medium2").text(eval(num).m);
  $("#year2").text(eval(num).y);
}
function showPainting3(num){
  $("#bign3").attr("src", eval(num).i);
  $("#bign3").attr("data", eval(num).d);
  $("#title3").text(eval(num).t);
  $("#size3").text(eval(num).s);
  $("#medium3").text(eval(num).m);
  $("#year3").text(eval(num).y);
}

// $("#leftbutt1").on("click", function(){
//     var ind = $("#bign1").attr('data');
//     var currentArt = digiArr.indexOf(eval(ind));
//     if (currentArt == 0){
//       currentArt = digiArr.length - 1;
//     }
//     else {
//       currentArt = currentArt - 1;
//     }
//   showPainting1(digiArr[currentArt]);
// });
// $("#leftbutt2").on("click", function(){
//     var ind = $("#bign2").attr('data');
//     var currentArt = oilArr.indexOf(eval(ind));
//     if (currentArt == 0){
//       currentArt = oilArr.length - 1;
//     }
//     else {
//       currentArt = currentArt - 1;
//     }
//   showPainting2(oilArr[currentArt]);
// });
//
// $("#leftbutt3").on("click", function(){
//     var ind = $("#bign3").attr('data');
//     var currentArt = otherArr.indexOf(eval(ind));
//     if (currentArt == 0){
//       currentArt = otherArr.length - 1;
//     }
//     else {
//       currentArt = currentArt - 1;
//     }
//   showPainting3(otherArr[currentArt]);
// });
//
// $("#rightbutt1").on("click", function(){
//     var ind = $("#bign1").attr('data');
//     var currentArt = digiArr.indexOf(eval(ind));
//     if (currentArt == digiArr.length - 1){
//       currentArt = 0;
//     }
//     else {
//       currentArt = currentArt + 1;
//     }
//   showPainting1(digiArr[currentArt]);
// });
// $("#rightbutt2").on("click", function(){
//     var ind = $("#bign2").attr('data');
//     var currentArt = oilArr.indexOf(eval(ind));
//     if (currentArt == oilArr.length - 1){
//       currentArt = 0;
//     }
//     else {
//       currentArt = currentArt + 1;
//     }
//   showPainting2(oilArr[currentArt]);
// });
// $("#rightbutt3").on("click", function(){
//     var ind = $("#bign3").attr('data');
//     var currentArt = otherArr.indexOf(eval(ind));
//     if (currentArt == otherArr.length - 1){
//       currentArt = 0;
//     }
//     else {
//       currentArt = currentArt + 1;
//     }
//   showPainting3(otherArr[currentArt]);
// });

$("#smallnav1").on("click", function(){
  $("#digigallery").toggleClass("hidden");
  $("#frame1").toggleClass("hidden");
  $("#smallnav").toggleClass("hidden reveal");
});

$("#smallnav2").on("click", function(){
  $("#oilgallery").toggleClass("hidden");
  $("#frame2").toggleClass("hidden");
  $("#smallnav").toggleClass("hidden reveal");
});

$("#smallnav3").on("click", function(){
  $("#othergallery").toggleClass("hidden");
  $("#frame3").toggleClass("hidden");
  $("#smallnav").toggleClass("hidden reveal");
});


$(".clickable").on("click", function(){
  $(this).toggleClass("clickable");
});
