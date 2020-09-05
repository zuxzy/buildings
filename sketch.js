var families = 365
var familyplus = Math.round(families/2)

class handle{
  constructor(){
    this.xPosition = 0;
    this.yPosition = 0;
    this.width = 17;
    this.height = 7;
    fill(100, 50, 12)
  }
  
  display(){
    rect(this.xPosition, this.yPosition, this.width,  this.height);
  }
}

class Window{
  constructor(){
    this.xPosition = 0;
    this.yPosition = 0;
    this.width = 35;
    this.height = 80;
    fill("orange")
  }
  
  display(){
    rect(this.xPosition, this.yPosition, this.width,  this.height);
  }
}
    
class building {
  constructor(){
    this.xPosition = 0;
    this.yPosition = 0;
    this.width = 60;
    this.height = 10;
    fill("black")
  }
  
  display(){
    rect(this.xPosition, this.yPosition, this.width,   this.height);
  }
}

class moon{
  constructor(){
    this.xPosition = 550;
    this.yPosition = 60;
    this.radius = 80;
    fill("white")
  }
  
display(){
    circle(this.xPosition, this.yPosition, this.radius);
  }
}

class star{
  constructor(){
    this.xPosition = 550;
    this.yPosition = 60;
    this.radius = 80;
    fill("white")
  }
  
display(){
    circle(this.xPosition, this.yPosition, this.radius);
  }
}


function setup(){
  createCanvas(600,600);
}

function draw() {
  background(13, 37, 71);
  
  var star1 = new star();
  star1.xPosition = 50;
  star1.yPosition = 7;
  star1.radius = 8;
  star1.display();
  var star2 = new star();
  star2.xPosition = 300;
  star2.yPosition = 300;
  star2.radius = 15;
  star2.display();
  var star3 = new star();
  star3.xPosition = 35;
  star3.yPosition = 67;
  star3.radius = 10;
  star3.display();
  var star4 = new star();
  star4.xPosition = 279;
  star4.yPosition = 120;
  star4.radius = 9;
  star4.display();
  var star5 = new star();
  star5.xPosition = 334;
  star5.yPosition = 123;
  star5.radius = 12;
  star5.display();
  var star6 = new star();
  star6.xPosition = 165;
  star6.yPosition = 457;
  star6.radius = 13;
  star6.display();
  var star7 = new star();
  star7.xPosition = 476;
  star7.yPosition = 224;
  star7.radius = 6;
  star7.display();
  var star8 = new star();
  star8.xPosition = 177;
  star8.yPosition = 122;
  star8.radius = 6;
  star8.display();
  var star9 = new star();
  star9.xPosition = 499;
  star9.yPosition = 76;
  star9.radius = 11;
  star9.display();
  var star10 = new star();
  star10.xPosition = 234;
  star10.yPosition = 102;
  star10.radius = 15;
  star10.display();
  var star11 = new star();
  star11.xPosition = 133;
  star11.yPosition = 87;
  star11.radius = 14;
  star11.display();
  var star12 = new star();
  star12.xPosition = 406;
  star12.yPosition = 23;
  star12.radius = 10;
  star12.display();
  var star13 = new star();
  star13.xPosition = 313;
  star13.yPosition = 37;
  star13.radius = 13;
  star13.display();
  var star14 = new star();
  star14.xPosition = 427;
  star14.yPosition = 94;
  star14.radius = 8;
  star14.display();
  
  var Moon = new moon();
  Moon.display();
  
  var building1 = new building();
  if (families <= 50){
    building1.xPosition = 270;
    building1.yPosition = 600-(24*familyplus);
    building1.width = 45;
    building1.height = 24*familyplus;
    building1.display();
    fill("black");
  }
  if (families  > 50){
    if (families <= 150){
      building1.xPosition = 270;
      building1.width = 45;
      if (Math.round(familyplus/3) == familyplus/3){
        building1.height = 24*(familyplus/3);
        building1.yPosition = 600-(24*(familyplus/3));
        building1.display();
        fill("black");
      }  
      if (Math.round(familyplus/3) == (familyplus/3) - (1/3)){
        building1.height = 24*((familyplus/3) + (2/3));
        building1.yPosition = 600-(24*((familyplus/3) + (2/3)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/3) == (familyplus/3) + (1/3)){
        building1.height = 24*((familyplus/3) - (2/3));
        building1.yPosition = 600-(24*((familyplus/3) - (2/3)));
        building1.display();
        fill("black");
      }
    }
  }
  if (families > 150){
    if (families <= 250){
      building1.xPosition = 270;
      building1.width = 45;
      if (Math.round(familyplus/5) == familyplus/5){
        building1.height = 24*(familyplus/5);
        building1.yPosition = 600-(24*(familyplus/5));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) - (1/5))){
        building1.height = 24*((familyplus/5) + (4/5));
        building1.yPosition = 600-(24*((familyplus/5) + (4/5)));
        building1.display();
        fill("black");
      }
      if ((Math.round(familyplus/5) + 1) == ((familyplus/5) + (3/5))){
        building1.height = 24*((familyplus/5) - (2/5));
        building1.yPosition = 600-(24*((familyplus/5) - (2/5)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (2/5))){
        building1.height = 24*((familyplus/5) + (2/5));
        building1.yPosition = 600-(24*((familyplus/5) + (2/5)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (1/5))){
        building1.height = 24*((familyplus/5) - (4/5));
        building1.yPosition = 600-(24*((familyplus/5) - (4/5)));
        building1.display();
        fill("black");
      }
    }
  }
  if (families > 250){
    if (families <= 350){
    building1.xPosition = 270;
    building1.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building1.height = 24*(familyplus/7);
        building1.yPosition = 600-(24*(familyplus/7));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building1.height = 24*((familyplus/7) + (6/7));
        building1.yPosition = 600-(24*((familyplus/7) + (6/7)));
        building1.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building1.height = 24*((familyplus/7) - (2/7));
        building1.yPosition = 600-(24*((familyplus/7) - (2/7)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building1.height = 24*((familyplus/7) + (4/7));
        building1.yPosition = 600-(24*((familyplus/7) + (4/7)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building1.height = 24*((familyplus/7) - (4/7));
        building1.yPosition = 600-(24*((familyplus/7) - (4/7)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building1.height = 24*((familyplus/7) + (2/7));
        building1.yPosition = 600-(24*((familyplus/7) + (2/7)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building1.height = 24*((familyplus/7) - (6/7));
        building1.yPosition = 600-(24*((familyplus/7) - (6/7)));
        building1.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building1.xPosition = 270;
    building1.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building1.height = 24*(familyplus/9);
        building1.yPosition = 600-(24*(familyplus/9));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building1.height = 24*((familyplus/9) + (8/9));
        building1.yPosition = 600-(24*((familyplus/9) + (8/9)));
        building1.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building1.height = 24*((familyplus/9) - (2/9));
        building1.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building1.height = 24*((familyplus/9) + (6/9));
        building1.yPosition = 600-(24*((familyplus/9) + (6/9)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building1.height = 24*((familyplus/9) - (4/9));
        building1.yPosition = 600-(24*((familyplus/9) - (4/9)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building1.height = 24*((familyplus/9) + (4/9));
        building1.yPosition = 600-(24*((familyplus/9) + (4/9)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building1.height = 24*((familyplus/9) - (6/9));
        building1.yPosition = 600-(24*((familyplus/9) - (6/9)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building1.height = 24*((familyplus/9) + (2/9));
        building1.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building1.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building1.height = 24*((familyplus/9) - (8/9));
        building1.yPosition = 600-(24*((familyplus/9) - (8/9)));
        building1.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
      building1.xPosition = 300;
      building1.width = 45;
      if (Math.round((familyplus % 10)/2) == ((familyplus % 10)/2)){
        building1.height = 24*(Math.floor(familyplus/10));
        building1.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building1.display();
        fill("black");
      }
      if (Math.round((familyplus % 10)/2) != ((familyplus % 10)/2)){
        building1.height = 24*(Math.floor(familyplus/10) + 1);
        building1.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building1.display();
        fill("black");
      }
    }
  }
      
  var building2 = new building();
  if (families <= 50){
    building2.xPosition = 60;
    building2.yPosition = -1;
    building2.width = 45;
    building2.height = 0;
    building2.display();
    fill("black");
  }
  if (families  > 50){
    if (families <= 150){
      building2.xPosition = 210;
      building2.width = 45;
      if (Math.round(familyplus/3) == familyplus/3){
        building2.height = 24*(familyplus/3);
        building2.yPosition = 600-(24*(familyplus/3));
        building2.display();
        fill("black");
      }  
      if (Math.round(familyplus/3) == (familyplus/3) - (1/3)){
        building2.height = 24*((familyplus/3) - (1/3));
        building2.yPosition = 600-(24*((familyplus/3) - (1/3)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/3) == (familyplus/3) + (1/3)){
        building2.height = 24*((familyplus/3) + (1/3));
        building2.yPosition = 600-(24*((familyplus/3) + (1/3)));
        building2.display();
        fill("black");
      }
    }
  }
  if (families > 150){
    if (families <= 250){
      building2.xPosition = 210;
      building2.width = 45;
      if (Math.round(familyplus/5) == familyplus/5){
        building2.height = 24*(familyplus/5);
        building2.yPosition = 600-(24*(familyplus/5));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) - (1/5))){
        building2.height = 24*((familyplus/5) - (1/5));
        building2.yPosition = 600-(24*((familyplus/5) - (1/5)));
        building2.display();
        fill("black");
      }
      if ((Math.round(familyplus/5) + 1) == ((familyplus/5) + (3/5))){
        building2.height = 24*((familyplus/5) + (3/5));
        building2.yPosition = 600-(24*((familyplus/5) + (3/5)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (2/5))){
        building2.height = 24*((familyplus/5) + (2/5));
        building2.yPosition = 600-(24*((familyplus/5) + (2/5)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (1/5))){
        building2.height = 24*((familyplus/5) + (1/5));
        building2.yPosition = 600-(24*((familyplus/5) + (1/5)));
        building2.display();
        fill("black");
      }
    }
  }
  if (families > 250){
    if (families <= 350){
    building2.xPosition = 210;
    building2.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building2.height = 24*(familyplus/7);
        building2.yPosition = 600-(24*(familyplus/7));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building2.height = 24*((familyplus/7) - (1/7));
        building2.yPosition = 600-(24*((familyplus/7) - (1/7)));
        building2.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building2.height = 24*((familyplus/7) + (5/7));
        building2.yPosition = 600-(24*((familyplus/7) + (5/7)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building2.height = 24*((familyplus/7) + (4/7));
        building2.yPosition = 600-(24*((familyplus/7) + (4/7)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building2.height = 24*((familyplus/7) + (3/7));
        building2.yPosition = 600-(24*((familyplus/7) + (3/7)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building2.height = 24*((familyplus/7) + (2/7));
        building2.yPosition = 600-(24*((familyplus/7) + (2/7)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building2.height = 24*((familyplus/7) + (1/7));
        building2.yPosition = 600-(24*((familyplus/7) + (1/7)));
        building2.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building2.xPosition = 210;
    building2.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building2.height = 24*(familyplus/9);
        building2.yPosition = 600-(24*(familyplus/9));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building2.height = 24*((familyplus/9) - (1/9));
        building2.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building2.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building2.height = 24*((familyplus/9) + (7/9));
        building2.yPosition = 600-(24*((familyplus/9) + (7/9)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building2.height = 24*((familyplus/9) + (6/9));
        building2.yPosition = 600-(24*((familyplus/9) + (6/9)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building2.height = 24*((familyplus/9) + (5/9));
        building2.yPosition = 600-(24*((familyplus/9) + (5/9)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building2.height = 24*((familyplus/9) + (4/9));
        building2.yPosition = 600-(24*((familyplus/9) + (4/9)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building2.height = 24*((familyplus/9) + (3/9));
        building2.yPosition = 600-(24*((familyplus/9) + (3/9)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building2.height = 24*((familyplus/9) + (2/9));
        building2.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building2.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building2.height = 24*((familyplus/9) + (1/9));
        building2.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building2.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
      building2.xPosition = 240;
      building2.width = 45;
      building2.height = 24*(Math.floor(familyplus/10));
      building2.yPosition = 600 - (24*(Math.floor(familyplus/10)));
      building2.display();
      fill("black");
    }
  }
  
  var building3 = new building();
  if (families <= 50){
    building3.xPosition = 120;
    building3.yPosition = -1;
    building3.width = 60;
    building3.height = 0;
    building3.display();
    fill("black");
  }
  if (families  > 50){
    if (families <= 150){
      building3.xPosition = 330;
      building3.width = 45;
      if (Math.round(familyplus/3) == familyplus/3){
        building3.height = 24*(familyplus/3);
        building3.yPosition = 600-(24*(familyplus/3));
        building3.display();
        fill("black");
      }  
      if (Math.round(familyplus/3) == (familyplus/3) - (1/3)){
        building3.height = 24*((familyplus/3) - (1/3));
        building3.yPosition = 600-(24*((familyplus/3) - (1/3)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/3) == (familyplus/3) + (1/3)){
        building3.height = 24*((familyplus/3) + (1/3));
        building3.yPosition = 600-(24*((familyplus/3) + (1/3)));
        building3.display();
        fill("black");
      }
    }
  }
  if (families > 150){
    if (families <= 250){
      building3.xPosition = 330;
      building3.width = 45;
      if (Math.round(familyplus/5) == familyplus/5){
        building3.height = 24*(familyplus/5);
        building3.yPosition = 600-(24*(familyplus/5));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) - (1/5))){
        building3.height = 24*((familyplus/5) - (1/5));
        building3.yPosition = 600-(24*((familyplus/5) - (1/5)));
        building3.display();
        fill("black");
      }
      if ((Math.round(familyplus/5) + 1) == ((familyplus/5) + (3/5))){
        building3.height = 24*((familyplus/5) + (3/5));
        building3.yPosition = 600-(24*((familyplus/5) + (3/5)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (2/5))){
        building3.height = 24*((familyplus/5) + (2/5));
        building3.yPosition = 600-(24*((familyplus/5) + (2/5)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (1/5))){
        building3.height = 24*((familyplus/5) + (1/5));
        building3.yPosition = 600-(24*((familyplus/5) + (1/5)));
        building3.display();
        fill("black");
      }
    }
  }
  if (families > 250){
    if (families <= 350){
    building3.xPosition = 330;
    building3.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building3.height = 24*(familyplus/7);
        building3.yPosition = 600-(24*(familyplus/7));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building3.height = 24*((familyplus/7) - (1/7));
        building3.yPosition = 600-(24*((familyplus/7) - (1/7)));
        building3.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building3.height = 24*((familyplus/7) + (5/7));
        building3.yPosition = 600-(24*((familyplus/7) + (5/7)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building3.height = 24*((familyplus/7) + (4/7));
        building3.yPosition = 600-(24*((familyplus/7) + (4/7)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building3.height = 24*((familyplus/7) + (3/7));
        building3.yPosition = 600-(24*((familyplus/7) + (3/7)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building3.height = 24*((familyplus/7) + (2/7));
        building3.yPosition = 600-(24*((familyplus/7) + (2/7)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building3.height = 24*((familyplus/7) + (1/7));
        building3.yPosition = 600-(24*((familyplus/7) + (1/7)));
        building3.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building3.xPosition = 330;
    building3.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building3.height = 24*(familyplus/9);
        building3.yPosition = 600-(24*(familyplus/9));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building3.height = 24*((familyplus/9) - (1/9));
        building3.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building3.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building3.height = 24*((familyplus/9) + (7/9));
        building3.yPosition = 600-(24*((familyplus/9) + (7/9)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building3.height = 24*((familyplus/9) + (6/9));
        building3.yPosition = 600-(24*((familyplus/9) + (6/9)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building3.height = 24*((familyplus/9) + (5/9));
        building3.yPosition = 600-(24*((familyplus/9) + (5/9)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building3.height = 24*((familyplus/9) + (4/9));
        building3.yPosition = 600-(24*((familyplus/9) + (4/9)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building3.height = 24*((familyplus/9) + (3/9));
        building3.yPosition = 600-(24*((familyplus/9) + (3/9)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building3.height = 24*((familyplus/9) + (2/9));
        building3.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building3.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building3.height = 24*((familyplus/9) + (1/9));
        building3.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building3.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building3.xPosition = 180;
    building3.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 4){
        building3.height = 24*(Math.floor(familyplus/10) + 1);
        building3.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building3.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 4){
        building3.height = 24*(Math.floor(familyplus/10));
        building3.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building3.display();
        fill("black");
      }
    }
  }
  
  var building4 = new building();
  if (families <= 50){
    building4.xPosition = 180;
    building4.yPosition = -1;
    building4.width = 45;
    building4.height = 0;
    building4.display();
    fill("black");
  }
  if (families > 150){
    if (families <= 250){
      building4.xPosition = 150;
      building4.width = 45;
      if (Math.round(familyplus/5) == familyplus/5){
        building4.height = 24*(familyplus/5);
        building4.yPosition = 600-(24*(familyplus/5));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) - (1/5))){
        building4.height = 24*((familyplus/5) - (1/5));
        building4.yPosition = 600-(24*((familyplus/5) - (1/5)));
        building4.display();
        fill("black");
      }
      if ((Math.round(familyplus/5)) == ((familyplus/5) - (2/5))){
        building4.height = 24*((familyplus/5) - (2/5));
        building4.yPosition = 600-(24*((familyplus/5) - (2/5)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (2/5))){
        building4.height = 24*((familyplus/5) - (3/5));
        building4.yPosition = 600-(24*((familyplus/5) - (3/5)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (1/5))){
        building4.height = 24*((familyplus/5) + (1/5));
        building4.yPosition = 600-(24*((familyplus/5) + (1/5)));
        building4.display();
        fill("black");
      }
    }
  }
  if (families > 250){
    if (families <= 350){
    building4.xPosition = 150;
    building4.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building4.height = 24*(familyplus/7);
        building4.yPosition = 600-(24*(familyplus/7));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building4.height = 24*((familyplus/7) - (1/7));
        building4.yPosition = 600-(24*((familyplus/7) - (1/7)));
        building4.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building4.height = 24*((familyplus/7) - (2/7));
        building4.yPosition = 600-(24*((familyplus/7) - (2/7)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building4.height = 24*((familyplus/7) - (3/7));
        building4.yPosition = 600-(24*((familyplus/7) - (3/7)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building4.height = 24*((familyplus/7) + (3/7));
        building4.yPosition = 600-(24*((familyplus/7) + (3/7)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building4.height = 24*((familyplus/7) + (2/7));
        building4.yPosition = 600-(24*((familyplus/7) + (2/7)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building4.height = 24*((familyplus/7) + (1/7));
        building4.yPosition = 600-(24*((familyplus/7) + (1/7)));
        building4.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building4.xPosition = 150;
    building4.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building4.height = 24*(familyplus/9);
        building4.yPosition = 600-(24*(familyplus/9));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building4.height = 24*((familyplus/9) - (1/9));
        building4.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building4.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building4.height = 24*((familyplus/9) - (2/9));
        building4.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building4.height = 24*((familyplus/9) - (3/9));
        building4.yPosition = 600-(24*((familyplus/9) - (3/9)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building4.height = 24*((familyplus/9) + (5/9));
        building4.yPosition = 600-(24*((familyplus/9) + (5/9)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building4.height = 24*((familyplus/9) + (4/9));
        building4.yPosition = 600-(24*((familyplus/9) + (4/9)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building4.height = 24*((familyplus/9) + (3/9));
        building4.yPosition = 600-(24*((familyplus/9) + (3/9)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building4.height = 24*((familyplus/9) + (2/9));
        building4.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building4.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building4.height = 24*((familyplus/9) + (1/9));
        building4.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building4.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building4.xPosition = 360;
    building4.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 4){
        building4.height = 24*(Math.floor(familyplus/10) + 1);
        building4.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building4.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 4){
        building4.height = 24*(Math.floor(familyplus/10));
        building4.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building4.display();
        fill("black");
      }
    }
  }
  
  var building5 = new building();
  if (families <= 50){
    building5.xPosition = 240;
    building5.yPosition = -1;
    building5.width = 45;
    building5.height = 0;
    building5.display();
    fill("black");
  }
  if (families > 150){
    if (families <= 250){
      building5.xPosition = 390;
      building5.width = 45;
      if (Math.round(familyplus/5) == familyplus/5){
        building5.height = 24*(familyplus/5);
        building5.yPosition = 600-(24*(familyplus/5));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) - (1/5))){
        building5.height = 24*((familyplus/5) - (1/5));
        building5.yPosition = 600-(24*((familyplus/5) - (1/5)));
        building5.display();
        fill("black");
      }
      if ((Math.round(familyplus/5)) == ((familyplus/5) - (2/5))){
        building5.height = 24*((familyplus/5) - (2/5));
        building5.yPosition = 600-(24*((familyplus/5) - (2/5)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (2/5))){
        building5.height = 24*((familyplus/5) - (3/5));
        building5.yPosition = 600-(24*((familyplus/5) - (3/5)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/5) == ((familyplus/5) + (1/5))){
        building5.height = 24*((familyplus/5) + (1/5));
        building5.yPosition = 600-(24*((familyplus/5) + (1/5)));
        building5.display();
        fill("black");
      }
    }
  }
  if (families > 250){
    if (families <= 350){
    building5.xPosition = 390;
    building5.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building5.height = 24*(familyplus/7);
        building5.yPosition = 600-(24*(familyplus/7));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building5.height = 24*((familyplus/7) - (1/7));
        building5.yPosition = 600-(24*((familyplus/7) - (1/7)));
        building5.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building5.height = 24*((familyplus/7) - (2/7));
        building5.yPosition = 600-(24*((familyplus/7) - (2/7)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building5.height = 24*((familyplus/7) - (3/7));
        building5.yPosition = 600-(24*((familyplus/7) - (3/7)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building5.height = 24*((familyplus/7) + (3/7));
        building5.yPosition = 600-(24*((familyplus/7) + (3/7)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building5.height = 24*((familyplus/7) + (2/7));
        building5.yPosition = 600-(24*((familyplus/7) + (2/7)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building5.height = 24*((familyplus/7) + (1/7));
        building5.yPosition = 600-(24*((familyplus/7) + (1/7)));
        building5.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building5.xPosition = 390;
    building5.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building5.height = 24*(familyplus/9);
        building5.yPosition = 600-(24*(familyplus/9));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building5.height = 24*((familyplus/9) - (1/9));
        building5.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building5.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building5.height = 24*((familyplus/9) - (2/9));
        building5.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building5.height = 24*((familyplus/9) - (3/9));
        building5.yPosition = 600-(24*((familyplus/9) - (3/9)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building5.height = 24*((familyplus/9) + (5/9));
        building5.yPosition = 600-(24*((familyplus/9) + (5/9)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building5.height = 24*((familyplus/9) + (4/9));
        building5.yPosition = 600-(24*((familyplus/9) + (4/9)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building5.height = 24*((familyplus/9) + (3/9));
        building5.yPosition = 600-(24*((familyplus/9) + (3/9)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building5.height = 24*((familyplus/9) + (2/9));
        building5.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building5.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building5.height = 24*((familyplus/9) + (1/9));
        building5.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building5.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building5.xPosition = 120;
    building5.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 3){
        building5.height = 24*(Math.floor(familyplus/10) + 1);
        building5.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building5.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 3){
        building5.height = 24*(Math.floor(familyplus/10));
        building5.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building5.display();
        fill("black");
      }
    }
  }
  
  var building6 = new building();
  if (families <= 50){
    building6.xPosition = 300;
    building6.yPosition = -1;
    building6.width = 45;
    building6.height = 0;
    building6.display();
  }
  if (families > 250){
    if (families < 350){
    building6.xPosition = 90;
    building6.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building6.height = 24*(familyplus/7);
        building6.yPosition = 600-(24*(familyplus/7));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building6.height = 24*((familyplus/7) - (1/7));
        building6.yPosition = 600-(24*((familyplus/7) - (1/7)));
        building6.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building6.height = 24*((familyplus/7) - (2/7));
        building6.yPosition = 600-(24*((familyplus/7) - (2/7)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building6.height = 24*((familyplus/7) - (3/7));
        building6.yPosition = 600-(24*((familyplus/7) - (3/7)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building6.height = 24*((familyplus/7) - (4/7));
        building6.yPosition = 600-(24*((familyplus/7) - (4/7)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building6.height = 24*((familyplus/7) - (5/7));
        building6.yPosition = 600-(24*((familyplus/7) - (5/7)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building6.height = 24*((familyplus/7) + (1/7));
        building6.yPosition = 600-(24*((familyplus/7) + (1/7)));
        building6.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building6.xPosition = 90;
    building6.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building6.height = 24*(familyplus/9);
        building6.yPosition = 600-(24*(familyplus/9));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building6.height = 24*((familyplus/9) - (1/9));
        building6.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building6.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building6.height = 24*((familyplus/9) - (2/9));
        building6.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building6.height = 24*((familyplus/9) - (3/9));
        building6.yPosition = 600-(24*((familyplus/9) - (3/9)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building6.height = 24*((familyplus/9) - (4/9));
        building6.yPosition = 600-(24*((familyplus/9) - (4/9)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building6.height = 24*((familyplus/9) - (5/9));
        building6.yPosition = 600-(24*((familyplus/9) - (5/9)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building6.height = 24*((familyplus/9) + (3/9));
        building6.yPosition = 600-(24*((familyplus/9) + (3/9)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building6.height = 24*((familyplus/9) + (2/9));
        building6.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building6.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building6.height = 24*((familyplus/9) + (1/9));
        building6.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building6.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building6.xPosition = 420;
    building6.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 3){
        building6.height = 24*(Math.floor(familyplus/10) + 1);
        building6.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building6.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 3){
        building6.height = 24*(Math.floor(familyplus/10));
        building6.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building6.display();
        fill("black");
      }
    }
  }
  
  var building7 = new building();
  if (families <= 50){
    building7.xPosition = 360;
    building7.yPosition = -1;
    building7.width = 45;
    building7.height = 0;
    building7.display();
    fill("black");
  }
  if (families > 250){
    if (families <= 350){
    building7.xPosition = 450;
    building7.width = 45;
      if (Math.round(familyplus/7) == familyplus/7){
        building7.height = 24*(familyplus/7);
        building7.yPosition = 600-(24*(familyplus/7));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (1/7))){
        building7.height = 24*((familyplus/7) - (1/7));
        building7.yPosition = 600-(24*((familyplus/7) - (1/7)));
        building7.display();
        fill("black");
      }
      if ((Math.round(familyplus/7)) == ((familyplus/7) - (2/7))){
        building7.height = 24*((familyplus/7) - (2/7));
        building7.yPosition = 600-(24*((familyplus/7) - (2/7)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) - (3/7))){
        building7.height = 24*((familyplus/7) - (3/7));
        building7.yPosition = 600-(24*((familyplus/7) - (3/7)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (3/7))){
        building7.height = 24*((familyplus/7) - (4/7));
        building7.yPosition = 600-(24*((familyplus/7) - (4/7)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (2/7))){
        building7.height = 24*((familyplus/7) - (5/7));
        building7.yPosition = 600-(24*((familyplus/7) - (5/7)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/7) == ((familyplus/7) + (1/7))){
        building7.height = 24*((familyplus/7) + (1/7));
        building7.yPosition = 600-(24*((familyplus/7) + (1/7)));
        building7.display();
        fill("black");
      }
    }
  }
  if (families > 350){
    if (families <= 450){
    building7.xPosition = 450;
    building7.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building7.height = 24*(familyplus/9);
        building7.yPosition = 600-(24*(familyplus/9));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building7.height = 24*((familyplus/9) - (1/9));
        building7.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building7.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building7.height = 24*((familyplus/9) - (2/9));
        building7.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building7.height = 24*((familyplus/9) - (3/9));
        building7.yPosition = 600-(24*((familyplus/9) - (3/9)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building7.height = 24*((familyplus/9) - (4/9));
        building7.yPosition = 600-(24*((familyplus/9) - (4/9)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building7.height = 24*((familyplus/9) - (5/9));
        building7.yPosition = 600-(24*((familyplus/9) - (5/9)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building7.height = 24*((familyplus/9) + (3/9));
        building7.yPosition = 600-(24*((familyplus/9) + (3/9)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building7.height = 24*((familyplus/9) + (2/9));
        building7.yPosition = 600-(24*((familyplus/9) + (2/9)));
        building7.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building7.height = 24*((familyplus/9) + (1/9));
        building7.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building7.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building7.xPosition = 60;
    building7.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 2){
        building7.height = 24*(Math.floor(familyplus/10) + 1);
        building7.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building7.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 2){
        building7.height = 24*(Math.floor(familyplus/10));
        building7.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building7.display();
        fill("black");
      }
    }
  }
  
  var building8 = new building();
  if (families <= 50){
    building8.xPosition = 420;
    building8.yPosition = -1;
    building8.width = 45;
    building8.height = 0;
    building8.display();
    fill("black");
  }
  if (families > 350){
    if (families < 450){
    building8.xPosition = 30;
    building8.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building8.height = 24*(familyplus/9);
        building8.yPosition = 600-(24*(familyplus/9));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building8.height = 24*((familyplus/9) - (1/9));
        building8.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building8.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building8.height = 24*((familyplus/9) - (2/9));
        building8.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building8.height = 24*((familyplus/9) - (3/9));
        building8.yPosition = 600-(24*((familyplus/9) - (3/9)));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building8.height = 24*((familyplus/9) - (4/9));
        building8.yPosition = 600-(24*((familyplus/9) - (4/9)));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building8.height = 24*((familyplus/9) - (5/9));
        building8.yPosition = 600-(24*((familyplus/9) - (5/9)));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building8.height = 24*((familyplus/9) - (6/9));
        building8.yPosition = 600-(24*((familyplus/9) - (6/9)));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building8.height = 24*((familyplus/9) - (7/9));
        building8.yPosition = 600-(24*((familyplus/9) - (7/9)));
        building8.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building8.height = 24*((familyplus/9) + (1/9));
        building8.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building8.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building8.xPosition = 480;
    building8.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 2){
        building8.height = 24*(Math.floor(familyplus/10) + 1);
        building8.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building8.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 2){
        building8.height = 24*(Math.floor(familyplus/10));
        building8.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building8.display();
        fill("black");
      }
    }
  }
  
  var building9 = new building();
  if (families <= 50){
    building9.xPosition = 480;
    building9.yPosition = -1;
    building9.width = 45;
    building9.height = 0;
    building9.display();
    fill("black");
  }
  if (families > 350){
    if (families < 450){
    building9.xPosition = 510;
    building9.width = 45;
      if (Math.round(familyplus/9) == familyplus/9){
        building9.height = 24*(familyplus/9);
        building9.yPosition = 600-(24*(familyplus/9));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (1/9))){
        building9.height = 24*((familyplus/9) - (1/9));
        building9.yPosition = 600-(24*((familyplus/9) - (1/9)));
        building9.display();
        fill("black");
      }
      if ((Math.round(familyplus/9)) == ((familyplus/9) - (2/9))){
        building9.height = 24*((familyplus/9) - (2/9));
        building9.yPosition = 600-(24*((familyplus/9) - (2/9)));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (3/9))){
        building9.height = 24*((familyplus/9) - (3/9));
        building9.yPosition = 600-(24*((familyplus/9) - (3/9)));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) - (4/9))){
        building9.height = 24*((familyplus/9) - (4/9));
        building9.yPosition = 600-(24*((familyplus/9) - (4/9)));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (4/9))){
        building9.height = 24*((familyplus/9) - (5/9));
        building9.yPosition = 600-(24*((familyplus/9) - (5/9)));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (3/9))){
        building9.height = 24*((familyplus/9) - (6/9));
        building9.yPosition = 600-(24*((familyplus/9) - (6/9)));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (2/9))){
        building9.height = 24*((familyplus/9) - (7/9));
        building9.yPosition = 600-(24*((familyplus/9) - (7/9)));
        building9.display();
        fill("black");
      }
      if (Math.round(familyplus/9) == ((familyplus/9) + (1/9))){
        building9.height = 24*((familyplus/9) + (1/9));
        building9.yPosition = 600-(24*((familyplus/9) + (1/9)));
        building9.display();
        fill("black");
      }
    }
  }
  if (families > 450){
    if (families <= 500){
    building9.xPosition = 0;
    building9.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 1){
        building9.height = 24*(Math.floor(familyplus/10) + 1);
        building9.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building9.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 1){
        building9.height = 24*(Math.floor(familyplus/10));
        building9.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building9.display();
        fill("black");
      }
    }
  }
  
  var building10 = new building();
  if (families <= 50){
    building10.xPosition = 540;
    building10.yPosition = -1;
    building10.width = 45;
    building10.height = 0;
    building10.display();
    fill("black");
  }
  if (families > 450){
    if (families <= 500){
    building10.xPosition = 540;
    building10.width = 45;
      if ((Math.round((familyplus % 10)/2)) >= 1){
        building10.height = 24*(Math.floor(familyplus/10) + 1);
        building10.yPosition = 600 - (24*(Math.floor(familyplus/10) + 1));
        building10.display();
        fill("black");
      }
      if ((Math.round((familyplus % 10)/2)) < 1){
        building10.height = 24*(Math.floor(familyplus/10));
        building10.yPosition = 600 - (24*(Math.floor(familyplus/10)));
        building10.display();
        fill("black");
      }
    }
  }
  
  var Window10 = new Window()
  var Window11 = new Window()
  var Window12 = new Window()
  var Window13 = new Window()
  var Window14 = new Window()
  var Window15 = new Window()
  var Window16 = new Window()
  if (building1.height >= 100){
    Window10.xPosition = building1.xPosition + 5;
    Window10.yPosition = 510;
    Window10.display();
  }
  if (building1.height >= 190){
    Window11.height = 40
    Window11.xPosition = building1.xPosition + 5;
    Window11.yPosition = 430;
    Window11.display();
  } 
  if (building1.height >= 260){
    Window12.height = 40
    Window12.xPosition = building1.xPosition + 5;
    Window12.yPosition = 350;
    Window12.display();
  } 
  if (building1.height >= 330){
    Window13.height = 40
    Window13.xPosition = building1.xPosition + 5;
    Window13.yPosition = 270;
    Window13.display();
  } 
  if (building1.height >= 400){
    Window14.height = 40
    Window14.xPosition = building1.xPosition + 5;
    Window14.yPosition = 190;
    Window14.display();
  }
  if (building1.height >= 500){
    Window15.height = 40
    Window15.xPosition = building1.xPosition + 5;
    Window15.yPosition = 110;
    Window15.display();
  }  
  if (building1.height >= 570){
    Window16.height = 40
    Window16.xPosition = building1.xPosition + 5;
    Window16.yPosition = 30;
    Window16.display();
  } 
  var Window20 = new Window()
  var Window21 = new Window()
  var Window22 = new Window()
  var Window23 = new Window()
  var Window24 = new Window()
  var Window25 = new Window()
  var Window26 = new Window()
  if (building2.height >= 100){
    Window20.xPosition = building2.xPosition + 5;
    Window20.yPosition = 510;
    Window20.display();
  }
  if (building2.height >= 190){
    Window21.height = 40
    Window21.xPosition = building2.xPosition + 5;
    Window21.yPosition = 430;
    Window21.display();
  } 
  if (building2.height >= 260){
    Window22.height = 40
    Window22.xPosition = building2.xPosition + 5;
    Window22.yPosition = 350;
    Window22.display();
  } 
  if (building2.height >= 330){
    Window23.height = 40
    Window23.xPosition = building2.xPosition + 5;
    Window23.yPosition = 270;
    Window23.display();
  } 
  if (building2.height >= 400){
    Window24.height = 40
    Window24.xPosition = building2.xPosition + 5;
    Window24.yPosition = 190;
    Window24.display();
  }
  if (building2.height >= 500){
    Window25.height = 40
    Window25.xPosition = building2.xPosition + 5;
    Window25.yPosition = 110;
    Window25.display();
  }  
  if (building2.height >= 570){
    Window26.height = 40
    Window26.xPosition = building2.xPosition + 5;
    Window26.yPosition = 30;
    Window26.display();
  }
  var Window30 = new Window()
  var Window31 = new Window()
  var Window32 = new Window()
  var Window33 = new Window()
  var Window34 = new Window()
  var Window35 = new Window()
  var Window36 = new Window()
  if (building3.height >= 100){
    Window30.xPosition = building3.xPosition + 5;
    Window30.yPosition = 510;
    Window30.display();
  }
  if (building3.height >= 190){
    Window31.height = 40
    Window31.xPosition = building3.xPosition + 5;
    Window31.yPosition = 430;
    Window31.display();
  } 
  if (building3.height >= 260){
    Window32.height = 40
    Window32.xPosition = building3.xPosition + 5;
    Window32.yPosition = 350;
    Window32.display();
  } 
  if (building3.height >= 330){
    Window33.height = 40
    Window33.xPosition = building3.xPosition + 5;
    Window33.yPosition = 270;
    Window33.display();
  } 
  if (building3.height >= 400){
    Window34.height = 40
    Window34.xPosition = building3.xPosition + 5;
    Window34.yPosition = 190;
    Window34.display();
  }
  if (building3.height >= 500){
    Window35.height = 40
    Window35.xPosition = building3.xPosition + 5;
    Window35.yPosition = 110;
    Window35.display();
  }  
  if (building3.height >= 570){
    Window36.height = 40
    Window36.xPosition = building3.xPosition + 5;
    Window36.yPosition = 30;
    Window36.display();
  } 
  var Window40 = new Window()
  var Window41 = new Window()
  var Window42 = new Window()
  var Window43 = new Window()
  var Window44 = new Window()
  var Window45 = new Window()
  var Window46 = new Window()
  if (building4.height >= 100){
    Window40.xPosition = building4.xPosition + 5;
    Window40.yPosition = 510;
    Window40.display();
  }
  if (building4.height >= 190){
    Window41.height = 40
    Window41.xPosition = building4.xPosition + 5;
    Window41.yPosition = 430;
    Window41.display();
  } 
  if (building4.height >= 260){
    Window42.height = 40
    Window42.xPosition = building4.xPosition + 5;
    Window42.yPosition = 350;
    Window42.display();
  } 
  if (building4.height >= 330){
    Window43.height = 40
    Window43.xPosition = building4.xPosition + 5;
    Window43.yPosition = 270;
    Window43.display();
  } 
  if (building4.height >= 400){
    Window44.height = 40
    Window44.xPosition = building4.xPosition + 5;
    Window44.yPosition = 190;
    Window44.display();
  }
  if (building4.height >= 500){
    Window45.height = 40
    Window45.xPosition = building4.xPosition + 5;
    Window45.yPosition = 110;
    Window45.display();
  }  
  if (building4.height >= 570){
    Window46.height = 40
    Window46.xPosition = building4.xPosition + 5;
    Window46.yPosition = 30;
    Window46.display();
  }
  var Window50 = new Window()
  var Window51 = new Window()
  var Window52 = new Window()
  var Window53 = new Window()
  var Window54 = new Window()
  var Window55 = new Window()
  var Window56 = new Window()
  if (building5.height >= 100){
    Window50.xPosition = building5.xPosition + 5;
    Window50.yPosition = 510;
    Window50.display();
  }
  if (building5.height >= 190){
    Window51.height = 40
    Window51.xPosition = building5.xPosition + 5;
    Window51.yPosition = 430;
    Window51.display();
  } 
  if (building5.height >= 260){
    Window52.height = 40
    Window52.xPosition = building5.xPosition + 5;
    Window52.yPosition = 350;
    Window52.display();
  } 
  if (building5.height >= 330){
    Window53.height = 40
    Window53.xPosition = building5.xPosition + 5;
    Window53.yPosition = 270;
    Window53.display();
  } 
  if (building5.height >= 400){
    Window54.height = 40
    Window54.xPosition = building5.xPosition + 5;
    Window54.yPosition = 190;
    Window54.display();
  }
  if (building5.height >= 500){
    Window55.height = 40
    Window55.xPosition = building5.xPosition + 5;
    Window55.yPosition = 110;
    Window55.display();
  }  
  if (building5.height >= 570){
    Window56.height = 40
    Window56.xPosition = building5.xPosition + 5;
    Window56.yPosition = 30;
    Window56.display();
  } 
  var Window60 = new Window()
  var Window61 = new Window()
  var Window62 = new Window()
  var Window63 = new Window()
  var Window64 = new Window()
  var Window65 = new Window()
  var Window66 = new Window()
  if (building6.height >= 100){
    Window60.xPosition = building6.xPosition + 5;
    Window60.yPosition = 510;
    Window60.display();
  }
  if (building6.height >= 190){
    Window61.height = 40
    Window61.xPosition = building6.xPosition + 5;
    Window61.yPosition = 430;
    Window61.display();
  }
  if (building6.height >= 260){
    Window62.height = 40
    Window62.xPosition = building6.xPosition + 5;
    Window62.yPosition = 350;
    Window62.display();
  } 
  if (building6.height >= 330){
    Window63.height = 40
    Window63.xPosition = building6.xPosition + 5;
    Window63.yPosition = 270;
    Window63.display();
  } 
  if (building6.height >= 400){
    Window64.height = 40
    Window64.xPosition = building6.xPosition + 5;
    Window64.yPosition = 190;
    Window64.display();
  }
  if (building6.height >= 500){
    Window65.height = 40
    Window65.xPosition = building6.xPosition + 5;
    Window65.yPosition = 110;
    Window65.display();
  }  
  if (building6.height >= 570){
    Window66.height = 40
    Window66.xPosition = building6.xPosition + 5;
    Window66.yPosition = 30;
    Window66.display();
  }
  var Window70 = new Window()
  var Window71 = new Window()
  var Window72 = new Window()
  var Window73 = new Window()
  var Window74 = new Window()
  var Window75 = new Window()
  var Window76 = new Window()
  if (building7.height >= 100){
    Window70.xPosition = building7.xPosition + 5;
    Window70.yPosition = 510;
    Window70.display();
  }
  if (building7.height >= 190){
    Window71.height = 40
    Window71.xPosition = building7.xPosition + 5;
    Window71.yPosition = 430;
    Window71.display();
  }
  if (building7.height >= 260){
    Window72.height = 40
    Window72.xPosition = building7.xPosition + 5;
    Window72.yPosition = 350;
    Window72.display();
  } 
  if (building7.height >= 330){
    Window73.height = 40
    Window73.xPosition = building7.xPosition + 5;
    Window73.yPosition = 270;
    Window73.display();
  } 
  if (building7.height >= 400){
    Window74.height = 40
    Window74.xPosition = building7.xPosition + 5;
    Window74.yPosition = 190;
    Window74.display();
  }
  if (building7.height >= 500){
    Window75.height = 40
    Window75.xPosition = building7.xPosition + 5;
    Window75.yPosition = 110;
    Window75.display();
  }  
  if (building7.height >= 570){
    Window76.height = 40
    Window76.xPosition = building7.xPosition + 5;
    Window76.yPosition = 30;
    Window76.display();
  }
  var Window80 = new Window()
  var Window81 = new Window()
  var Window82 = new Window()
  var Window83 = new Window()
  var Window84 = new Window()
  var Window85 = new Window()
  var Window86 = new Window()
  if (building8.height >= 100){
    Window80.xPosition = building8.xPosition + 5;
    Window80.yPosition = 510;
    Window80.display();
  }
  if (building8.height >= 190){
    Window81.height = 40
    Window81.xPosition = building8.xPosition + 5;
    Window81.yPosition = 430;
    Window81.display();
  }
  if (building8.height >= 260){
    Window82.height = 40
    Window82.xPosition = building8.xPosition + 5;
    Window82.yPosition = 350;
    Window82.display();
  } 
  if (building8.height >= 330){
    Window83.height = 40
    Window83.xPosition = building8.xPosition + 5;
    Window83.yPosition = 270;
    Window83.display();
  } 
  if (building8.height >= 400){
    Window84.height = 40
    Window84.xPosition = building8.xPosition + 5;
    Window84.yPosition = 190;
    Window84.display();
  }
  if (building8.height >= 500){
    Window85.height = 40
    Window85.xPosition = building8.xPosition + 5;
    Window85.yPosition = 110;
    Window85.display();
  }  
  if (building8.height >= 570){
    Window86.height = 40
    Window86.xPosition = building8.xPosition + 5;
    Window86.yPosition = 30;
    Window86.display();
  }
  var Window90 = new Window()
  var Window91 = new Window()
  var Window92 = new Window()
  var Window93 = new Window()
  var Window94 = new Window()
  var Window95 = new Window()
  var Window96 = new Window()
  if (building9.height >= 100){
    Window90.xPosition = building9.xPosition + 5;
    Window90.yPosition = 510;
    Window90.display();
  }
  if (building9.height >= 190){
    Window91.height = 40
    Window91.xPosition = building9.xPosition + 5;
    Window91.yPosition = 430;
    Window91.display();
  }
  if (building9.height >= 260){
    Window92.height = 40
    Window92.xPosition = building9.xPosition + 5;
    Window92.yPosition = 350;
    Window92.display();
  } 
  if (building9.height >= 330){
    Window93.height = 40
    Window93.xPosition = building9.xPosition + 5;
    Window93.yPosition = 270;
    Window93.display();
  } 
  if (building9.height >= 400){
    Window94.height = 40
    Window94.xPosition = building9.xPosition + 5;
    Window94.yPosition = 190;
    Window94.display();
  }
  if (building9.height >= 500){
    Window95.height = 40
    Window95.xPosition = building9.xPosition + 5;
    Window95.yPosition = 110;
    Window95.display();
  } 
  if (building9.height >= 570){
    Window96.height = 40
    Window96.xPosition = building9.xPosition + 5;
    Window96.yPosition = 30;
    Window96.display();
  }
  var Window100 = new Window()
  var Window101 = new Window()
  var Window102 = new Window()
  var Window103 = new Window()
  var Window104 = new Window()
  var Window105 = new Window()
  var Window106 = new Window()
  if (building10.height >= 100){
    Window100.xPosition = building10.xPosition + 5;
    Window100.yPosition = 510;
    Window100.display();
  }
  if (building10.height >= 190){
    Window101.height = 40
    Window101.xPosition = building10.xPosition + 5;
    Window101.yPosition = 430;
    Window101.display();
  }
  if (building10.height >= 260){
    Window102.height = 40
    Window102.xPosition = building10.xPosition + 5;
    Window102.yPosition = 350;
    Window102.display();
  } 
  if (building10.height >= 330){
    Window103.height = 40
    Window103.xPosition = building10.xPosition + 5;
    Window103.yPosition = 270;
    Window103.display();
  } 
  if (building10.height >= 400){
    Window104.height = 40
    Window104.xPosition = building10.xPosition + 5;
    Window104.yPosition = 190;
    Window104.display();
  }
  if (building10.height >= 500){
    Window105.height = 40
    Window105.xPosition = building10.xPosition + 5;
    Window105.yPosition = 110;
    Window105.display();
  }  
  if (building10.height >= 570){
    Window106.height = 40
    Window106.xPosition = building10.xPosition + 5;
    Window106.yPosition = 30;
    Window106.display();
  }
  
  var handle1 = new handle()
  if (building1.height >= 100){
    handle1.xPosition = building1.xPosition + 23;
    handle1.yPosition = 550;
    handle1.display();
  }
  var handle2 = new handle()
  if (building2.height >= 100){
    handle2.xPosition = building2.xPosition + 23;
    handle2.yPosition = 550;
    handle2.display();
  }
  var handle3 = new handle()
  if (building3.height >= 100){
    handle3.xPosition = building3.xPosition + 23;
    handle3.yPosition = 550;
    handle3.display();
  }
  var handle4 = new handle()
  if (building4.height >= 100){
    handle4.xPosition = building4.xPosition + 23;
    handle4.yPosition = 550;
    handle4.display();
  }
  var handle5 = new handle()
  if (building5.height >= 100){
    handle5.xPosition = building5.xPosition + 23;
    handle5.yPosition = 550;
    handle5.display();
  }
  var handle6 = new handle()
  if (building6.height >= 100){
    handle6.xPosition = building6.xPosition + 23;
    handle6.yPosition = 550;
    handle6.display();
  }
  var handle7 = new handle()
  if (building7.height >= 100){
    handle7.xPosition = building7.xPosition + 23;
    handle7.yPosition = 550;
    handle7.display();
  }
  var handle8 = new handle()
  if (building8.height >= 100){
    handle8.xPosition = building8.xPosition + 23;
    handle8.yPosition = 550;
    handle8.display();
  }
  var handle9 = new handle()
  if (building9.height >= 100){
    handle9.xPosition = building9.xPosition + 23;
    handle9.yPosition = 550;
    handle9.display();
  }
  var handle10 = new handle()
  if (building10.height >= 100){
    handle10.xPosition = building10.xPosition + 23;
    handle10.yPosition = 550;
    handle10.display();
  }
}