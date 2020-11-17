var pet,petimg,petimg2;
var database,foodS;

function preload()
{
  petimg = loadImage("images/dogImg.png");
  petimg2 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  pet = createSprite(250,350,5,5);
  pet.addImage(petimg);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readstock);
}


function draw() {  
background("green");
  drawSprites();
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogHappy);
}
text("note:Press UP_ARROW key to feed Drago Milk",150,50);

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref("/").update({
    food:x
  })
 
}
}




