class Polygon extends SpriteGameObject {

  constructor(x, y, texture, sides, rotation) {

    super(x, y, texture);

    // add rigidbody physics to box
    this.body = Matter.Bodies.polygon(x, y, 3, this.h / 2);

    Matter.Body.setAngle(this.body, rotation);
    this.body.friction = 1;

    this.offsetAngle = PI * -0.5;

  }

}
