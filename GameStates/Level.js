class Level extends GameObjectList {

  constructor() {
    // call base class
    super();
    //creates the particle system
    this.particleSystem = new ParticleSystem(createVector(250,250));

    // create the player and the cannon
    this.player = new Player(200, height - 150, 50, {isStatic: false, render: {visible: false}, restitution: 0.2, friction: 11});
    this.theCannon = new Cannon(200, height - 150, 100, this.player);

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();

    this.add(this.blocks);


    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(1, this);

  }



}
