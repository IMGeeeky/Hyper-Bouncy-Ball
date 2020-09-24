const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;

var object, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var obj_option = {
  isStatic:true
}

var ball_options = {
 restitution:2
}

  object = Bodies.rectangle(200, 390, 400, 10, obj_option);

ball = Bodies.circle(200, 200, 20, ball_options);

  World.add(world, object);

World.add(world, ball);

  console.log(object.position.x);

}

function draw() {
  background("black");
 
  Engine.update(engine);

  rectMode(CENTER);

  rect(object.position.x, object.position.y, 400, 10);

  ellipseMode(RADIUS);

  ellipse(ball.position.x, ball.position.y, 20, 20);
}