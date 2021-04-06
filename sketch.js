const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var drops = []
var maxdrops = 100

var manimage 

var thunder1iamge
var thunder3image
var thunder2image
var thunder

var rand

function preload(){
    manimage = loadImage ("walking_1.png")

    thunder1iamge = loadImage("1.png")
    thunder2image = loadImage("2.png")
    thunder3image = loadImage("3.png")
}

function setup(){
createCanvas(400,800)


     
    engine = Engine.create();


    world = engine.world;


    umbrella = new Umbrella (250,400,70,10)

    if (frameCount%150===0){
        for(  var i = 0;i< maxdrops;i++){
            drops.push(new Drop(random(0,400),random(0,400)) )
        }
    }
}

function draw(){
    Engine.update(engine)
    background(255)


  for( var i = 0 ; i < maxdrops;i++){
      drops[i].display()
      drops[i].update()

  }
image(manimage,100,350,300,300)

rand = Math.round(random(1,3))
if (frameCount%80===0){
    thunder=createSprite(random(10,370),random(10,30),(10,10))
    switch(rand){
        case 1 : thunder.addImage(thunder1iamge)

        break;

        case 2 : thunder.addImage(thunder2image)

        break;


    case 3 : thunder.addImage(thunder3image)

    break;  
    }
}

}   

