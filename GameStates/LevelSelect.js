class LevelSelect extends GameObjectList {

  constructor(level) {

    super();

    this.aantLevels = 7;
    this.rows = 4;
    this.columns = 4;
    this.leftOffset = 150;
    this.topOffset = 100;
    this.buttonWidth = 150;
    this.buttonHeight = 75;
    this.horSpacing = 1.75;
    this.vertSpacing = 1.7;

    this.player = new Player(50, height - 25, assets.monkey.width / 2, {
      isStatic: false,
      restitution: 0.99
    });
    this.levelLoader = new LevelLoader();

    this.level = level;

  }

  update() {

    this.lastMousePressed;

    if (mouseIsPressed && this.lastMousePressed == false) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (mouseX < (i * this.buttonWidth * this.horSpacing) + this.leftOffset + this.buttonWidth / 2 && mouseX > (i * this.buttonWidth * this.horSpacing) + this.leftOffset - this.buttonWidth &&
              mouseY < (j * this.buttonHeight * this.vertSpacing) + this.topOffset + this.buttonHeight / 2 && mouseY > (j * this.buttonHeight * this.vertSpacing) + this.topOffset - this.buttonHeight) {
            gameEnvironment.gameStateManager.setGameState("Level", i + j * this.columns);
          }
        }
      }
      if(mouseX > 540 - this.buttonWidth / 2 && mouseX < 540 + this.buttonWidth / 2 && mouseY > 560 - this.buttonHeight / 2 && mouseY < 560 + this.buttonHeight / 2){
        gameEnvironment.gameStateManager.switchTo("Menu");
      }
    }

    this.lastMousePressed = mouseIsPressed;
  }

  draw() {

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        imageMode(CENTER);
        image(assets.button, this.leftOffset + (i * this.buttonWidth * this.horSpacing), this.topOffset + (j * this.buttonHeight * this.vertSpacing), this.buttonWidth, this.buttonHeight);
        textAlign(CENTER);
        textSize(20);
        fill(40);
        textFont(assets.afritubufont, 36);
        text(i + 4 * j + 1, this.leftOffset + (i * this.buttonWidth * this.horSpacing), this.topOffset + (j * this.buttonHeight * this.vertSpacing) + this.buttonHeight / 4);
      }
    }
    image(assets.button, 540, 560, this.buttonWidth, this.buttonHeight);
    text("MENU", 540, 560 + this.buttonHeight / 4);
    imageMode(CORNER);
  }
}
