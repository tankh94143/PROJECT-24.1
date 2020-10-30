var ball, side1, side2, side3; 


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
	ball = new Paper (100,100,20)

	side1 = new Bucket (1100,610,20,100)
	side2 = new Bucket (900,610,20,100)
	side3 = new Bucket (1000, 650, 200,20)

}	


function draw() {
  rectMode(CENTER);
  background(0);
  
ball.display();
side1.display();
side2.display();
side3.display();

  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x: 80, y:-80})
	}
}




