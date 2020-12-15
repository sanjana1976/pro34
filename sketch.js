//Create variables here
var dog, dogImg,hdogIm, happydog;
var database;
var foodS,foodstock;

function preload()
{ dogIm= loadImage("images/dogImg.png");
hdogIm= loadImage("images/dogImg1.png");

	//load images here
}

function setup() {
  createCanvas(1500,1500);
  background(46, 139, 87);
  database = firebase.database();

  dog=createSprite(400,400,2,2);
  dog.addImage(dogIm);
  

  foodstock= database.ref("food");
  foodstock.on("value",readStock)
}


function draw() { 
  if(keyDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(hdogIm)
  }

  drawSprites();
  

}
function readStock(){
  foodS= data.val();
}
function writeStock(x){
database.ref('/').update({
 foodS:x 
})
if(x<=0){
  x=0;
}
else{
  x=x-1
}
}



