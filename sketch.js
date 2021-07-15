const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var Sn = [];

var bg;
var Boy;
var ground;
function preload(){
bg=loadImage("snow3.jpg");

}


function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,height,1200,20);
  Boy=new boy(550,400,160,300);

    
}
 


function draw() {
  background(bg);
 
 
  Engine.update(engine);

Boy.display();
ground.display();
 
  if(frameCount%60===0){
    Sn.push(new snow(random(width-780,width),50,50));

      }
      
      for (var j = 0; j < Sn.length; j++) {
        Sn[j].display();
      }
    

}


function keyPressed() {
  if (keyCode === 32) {

    Matter.Body.applyForce(Boy.body.position,Boy.body.position,{x:550,y:-600});

  
  }
}












