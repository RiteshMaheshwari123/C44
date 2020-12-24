const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player,player_img
var background_img

var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,
enemy8,enemy9,enemy10,enemy11,enemy12;

var health1 = 2,health2 = 2,health3 = 2,health4 = 2,
health5 = 2,health6 = 2,health7 = 2,health8 = 2;

var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;

function preload(){
    background_img = loadImage("images/map-image.png");
    player_img = loadImage("images/player.png");
}

function setup(){
    createCanvas(1000,1000);
    engine = Engine.create();
    world = engine.world;

    //walls(to block player)

    //horizontal walls
    wall1 = createSprite(500,12,1000,20);
    //wall1.visible = false;

    wall2 = createSprite(300,70,250,20);
    //wall2.visible = false;

    wall3 = createSprite(500,987,1000,20);
    //wall3.visible = false;

    wall6 = createSprite(490,120,120,20);
    //wall6.visible = false;

    //verticle walls
    wall4 = createSprite(5,500,20,1000);
    //wall4.visible = false;

    wall5 = createSprite(987,500,20,1000);
    //wall5.visible = false;

    wall7 = createSprite(430,100,20,80);
    //wall7.visible = false;

    player = createSprite(50,100,100,100);
    player.addImage("player",player_img);
    player.scale = 0.009;
    player.debug = true;
    player.setCollider("circle",0,0,30)

    //enemy1 = new Enemy1(200,500,100,100);
    //enemy2 = new Enemy1(100,600,100,100);
    //enemy3 = new Enemy1(400,200,100,100);
    //enemy4 = new Enemy1(500,200,100,100);
    //enemy5 = new Enemy2(600,200,100,100);
    //enemy6 = new Enemy2(700,200,100,100);
    //enemy7 = new Enemy2(800,200,100,100);
    //enemy8 = new Enemy2(900,200,100,100);
    //enemy9 = new Enemy2(200,200,100,100);
    //enemy10 = new Enemy2(200,700,100,100);
    //enemy11 = new Enemy2(200,800,100,100);
    //enemy12 = new Enemy2(200,400,100,100);

}

function draw(){
    background(background_img);
    Engine.update(engine);
    //image(background_img,0,0,5000,5000);

    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(wall4);
    player.collide(wall5);
    player.collide(wall6);
    player.collide(wall7);
    player.collide(wall8);
    //player.collide(wall9);
    //player.collide(wall10);
    //player.collide(wall11);


    if (keyDown("w")){
        player.y = player.y - 10;
    }

    if (keyDown("s")){
        player.y = player.y + 10;
    }

    if (keyDown("d")){
        player.x = player.x + 10;
    }

    if (keyDown("a")){
        player.x = player.x - 10;
    }
    drawSprites();
    enemy1.display();
    enemy2.display();
    enemy3.display();
    enemy4.display();
    enemy5.display();
    enemy6.display();
    enemy7.display();
    enemy8.display();
    enemy9.display();
    enemy10.display();
    enemy12.display();
    enemy11.display();


}