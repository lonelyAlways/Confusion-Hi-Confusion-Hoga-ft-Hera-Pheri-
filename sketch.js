var a;
var ground,Slingshot;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  
  
  box8=new Block(330,235,30,40)
  box9=new Block(360,235,30,40)
  box10=new Block(390,235,30,40)
  box11=new Block(420,235,30,40)
  box12=new Block(450,235,30,40)

  box13=new Block(360,195,30,40)
  box14=new Block(390,195,30,40)
  box15=new Block(420,195,30,40)
  
  box16=new Block(390,195,30,40)
  

  a=height;
  circles.push(width/2)
}

function draw() {
  
  background(0);  
  a=a-1;

 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 //camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 