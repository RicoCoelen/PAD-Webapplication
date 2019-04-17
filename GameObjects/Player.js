/*
this is the player class that will launch (spawn instance of a ball object)
*/
class Player extends GameObject {

  constructor(x, y, r, options = null) {
    super(x, y, 0, 0, 1);
    this.x = x;
    this.y = y;
    this.r = r;
    this.maxSpeed = 50;
    this.colliding = false;

    // save variables to object
    this.x = x;
    this.y = y;
    this.r = r;
    this.options = options;
    // add rigidbody physics to box
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, this.options);
    // then add to World
    Matter.World.add(world, this.body);

    // make static for first seconds
    Matter.Body.setStatic(this.body, true);
  }

  update() {
    super.update();
  }

  draw() {
    // get position and angle of rigidbody
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    circle(0, 0, this.r);
    pop();
  }
}
