class Level extends GameObjectList {

  constructor() {
    // call base class
    super();
    assets.levelmusic.loop();
  }

  reset() {
    super.reset();

    this.coinCounter = [0];

    //creates the particle system
    this.particleSystem = new ParticleSystem(createVector(250, 250));

    // create the player and the cannon
    this.player = new Player(50, height - 25, assets.monkey.width/2, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(50, height - 25, 100, this.player, 0.5);

    // add new object and add to object list
    this.tracingLine = new TracingLine(this.theCannon, this.player);
    this.jumpPad = new JumpPad(width - 100, height - 50, 200, 28);

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();

    // Load level
    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(6, this, this.player, this.coinCounter);
    this.levelWidth = this.levelLoader.levels.levels[6][0][0];

    this.scoreText = new ScoreBoard(50, 50, this.coinCounter);

    for (let i = 0; i < 3; i++) {

      this.add(new SpriteGameObject(assets.junglebackground3.width/2 + assets.junglebackground3.width*i, height/2, assets.junglebackground3, 0, 1/3));
      this.add(new SpriteGameObject(assets.junglebackground2.width/2 + assets.junglebackground2.width*i, height/2, assets.junglebackground2, 0, 2/3));
      this.add(new SpriteGameObject(assets.junglebackground1.width/2 + assets.junglebackground1.width*i, height/2, assets.junglebackground1));

    }


    // adds the player
    this.add(this.player);
    this.add(this.theCannon);
    this.add(this.tracingLine);
    this.add(this.blocks);
    this.add(this.jumpPad);
    this.add(this.scoreText);

    let poly = new Polygon(400, 100, assets.blackTriangle, 3, 0);

    this.add(poly);

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

    cam.setCam(width / 2 - this.player.body.position.x, 0);

    if (this.player.body.position.x < width/2) {

      cam.setCam(0, 0);

    } else if (this.player.body.position.x > this.levelWidth - width/2) {

      cam.setCam(width-this.levelWidth, 0);

    }

  }

}
