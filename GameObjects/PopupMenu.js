class PopupMenu extends GameObject{
  constructor(x, y, w, h, options = null){
    super(x, y, w, h, 0);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.visible = false;
    this.result = -1;
  }

  update(){
    if(this.visible){
      this.mouseX = mouseX;
      this.mouseY = mouseY;
      if(mouseIsPressed){
        if(this.mouseX > this.x + this.w / 5 && this.mouseX < this.x + this.w * (2 / 5) && this.mouseY > this.y + this.h * (2 / 3) && this.mouseY < this.h / 5 + this.y + this.h * (2 / 3)){
          gameEnvironment.gameStateManager.switchTo("PlayingState");
        }
        if(this.mouseX > this.x + this.w * (3 / 5) && this.mouseX < this.x + this.w * (4 / 5) && this.mouseY > this.y + this.h * (2 / 3) && this.mouseY < this.h / 5 + this.y + this.h * (2 / 3)){
          gameEnvironment.gameStateManager.switchTo("Level");
        }
      }
    }
  }

  draw(){
    // draw box
    if(this.visible){
      fill(200);
      rect(this.x, this.y, this.w, this.h);
      rect(this.x + this.w / 5, this.y + this.h * (2 / 3), this.w / 5, this.h / 5);
      rect(this.x + this.w * (3 / 5), this.y + this.h * (2 / 3), this.w / 5, this.h / 5);
      textAlign(CENTER);
      fill(0);
      textSize(50);
      text(this.result, this.x + this.w / 2, this.y + this.h / 2);
      text("Jouw pijnscore is:", this.x + this.w / 2, this.y + this.h / 3);
      textSize(12);
      textAlign(LEFT);
    }
  }
}
