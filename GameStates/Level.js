class Level extends GameObjectList {

  constructor() {
    // call base class
    super();



  }

  reset() {

    super.reset();

    //creates the particle system
    this.particleSystem = new ParticleSystem(createVector(250,250));

    // create the player and the cannon
    this.player = new Player(200, height - 150, 20, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(200, height - 150, 100, this.player);
    this.tracingLine = new TracingLine(this.theCannon, this.player);

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();


    //this.add(this.blocks);

    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(5, this);

    // adds the player
    this.add(this.player);
    this.add(this.theCannon);
    this.add(this.tracingLine);
    this.add(this.blocks);

  }

  

}
