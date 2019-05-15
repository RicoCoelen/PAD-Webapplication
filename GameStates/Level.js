class Level extends GameObjectList {

  constructor() {
    // call base class
    super();

  }

  reset() {

    super.reset();

    //creates the particle system
    this.particleSystem = new ParticleSystem(createVector(250, 250));

    // create the player and the cannon
    this.player = new Player(200, height - 150, 20, {
      isStatic: false,
      restitution: 0.99
    });
    this.theCannon = new Cannon(200, height - 150, 100, this.player, 0.9);
    this.tracingLine = new TracingLine(this.theCannon, this.player);
    this.jumpPad = new JumpPad(100, 100);

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();

    // Load level
    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(5, this);

    // adds the player
    this.add(new SpriteGameObject(0, 0, assets.background2, assets.background2.width, assets.background2.height));
    this.add(this.player);

    this.add(this.jumpPad);
    this.add(this.theCannon);
    this.add(this.tracingLine);
    this.add(this.blocks);

  }

  update() {
    super.update();
    //console.log(this.player.body.position);

    if (this.theCannon.shootingFase == 3) {
      this.player.visible = true;
    } else {
      this.player.visible = false;
    }

    if (this.theCannon.shootingFase == 3 && this.player.body.speed < 0.30) {
      //this.reset();
      gameEnvironment.gameStateManager.switchTo("PlayingState");
    }

    this.jumpPad.collidesWith(this.player.body);

    // for (let i = 0; i < this.children.length; i++) {
    //   if (Array.isArray(this.children[i])) {
    //
    //   }
    // }



  }

}
