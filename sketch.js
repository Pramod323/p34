const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground, hero;
var b1,b2,b3,b4,b5,b6,b7,b8,b,b10,b11,b12,b13;
var fly;
var monster;

function preload() {
bg = loadImage("images/background.png");

}

function setup() {
  createCanvas(800, 400);
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(300,270,600,10);
  hero = new Hero(110,60,60);

  fly = new Fly(hero.body, {x:108, y:30});

  b1 = new Block(310,245,40,40);
  b2 = new Block(310,205,40,40);
  b3 = new Block(310,165,40,40);
  b4 = new Block(310,125,40,40);
  b5 = new Block(310,85,40,40);
  b13 = new Block(310,45,40,40);

  b6 = new Block(380,245,40,40);
  b7 = new Block(380,205,40,40);

  b8 = new Block(450,245,40,40);
  b9 = new Block(450,205,40,40);
  b10 = new Block(450,165,40,40);
  b11 = new Block(450,125,40,40);
  b12 = new Block(450,85,40,40);

  monster = new Monster(550,190,70,70);

}

function draw() {
  Engine.update(engine);
  background(bg);

  rectMode(CENTER);
  ground.display();
  hero.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b13.display();

  b6.display();
  b7.display();

  b8.display();
  b9.display();
  b10.display();
  b11.display();

  monster.display();

  text(mouseX+" : "+mouseY,50,50);
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y:mouseY});
}

