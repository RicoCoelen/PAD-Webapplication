/*
This is the playing state class where the current game is setup
*/
class TestState extends GameObjectList {

  constructor() {

    // call base class
    super();

    // // create the player and the cannon
    // this.player = new Player(200, height - 150, 50, {isStatic: false, render: {visible: false}});
    // this.theCannon = new Cannon(200, height - 150, 100, this.player);
    //
    // // add extra game object list to keep it ordered
    // this.blocks = new GameObjectList();
    // this.texts = new GameObjectList();
    //
    // // make static outer walls
    // this.blocks.add(new StaticBox(0,600,2200,40)); // bottom wall
    // this.blocks.add(new StaticBox(1075,0,40,1200)); // right wall
    // this.blocks.add(new StaticBox(0,0,40,1200)); // left wall
    // this.blocks.add(new StaticBox(0,0,2200,20)); // top wall
    //
    // // add the important stuff to gameobjectlist
    // this.add(this.player);
    // this.add(this.theCannon);
    // this.add(this.blocks);
    // this.add(this.texts);
  }
}
