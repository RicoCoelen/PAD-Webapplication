/*
This is the class game state object which states will inherit
*/
class GameObjectList extends GameObject {

  constructor() {
    super();
    this.children = [];
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;
    this.world.parent = this;
    // add mouse constraint if nesscesary
    Matter.World.add(this.world, Matter.MouseConstraint.create(this.engine));
  }

  update() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].update();
    }
    Matter.Engine.update(this.engine);
  }

  draw() {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].draw();

    }
  }

  add(object) {
    this.children.push(object);
    object.parent = this;

    // then add to World also check if body exist
    if (object.body == undefined) {
      // check if object has children then loop trough them
      if (object.children) {
        for (let i = 0; i < object.children.length; i++) {
          // check if the children have a body
          if (object.children[i].body != null) {
            Matter.World.add(this.world, object.children[i].body);
          }
        }
      }
    }
    else {
      // add regular objects to the array
      Matter.World.add(this.world, object.body);
    }
  }

  handleInput(input) {
    for (let i = 0; i < this.children.length; i++) {
      this.children[i].handleInput(input);
    }
  }
}
