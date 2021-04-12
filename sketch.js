
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;
var backGroundimg;
var bobImg;
var Song;
var time=1 ,time2;
var customer1,customer2,customer3,customer4;
var c1Img,c2Img,c3Img,c4Img;

function preload(){
	 backGroundimg = loadImage("shop2.jpg");
	 bobImg = loadImage("bob.png");
	 c1Img = loadImage("m4.png");
	 c2Img = loadImage("m7.png");
	 c3Img = loadImage("m0.png");
	 c4Img = loadImage("m10.png");
	 Song = loadSound("bobMusic.wav");
	
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(400,250,230,20);
	bob1 = new bob(320,575,40)
	//bob1.addImage(this.image);

	bob2 = new bob(360,575,40)
	bob3 = new bob(400,575,40)
	bob4 = new bob(440,575,40)
	bob5 = new bob(480,575,40)
	
	
	rope1=new rope(bob1.body,roofObject.body,-80, 0)
	rope2=new rope(bob2.body,roofObject.body,-40, 0)
	rope3=new rope(bob3.body,roofObject.body,0, 0)
	rope4=new rope(bob4.body,roofObject.body,40, 0)
	rope5=new rope(bob5.body,roofObject.body,80, 0)
	
	time2= createSprite(745,25,70,12);
	time2.shapeColor="white";
	//time2.visible=false;

	customer1= createSprite(200,500,100,200);
    customer1.addImage(c1Img);
	customer1.scale=0.12;
	customer1.visible=false;

	customer2= createSprite(80,520,50,200);
    customer2.addImage(c2Img);
	customer2.scale=0.061;
	customer2.visible=false;

	customer3= createSprite(720,480,100,200);
    customer3.addImage(c3Img);
	customer3.scale=0.081;
	customer3.visible=false;

	customer4= createSprite(600,500,100,200);
	customer4.addImage(c4Img);
	customer4.scale=0.4;
	customer4.visible=false;

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(backGroundimg);

  if(customer1.visible===true){
	fill ("red")
	//textSize(25);
	text("OPEN",330,160)
  }

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

 time2.display();

 customer1.display();
 customer2.display();
 customer3.display();
 customer4.display();

 fill("skyblue")
 text("Time=10:00",710,69);

 fill("skyblue")
 text("Time=9:59",710,30);  

 stroke(5);
 fill("red")
 textSize(25);
 text("SPORTS",380,70);  
 
 
	 fill("yellow")
	 text("shop will be open at 10:00,be ready to shop!!",30,30); 
 

	
}

function keyPressed(){

   if (keyCode === UP_ARROW ){
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:50,y:45});
	   time2.x=745;
	   time2.y=63;
	   time=0;
	   customer1.visible=true;
	   customer2.visible=true;
	   customer3.visible=true;
	  customer4.visible=true;
	 
	 
	   Song.play();
	 
   }
}




