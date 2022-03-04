var quadrado

function setup() {
  createCanvas(800,800);
  quadrado=createSprite(300,450,50,50)
  quadrado.shapeColor="purple"
}

function draw() 
{
  background(30);
  if(keyIsDown(UP_ARROW)){
quadrado.y=quadrado.y-3
background("blue")
  }
  if(keyIsDown(DOWN_ARROW)){
    quadrado.y=quadrado.y+3
    background("yellow")
      }
      if(keyIsDown(LEFT_ARROW)){
        quadrado.x=quadrado.x-3
        background("red")
          }
          if(keyIsDown(RIGHT_ARROW)){
            quadrado.x=quadrado.x+7
            background("green")
              }
drawSprites()
}




