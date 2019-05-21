class Menu extends GameObjectList{
  constructor(){
    super();

    this.x = 0;
    this.y = 0;
    this.w = width;
    this.h = height;
  }

  update(){
    this.mouseX = mouseX;
    this.mouseY = mouseY;

    this.lastMousePressed;

    if(mouseIsPressed && this.lastMousePressed == false){
      if(this.mouseX > this.x + this.w / 5 && this.mouseX < this.x + this.w * (2 / 5) && this.mouseY > this.y + this.h * (2 / 3) && this.mouseY < this.h / 5 + this.y + this.h * (2 / 3)){
        gameEnvironment.gameStateManager.switchTo("PlayingState");
      }
      if(this.mouseX > this.x + this.w * (3 / 5) && this.mouseX < this.x + this.w * (4 / 5) && this.mouseY > this.y + this.h * (2 / 3) && this.mouseY < this.h / 5 + this.y + this.h * (2 / 3)){
        gameEnvironment.gameStateManager.switchTo("LevelSelect");
      }
    }

    this.lastMousePressed = mouseIsPressed;
  }

  draw(){
    // draw box
    fill(200);
    rect(this.x, this.y, this.w, this.h);
    image(assets.button, this.x + this.w / 5, this.y + this.h * (2 / 3), this.w / 5, this.h / 5);
    image(assets.button, this.x + this.w * (3 / 5), this.y + this.h * (2 / 3), this.w / 5, this.h / 5);
    textAlign(CENTER);
    fill(0);
    textSize(40);
    textFont(assets.afritubufont, 30)
    text("MEET PIJN", this.x + this.w / 5, this.y + this.h * (2 / 3) + height / 12, this.w / 5, this.h / 5 + this.h);
    text("LEVEL SELECTEREN", this.x + this.w * (3 / 5), this.y + this.h * (2 / 3) + height / 20, this.w / 5, this.h / 5);
    textSize(12);
    textAlign(LEFT);
  }
}
