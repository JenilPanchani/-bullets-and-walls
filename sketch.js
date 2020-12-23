var wall;
var bullet;
var speed,weight,damage;
var thicknessofWall;

function setup() {
  createCanvas(1600,400);

  thicknessofWall=random(22,83);

  wall=createSprite(300,200,thicknessofWall,80);
  wall.shapeColor="red";
  
  //wall.debug = true

  bullet=createSprite(50,200,40,20);
  bullet.velocityX = 10;
  //bullet.debug = true;
  bullet.shapeColor="white";

  speed = random(223,321);
  weight = random(30,52);
  
  damage = calculateDamage(weight,speed,thicknessofWall);
  
}

function draw() {
  //console.log("speed = "+speed);
  //console.log("weight = "+weight);
  //console.log("damage = "+damage);
  background(0,0,0);  
  drawSprites();
  
  if(isTouching(wall)){
    bullet.velocityX = 0;

    if(damage >= 10) {
      wall.shapeColor="red";
    }
     else {
      wall.shapeColor="green";
    }

    reset();
  }
}

function isTouching(wall) {
  if(bullet.x -wall.x < wall.width/2 + bullet.width/2
        && wall.x - bullet.x < wall.width/2 + bullet.width/2
        && bullet.y - wall.y < wall.height/2 + bullet.height/2
        && wall.y - bullet.y < wall.height/2 + bullet.height/2){
    return true
  }
  else{
    return false;
  }
}

function calculateDamage(weight,speed,thicknessofWall) {
  return (0.5*weight*speed*speed)/(thicknessofWall*thicknessofWall*thicknessofWall);
}

function reset() {
    bullet.x = 50;
    bullet.velocityX = 10; 
    bullet.shapeColor = "white";
    speed = random(55,90);
    weight = random(400,1500);
    thicknessofWall=random(22,83);
    damage = calculateDamage(weight, speed, thicknessofWall);
}