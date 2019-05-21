class GameEnd extends GameObjectList {

  constructor(coinIndex) {

    super();
    this.reset();

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

    console.log(cam.position);
    super.draw();

  }





}
