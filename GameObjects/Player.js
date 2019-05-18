/*
this is the player class that will launch (spawn instance of a ball object)
*/
class Player extends GameObject {

  constructor(x, y, r, options = null) {
    super(x, y);

    // save variables to object
    this.x = x;
    this.y = y;
    this.r = r;
    this.maxSpeed = 50;
    this.options = options;
    this.visible = false;

    this.direction = this.velocity.y/this.velocity.x;

    // add rigidbody physics to box
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, this.options);
    this.body.friction = 0;

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
      image(assets.monkey, -assets.monkey.width / 2 , -assets.monkey.height / 2 );
    }
    pop();
  }
}
