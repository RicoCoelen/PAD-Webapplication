/*
This is the playing state class where the current game is setup
*/
class TestState extends GameObjectList {

  constructor() {

    // call base class
    super();

    // create the player and the cannon
    this.player = new Player(200, height - 150, 50, {isStatic: false, render: {visible: false}});
    this.theCannon = new Cannon(200, height - 150, 100, this.player);

    // add the important stuff to gameobjectlist
    this.add(this.player);
    this.add(this.theCannon);
  }
}
