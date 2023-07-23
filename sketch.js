
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var aviao;
var madeira_resistente;
var angle = 20;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var options = {
		isStatic: true,
	  };
	  aviao = Bodies.rectangle(500,590,1000,20,options);
	World.add(world,aviao);
	madeira_resistente = Bodies.rectangle(500,290,300,20,options);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  rect(aviao.position.x,aviao.position.y,1000,20);
  Matter.Body.rotate(madeira_resistente,angle);
  push();
  translate(madeira_resistente.position.x,madeira_resistente.position.y);
  rotate(angle);
  rect(0,0,300,20);
  pop();
  angle += 5;
  drawSprites();
 
}



