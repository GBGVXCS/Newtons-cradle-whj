var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var ground,rope1,rope2,rope3,rope4,rope5,roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



	Engine.run(engine);

	bobObject1 = new bob(150,300);
	bobObject2 = new bob(190,300);
	bobObject3 = new bob(230,300);
	bobObject4 = new bob(270,300);
	bobObject5 = new bob(310,300);
	roof = new Roof(230,100,1200,20);
	rope1 = new rope(bobObject1.body,roof.body, -bobDiameter*2, 0);
	rope2 = new rope(bobObject2.body,roof.body, -bobDiameter*4, 0);
	rope3 = new rope(bobObject3.body,roof.body, -bobDiameter*6, 0);
	rope4 = new rope(bobObject4.body,roof.body, -bobDiameter*8, 0);
	rope5 = new rope(bobObject5.body,roof.body, -bobDiameter*10, 0);
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyCode === UP_ARROW){
	Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:85,y:-85});
   }
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



