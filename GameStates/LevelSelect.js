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

    for (let i = 0; i <= this.rows; i++) {
      for (let j = 0; j <= this.columns; j++) {
        if (mouseIsPressed && this.lastMousePressed == false) {
          if (mouseX < (i * this.buttonWidth * this.horSpacing) + this.leftOffset + this.buttonWidth / 2 && mouseX > i * (i * (this.buttonWidth + this.horSpacing)) + this.leftOffset - this.buttonWidth &&
              mouseY < (j * this.buttonHeight * this.vertSpacing) + this.topOffset + this.buttonHeight / 2 && mouseY > (j * this.buttonHeight * this.vertSpacing) + this.topOffset - this.buttonHeight) {
            gameEnvironment.gameStateManager.setGameState("Level", i + j * this.columns);
          }
        }
      }
    }

    this.lastMousePressed = mouseIsPressed;
  }

  draw() {

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        rectMode(CENTER);
        rect(this.leftOffset + (j * this.buttonWidth * this.horSpacing), this.topOffset + (i * this.buttonHeight * this.vertSpacing), this.buttonWidth, this.buttonHeight);
      }
    }
  }
}
