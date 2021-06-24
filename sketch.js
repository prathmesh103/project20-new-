var car 
var wall 
var speed,weight


function setup() {
  createCanvas(1600,400);
  
 
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  car.velocityX=speed
  deformation=(0.5*weight*speed*speed)/22500
  
  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
  
}

function draw() {
  background(0,0,0);
  if(wall.x-car.x<=wall.width/2+car.width/2){
    car.velocityX=0
 if(deformation<100){
   car.shapecolor=color(0,255,0)
 }
 if(deformation<180 && deformation>100){
  car.shapecolor=color(230,230,0)
 }
 if(deformation>180){
  car.shapecolor=color(255,0,0)
 }
  }  
  drawSprites();
  
}