
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1,dustbin1,paper1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground1 = new ground(400,680,800,100)
  dustbin1 = new dustbin(300,650,100,100)
  paper1 =  new paper(150,100,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground1.display();
 dustbin1.display();
 paper1.display();
  drawSprites();
 
}



