
var cranes;
var music_note1 = 100
var music_note2 = 57

function preload(){
  cranes = loadSound('cranes.mp3');
}

function setup() {
  createCanvas(600, 600);
  //cranes.play()
}

function draw() {
  background(242, 239, 220)
  console.log(mouseX,mouseY);
  fill(0)
  ellipse(135,220,100);
  ellipse(86,275,75);
  ellipse(60,310,75);
  ellipse(97,247,75);
  ellipse(125,270,25);
  ellipse(20,360,75);
  ellipse(124,300,75);
  ellipse(100,350,75);
  ellipse(5,400,75);
  fill(173, 120, 87);
  noStroke();
  ellipse(300,175,175,250); // her head
  quad( 334, 285, 280, 290, 265, 400, 350, 400); // her neck
  square(25, 345, 500, 20); // her body
  // left bigger hair details
  fill(0);
  ellipse(220,84,100);
  ellipse(187,150,100);
  ellipse(175,227,100);
  ellipse(195,296,100);
  ellipse(195,365,100);
  ellipse(195,445,100);
  ellipse(195,500,100);
  ellipse(195,550,100);
  // smaller hair details
  fill(0);
  ellipse(180,105,75);
  ellipse(155,186,75);
  ellipse(165,265,75);
  ellipse(205,195,75);
  ellipse(211,250,75);
  ellipse(170,330,75);
  ellipse(225,330,75);
  ellipse(175,420,75);
  ellipse(225,415,75);
  ellipse(225,445,75);
  ellipse(225,475,75);
  ellipse(225,500,75);
  ellipse(225,550,75);
  ellipse(250,285,50);
  ellipse(260,300,50);
  ellipse(240,390,70);
  ellipse(250,340,70);
  ///// right hair details
  ellipse(260,50,50);
  ellipse(290,50,25);
  ellipse(325,50,50);
  ellipse(360,60,70);
  ellipse(385,100,70);
  ellipse(400,150,70);
  ellipse(415,200,70);
  ellipse(420,260,70);
  ellipse(416,325,70);
  ellipse(410,230,70);
  ellipse(380,270,70);
  ellipse(365,310,70);
  ellipse(370,360,70);
  ellipse(410,382,70);
  ellipse(374,420,70);
  ellipse(405,440,70);
  ellipse(370,460,70);
  ellipse(405,485,70);
  ellipse(362,500,70);
  ellipse(360,545,70);
  ellipse(404,540,70);
  ellipse(385,575,70);
  //blue hair details
  fill(150, 185, 242);
  if (key == 'a'){
    fill (242, 150, 219)
  }
  if (key == 'b'){
    fill(150, 185, 242)}
  ellipse(250,80,15);
  ellipse(260,80,15);
  ellipse(350,75,15);
  ellipse(360,75,15);
  ellipse(385,316,15);
  ellipse(395,316,15);
  ellipse(210,316,15);
  ellipse(220,316,15);
  ellipse(380,455,15);
  ellipse(390,455,15);
  ellipse(210,470,15);
  ellipse(220,470,15);
  //pink hair details
  fill(242, 150, 219);
  if (key == 'c'){
    fill (150, 185, 242)
  }
  if (key == 'd'){
    fill(242, 150, 219)}
  
  ellipse(210,136,15);
  ellipse(220,136,15);
  ellipse(390,200,15);
  ellipse(400,200,15);
  ellipse(200,230,15);
  ellipse(210,230,15);
  ellipse(403,288,15);
  ellipse(393,288,15);
  ellipse(210,400,15);
  ellipse(220,400,15);
  ellipse(380,380,15);
  ellipse(390,380,15);
  ellipse(375,530,15);
  ellipse(385,530,15);
  //eyes & eyebrows
  fill(255);
  ellipse(270,150,35,20);
  ellipse(340,150,35,20);
  fill(0)
  ellipse(270,150,15);
  ellipse(340,150,15);
  ellipse(270,131,30,5)
  ellipse(340,131,30,5)
  //lips
  fill(240, 183, 170);
  ellipse(305,215,60,20);
  
  if (keyCode == LEFT_ARROW){
    music_note2-=10;
    }

  if (keyCode == RIGHT_ARROW){
    music_note2+=10;
    }
  
  if (keyCode == UP_ARROW){
    music_note1-=10;
  }
  
  if (keyCode == DOWN_ARROW){
    music_note1+=10;
  }
  fill(0)
  ellipse(music_note2,95,35)
  rect(music_note2, 50, 15,60, 20);
  rect(music_note2, 45,35,15, 20);
  ellipse(music_note1,120,35)
  rect(music_note1,75, 15,60, 20);
  rect(music_note1,70,35,15,20);
  }

function keyPressed(){
  if (key == ' '){
    cranes.play();
  }

  if (key == 'p'){
    cranes.pause();
  }
}
