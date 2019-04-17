/*
This is the class game state object which states will inherit
*/
class GameObjectList extends GameObject {

  constructor() {
    super();
    this.children = [];
  }

  update() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].update();
      // update physics engine
      // if (this.engine != null) {
      //
      // }
    }
  }

  draw() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].draw();

    }
  }

  add(object) {
    this.children.push(object);
    object.parent = this;
  }

  handleInput(input) {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].handleInput(input);
    }
  }
}
