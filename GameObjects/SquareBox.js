class SquareBox extends SpriteGameObject {

  constructor(x, y, texture, options = null) {
    // pass variables to upper class
    super(x, y, texture);

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(x, y, this.w, this.h, options);

    this.body.friction = 1;

  }

}
