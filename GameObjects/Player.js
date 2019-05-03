/*
this is the player class that will launch (spawn instance of a ball object)
*/
class Player extends GameObject {

  constructor(x, y, r, options = null) {
    super(x, y, 0, 0, 1);

    // save variables to object
    this.x = x;
    this.y = y;
    this.r = r;
    this.maxSpeed = 50;
    this.colliding = false;
    this.options = options;
    this.visible = false;

    // add rigidbody physics to box
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, this.options);

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
    //circle(0, 0, this.r);
    if(this.visible == true) {
      image(assets.monkey, -assets.monkey.width/2 - 3, -assets.monkey.height/2 - 2);
    }
    pop();
  }
}
