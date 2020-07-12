//Create variables here
var dog1,dog , happyDog;
var database;
var foodS , foodStock;

function preload()
{
  //load images here
  dog1 = loadImage("images/dog.png");
  happyDog = loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,200,50,60);
  
  dog.addImage("dog",dog1);
  dog.addImage("happyDog",happyDog)
  dog.scale = 0.5
  foodStock = database.ref('FOOD');
  foodStock.on("value",readStock);  
}
function draw() {
  background(46,139,87);
  text("Food Stock :",foodS,100,400 )
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    console.log(foodS);
    dog.changeImage("happyDog",happyDog);
  }
  drawSprites();
  
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{
    x = x - 1;
  }
  database.ref('/').update({
    FOOD:x 
  })
}