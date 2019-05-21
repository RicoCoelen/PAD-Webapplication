class GameEnd extends GameObjectList {

  constructor() {

    super();

  }

  reset() {

    super.reset();

    
    this.add(new SpriteGameObject(width/2, height/2, assets.winningbackground));

  }
}
