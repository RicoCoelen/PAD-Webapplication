class GameEnd extends GameObjectList {

  constructor() {

    super();
    this.reset();

  }

  update(){
    super.update();

    if(keyIsPressed)
      gameEnvironment.gameStateManager.switchTo("LevelSelect");
  }

  reset() {

    super.reset();
    this.add(new SpriteGameObject(width/2, height/2, assets.winningbackground));
    this.camBool = true;

  }

  draw() {

    if (this.camBool) {

      cam.setCam(0, 0);
      this.camBool = false;

    }

    super.draw();

  }





}
