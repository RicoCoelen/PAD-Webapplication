/*
This is the class game object the highest class for everything thats drawn will inherit this
*/
class GameObject {

  constructor(x = 0, y = 0, vx = 0, vy = 0, _gravity = 0) {

    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.parent = null;
  }

  setBody(bodyType) {


  }

  update() {

  }

  draw() {

  }

  handleInput(input) {

  }
}
