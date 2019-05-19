class Level extends GameObjectList {

  constructor() {
    // call base class
    super();
    levelmusic.loop();
  }

  reset() {
    super.reset();

    //creates the particle system
    this.particleSystem = new ParticleSystem(createVector(250, 250));

    // create the player and the cannon
    this.player = new Player(200, height - 150, assets.monkey.width / 2, {
      isStatic: false,
      restitution: 0.99
    });

    // add new object and add to object list
    this.theCannon = new Cannon(200, height - 150, 100, this.player, 0.9);
    this.tracingLine = new TracingLine(this.theCannon, this.player);
    this.jumpPad = new JumpPad(width - 100, height - 50, 200, 28);

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();

    // Load level
    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(6, this, this.player);

    // adds the player
    this.add(new SpriteGameObject(0, 0, assets.background2, assets.background2.width, assets.background2.height));
    this.add(this.player);
    this.add(this.theCannon);
    this.add(this.tracingLine);
    this.add(this.blocks);
    this.add(this.jumpPad);
  }

  update() {
    super.update();

    if (this.theCannon.shootingFase == 3) {
      this.player.visible = true;
    } else {
      this.player.visible = false;
    }

    if (this.theCannon.shootingFase == 3 && this.player.body.speed < 0.30) {
      gameEnvironment.gameStateManager.switchTo("PlayingState");
    }

    this.jumpPad.collisions = Matter.Query.collides(this.jumpPad.body, [this.player.body]);

    this.position = createVector(width / 2, height / 2) - this.player.position;
    //debugger;


    //this.jumpPad.collidesWith(this.player.body);

    // for (let i = 0; i < this.children.length; i++) {
    //   if (Array.isArray(this.children[i])) {
    //
    //   }
    // }
  }

}
