/*
This is the playing state class where the current game is setup
*/
class PlayingState extends GameObjectList {

  constructor() {
    // call base class
    super();
    //creates the particle system
    this.reset();

    //this.lastCollissions = [];

  }

  reset() {

    super.reset();


    // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();

    //Testing
    this.water = new Water(512, height / 2, 175, height);

    //this.particleSystem = new ParticleSystem(createVector(500,500));

    // Load level
    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(0, this, this.player);

    // create the player and the cannon/line
    this.player = new Player(200, height - 150, assets.monkey.width/2, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(200, height - 150, 100, this.player, 0.5);
    this.tracingLine = new TracingLine(this.theCannon, this.player);

    // add static blocks
    this.blocks.add(new StaticBox(400, height - 40, 25, 80));  // 1st
    this.blocks.add(new StaticBox(625, height - 40, 25, 120)); // 2nd
    this.blocks.add(new StaticBox(850, height - 40, 25, 160)); // 3th

    // make static outer walls


    // add text objects
    this.texts.add(new TextGameObject(480, height - 50, "Weinig Pijn"));
    this.texts.add(new TextGameObject(690, height - 50, "Gemmidelde Pijn"));
    this.texts.add(new TextGameObject(935, height - 50, "Veel Pijn"));

    // add the important stuff to gameobjectlist

    this.add(new SpriteGameObject(0, 0, assets.background1, assets.background1.width, assets.background1.height));
    this.add(this.player);
    this.add(this.theCannon);
    this.add(this.blocks);
    this.add(this.texts);
    this.add(this.tracingLine);
    this.add(this.water);
    //this.add(this.particleSystem);

  }

  update(){

    super.update();

    if (this.theCannon.shootingFase == 3){
      this.player.visible = true;
    }
    else {
      this.player.visible = false;
    }

    if (this.theCannon.shootingFase == 3 && this.player.body.speed < 0.30){
      //this.reset();
      gameEnvironment.gameStateManager.switchTo("Level");
    }

    // gets the array with collisions form library
    this.water.collisions = Matter.Query.collides(this.water.body, [this.player.body]);

    //doesn't work
    //use this to distinguish arrays and objects in this.children
    //TO DO: combine with current collision check between water and player
    for(let i = 0; i < this.children.lenth; i++){
      if(Array.isArray(this.children[i])){
      }
    }
  }
}
