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

    // create the player and the cannon/line
    this.player = new Player(200, height - 150, 20, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(200, height - 150, 100, this.player, 0.5);
    this.tracingLine = new TracingLine(this.theCannon, this.player);

    // add static blocks
    this.blocks.add(new StaticBox(400, height - 40, 25, 80));  // 1st
    this.blocks.add(new StaticBox(625, height - 40, 25, 120)); // 2nd
    this.blocks.add(new StaticBox(850, height - 40, 25, 160)); // 3th

    // make static outer walls
    this.blocks.add(new Boundary(-40, height/2, 80, 2000));      // left
    this.blocks.add(new Boundary(width+40, height/2, 80, 2000)); // right
    this.blocks.add(new Boundary(width/2, -40, 2000, 80));       // top
    this.blocks.add(new Boundary(width/2, height+40, 2000, 80)); // bottom

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

    if (this.theCannon.shootingFase == 3 && this.player.body.speed < 0.30){

      //this.reset();
      gameEnvironment.gameStateManager.switchTo("Level");

    }

  }
}
