class Level extends GameObjectList {

  constructor() {
    // call base class
    super();

    //creates the particle system
    this.particleSystem = new ParticleSystem(createVector(250,250));

    // create the player and the cannon
    this.player = new Player(200, height - 150, 20, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(200, height - 150, 100, this.player);
    this.tracingLine = new TracingLine(this.theCannon, this.player);
    this.JumpPad = new JumpPad(100,100);

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();


    //this.add(this.blocks);

    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(3, this);

    // adds the player
    this.add(this.player);
    this.add(this.JumpPad);
    this.add(this.theCannon);
    this.add(this.tracingLine);
    this.add(this.blocks);

  }

  update(){
    super.update();

    let collisions = Matter.Query.collides(this.JumpPad.body, [this.player.body]);

    for(let i =0; i < this.children.length; i++){
      if(Array.isArray(this.children[i])){

      }
    }
    if(collisions.length >= 1){
        this.player.velocity.y = -600;
    }

  }

}
