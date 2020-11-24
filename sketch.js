
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3;
var ground;
var paper;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 bin1 = new Dustbin(700, 660, 200, 20);
     bin2 = new Dustbin(805, 620, 20, 100);
	 bin3 =  new Dustbin(595, 620, 20, 100);
	 ground =  new Ground(width/2, 670, width, 20);
	 paper =  new Paper(200, 450, 15);
	 
	


	Engine.run(engine);
  
}


function draw() {
  background(0);
  bin1.display(); 
  bin2.display();
  bin3.display();
  ground.display();
  paper.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.Position, {x: 8, y: -8})
	}
    
}



