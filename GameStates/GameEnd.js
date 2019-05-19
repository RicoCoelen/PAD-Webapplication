class GameEnd extends GameObjectList {

  constructor() {

    super();

  }

  reset() {

    super.reset();

    this.add(new SpriteGameObject(0, 0, assets.winningbackground, assets.winningbackground.width, assets.winningbackground.height));

  }
}
