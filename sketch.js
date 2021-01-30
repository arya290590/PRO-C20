var car,wall,indicator


function setup() {
  createCanvas(1600,400);
  car = createSprite(100,200, 50, 50);

  wall = createSprite(1500,200,60,height/2);

  indicator = createSprite(270,45.5,10,10)

  rand = Math.round(random(55,90));
  speed = (rand)
  Rand = Math.round(random(400,1500));
  weight = (Rand)
   
 
  
  

}

function draw() {
  background("black"); 

  text('PRESS SPACE TO BEGIN SIMULATION',600,150)
  text('SEVERITY OF COLLISSION:',100,50)
  text.fill = car.shapeColor
 
  car.depth = wall.depth+ 1

  indicator.shapeColor = car.shapeColor
 

 if(wall.x-car.x < (car.width+wall.width)/2){

  car.velocityX = 0
  deformation = 0.5*weight*speed*speed/22500
  console.log(deformation)
  
  if(deformation < 100){
    car.shapeColor  = "lightgreen"
 }
  
 if(deformation> 100 && deformation<180){
   
      car.shapeColor = "yellow"
 }


 if(deformation> 180){
   car.shapeColor = "red"
 }



  }


  

  drawSprites();
}


function keyPressed(){

 if(keyCode === 32){
    car.velocityX = speed;
 }

}