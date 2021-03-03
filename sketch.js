var canvas;
var music;
var box;
var s1, s2, s3, s4;

function preload(){
   
}


function setup(){
    canvas = createCanvas(800,600);
    var box = createSprite(random(2,750),400,50,50);
    box.velocityY = 10;
  
    s1 = createSprite(100,600,100,50);
    s1.shapeColor = "red";
    s2 = createSprite(300,600,100,50);
    s2.shapeColor = "darkblue";

    s3 = createSprite(500,757,100,50);
    s3.shapeColor = "purple";
    
    s4 = createSprite(700,757,100,50);
    s4.shapeColor = "yellow";
    }
   

function draw() {
    background(0);
   
    if (s1.isTouching(box)){
        box.shapeColor = "red";
    }
   
  

    if (s2.isTouching(box)){
        box.shapeColor = "darkblue";
    }


    if (s3.isTouching(box)){
        box.shapeColor = "purple";
    }
 

    if (s4.isTouching(box)){
        box.shapeColor = "yellow";
    }

    drawSprites();
}
