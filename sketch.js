
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bottomEdgeImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftEdge= new Ground(483,665,10,120);
	rightEdge= new Ground(597,665,10,120);
	bottom= new BottomEdge(540,630,130,10);
	paperObject=new Paper(120,660,22);
	paperObject.scale=0.002;
	

	groundObject= new Ground(400,695,1800,10);
	keyPressed();
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  leftEdge.display();
  rightEdge.display();
  bottom.display();
  paperObject.display();
  
  groundObject.display();
  
  drawSprites();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:59,y:-69});
		
		
	}
}



