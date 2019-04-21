/*
this is the circle class
*/
class Circle extends GameObject {

  constructor(x, y, r, options = null) {
    // pass variables to upper class
    super(x, y);

    // save variables to object
    this.x = x;
    this.y = y;
    this.r = r;
    this.options = options;

    // add rigidbody physics to box
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, this.options);
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
