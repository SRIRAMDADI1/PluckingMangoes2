
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000,125,30)
	mango3 = new mango(1050,200,30)
	mango4 = new mango(1200,175,30)
	mango5 = new mango(950,225,30)
	stone = new Stone(225,425,50)
	chain = new Chain(stone.body,{x:225,y:425})
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display()
  mango4.display();
  mango5.display()
  chain.display();

  groundObject.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	chain.fly()
}
function detectCollision(lstone,lmango){
	mangoBodyposition = lmango.body.position 
	stoneBodyposition = lstone.body.position 
	var distance = dist(stoneBodyposition.x,stoneBodyposition.y,mangoBodyposition.x,mangoBodyposition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}


function keyPressed(){
    if(keyCode===32){
        chain.attach(stone.body)
    }
}