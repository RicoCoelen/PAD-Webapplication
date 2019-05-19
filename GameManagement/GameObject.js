/*
This is the class game object the highest class for everything thats drawn will inherit this
*/
class GameObject {

  constructor(x = 0, y = 0, vx = 0, vy = 0, _gravity = 0) {

    this.position = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.parent = null;

  }

  get globalPosition() {

    if (this.parent != null) {

      if (this instanceof GameObjectList) {
        console.log(1);
        return this.position + parent.globalPosition;

      }
      console.log(2);
      return this.body.position + parent.globalPosition;

    } else {

      if (this instanceof GameObjectList) {
        console.log(3);
        return this.position;

      }
      console.log(4);
      return this.body.position;

    }

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
