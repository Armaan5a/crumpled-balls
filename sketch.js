const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 600);

    engine = Engine.create();
	myworld = engine.world;

	gr = new cup(800,570,215,15)
    gr1 = new cup(700,500,15,130)
	gr2 = new cup(900,500,15,130)
	gro = new ground(500,585,1100,15)
	ball = new Paper(150,450,30)

  Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(0);
  
  if(keyDown("up")){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80})
  }
  
  ball.display()
  gr.display()
  gr1.display()
  gr2.display()
  gro.display()
  drawSprites();
 
}