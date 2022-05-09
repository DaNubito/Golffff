const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_img;
var ground;
var ground2;
var flag;
var flag_Img;
var bgMusic;
var xForce = 0.02;
var yForce = 0.05;
var StarBg;

function preload()
{
	ball_img = loadImage("ball-removebg-preview.png")
	StarBg = loadImage("StarsBg.webp")
	flag_Img = loadImage("golfHole-removebg-preview.png")

	//bgMusic = loadSound("Sans.mp3")
    //bgMusic.playing = true
	//bgMusic.looping = true
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create();
	world = engine.world;

	//bgMusic.play();

    ball = Bodies.circle(30 ,windowHeight-32,15)
	World.add(world, ball)



	ground = new Ground(windowWidth/5,windowHeight-20,windowWidth,10)
	ground2 = new Ground(1400,windowHeight-20,480,10)
	flag = Bodies.rectangle(1169,windowHeight-174,10,100,{isStatic:true})
	World.add(world,flag)
	form = new Form()

	
	
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(StarBg);
  ground.display();
  ground2.display();
  form.display();
  imageMode(CENTER);
  image(ball_img,ball.position.x,ball.position.y,45,30)
  console.log(flag.position.x)
  image(flag_Img,flag.position.x,flag.position.y,500,700)


  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode===32){
		console.log()
		Matter.Body.applyForce(ball,ball.position,{x:xForce,y:-yForce})
	}
}



