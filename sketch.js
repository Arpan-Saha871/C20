var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 100, 80, 50);
  movingRect=createSprite(400,300,50,50);

  fixedRect.shapeColor="pink";
  movingRect.shapeColor="pink";

  fixedRect.debug=true;
  movingRect.debug=true;

  /*movingRect.velocityX=1;
  fixedRect.velocityX=-1;*/


movingRect.velocityY=-1;
  fixedRect.velocityY=1


  
}

function draw() {
  background("green"); 
  
 /* movingRect.x=mouseX;
  movingRect.y=mouseY;*/
  console.log(movingRect.x);


  if(movingRect.x-fixedRect.x<fixedRect.width/2 +movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2 +movingRect.width/2 )
    {
      movingRect.velocityX=movingRect.velocityX * -1
      fixedRect.velocityX=fixedRect.velocityX*-1;
    }


    if(movingRect.y-fixedRect.y<fixedRect.height/2 +movingRect.height/2 &&
      fixedRect.y-movingRect.y<fixedRect.height/2 +movingRect.height/2 )
      {
        movingRect.velocityY=movingRect.velocityY * -1
        fixedRect.velocityY=fixedRect.velocityY*-1;
      }

  /*if(movingRect.x-fixedRect.x<fixedRect.width/2 +movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2 +movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2 +movingRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2 +movingRect.height/2)
  {

    fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";

  }

  else 
  {
    fixedRect.shapeColor="pink";
   movingRect.shapeColor="pink";

  }*/



  drawSprites();
}