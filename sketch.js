
var dog, happyDog, database, foodS, foodStock

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)



  dog = createSprite(200,200,100,100);
  dog.addImage(dogImage);
  dog.scale = 0.1;
 
}

function draw() {  

  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDogImage);
  }
  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImage);
  }
  drawSprites();
 
  textSize(14);
  stroke("white")
  text("Note:Press UP_ARROW Key To Feed Drago Milk",100,20);
  text("Food Remaining : "+foodS,170,100)

}

function readStock(data){
   foodS = data.val();
   console.log("foodS", foodS);
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })

}



