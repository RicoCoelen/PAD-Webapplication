class GameEnd extends GameObjectList {

  constructor() {

    super();
    this.reset();

  }

  reset() {

    super.reset();

    console.log(cam.position);
    cam.setCam(0, 0);
    this.add(new SpriteGameObject(width/2, height/2, assets.winningbackground));
  }
}
