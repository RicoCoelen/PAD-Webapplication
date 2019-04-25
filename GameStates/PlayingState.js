/*
This is the playing state class where the current game is setup
*/
class PlayingState extends GameObjectList {

  constructor() {
    // call base class
    super();
    //creates the particle system
    this.reset();
  }

  reset() {

    super.reset();


    // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();

    //this.particleSystem = new ParticleSystem(createVector(500,500));

    //Testing
    this.blocks.add(new Water(512, height - 45, 175, 50));

    // create the player and the cannon/line
    this.player = new Player(200, height - 150, 20, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(200, height - 150, 100, this.player);
    this.tracingLine = new TracingLine(this.theCannon, this.player);

    // add static blocks
    this.blocks.add(new StaticBox(400, height - 50, 50, 75)); // 1st
    this.blocks.add(new StaticBox(625, height - 50, 50, 125)); // 2nd
    this.blocks.add(new StaticBox(850, height - 50, 50, 175)); // mogger

    // make static outer walls
    this.blocks.add(new StaticBox(0,600,2200,40)); // bottom wall
    this.blocks.add(new StaticBox(1075,0,40,1200)); // right wall
    this.blocks.add(new StaticBox(0,0,40,1200)); // left wall
    this.blocks.add(new StaticBox(0,0,2200,20)); // top wall

    // add text objects
    this.texts.add(new TextGameObject(480, height - 50, "Weinig Pijn"));
    this.texts.add(new TextGameObject(690, height - 50, "Gemmidelde Pijn"));
    this.texts.add(new TextGameObject(935, height - 50, "Veel Pijn"));

    // add the important stuff to gameobjectlist
    this.add(this.player);
    this.add(this.theCannon);
    this.add(this.blocks);
    this.add(this.texts);
    this.add(this.tracingLine);
    //this.add(this.particleSystem);

  }

  update(){
    super.update();

    foreach(body in Matter.Bodies){

    }
    /*if (this.theCannon.shootingFase == 3 && this.player.body.speed < 0.30){
      gameEnvironment.gameStateManager.switchTo("Level");
    }*/
  }
}
