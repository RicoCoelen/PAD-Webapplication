/*
This is the playing state class where the current game is setup
*/
class PlayingState extends GameObjectList {

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

    // add object to array (list) more boxes
    this.add(new Box(200,50,50,50));

    // add circles
    this.add(new Circle(400,50,80));

    // // add image boxes
    // this.add(new ImageBox(300, -300, this.world, "assets/star.png"));

    // add static blocks
    this.blocks.add(new StaticBox(500, height - 50, 50, 75)); // 1st
    this.blocks.add(new StaticBox(700, height - 50, 50, 125)); // 2nd
    this.blocks.add(new StaticBox(900, height - 50, 50, 175)); // 3th

    // make static outer walls
    this.blocks.add(new StaticBox(0,600,2200,40)); // bottom wall
    this.blocks.add(new StaticBox(1075,0,40,1200)); // right wall
    this.blocks.add(new StaticBox(0,0,40,1200)); // left wall
    this.blocks.add(new StaticBox(0,0,2200,20)); // top wall

    // add text objects
    this.texts.add(new TextGameObject(575, height - 50, "Weinig Pijn"));
    this.texts.add(new TextGameObject(750, height - 50, "Gemmidelde Pijn"));
    this.texts.add(new TextGameObject(965, height - 50, "Veel Pijn"));

    // add the important stuff to gameobjectlist
    this.add(this.player);
    this.add(this.theCannon);
    this.add(this.blocks);
    this.add(this.texts);

    // add the ParticleSystem
    this.add(this.particleSystem);
  }
}
