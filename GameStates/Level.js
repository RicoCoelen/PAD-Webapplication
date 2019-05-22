class Level extends GameObjectList {

  constructor() {
    // call base class
    super();
    //assets.levelmusic.setVolume(0.25);
    //assets.levelmusic.loop();
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

    // // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();

    // Load level
    this.levelLoader = new LevelLoader();
    if (this.info != null){
      this.levelLoader.loadLevel(this.info, this, this.player, this.coinCounter);
      this.levelWidth = this.levelLoader.levels.levels[this.info][0][0];
    }

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
    this.add(this.scoreText);

  }

  update() {
    super.update();

    this.lastMousePressed;

    if (this.theCannon.shootingFase == 3) {
      this.player.visible = true;
    } else {
      this.player.visible = false;
    }

    this.position = createVector(width / 2, height / 2) - this.player.position;

    cam.setCam(width / 2 - this.player.body.position.x, 0);

    if (this.player.body.position.x < width/2) {

      cam.setCam(0, 0);

    } else if (this.player.body.position.x > this.levelWidth - width/2) {

      cam.setCam(width-this.levelWidth, 0);

    }

    if(mouseIsPressed && this.lastMousePressed == false){
      gameEnvironment.gameStateManager.switchTo("LevelSelect");
    }

    this.lastMousePressed = mouseIsPressed;
  }

}
