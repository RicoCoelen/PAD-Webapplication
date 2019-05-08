class SquareBox extends GameObject {

  constructor(x, y, texture, w, h, options = null) {
    // pass variables to upper class
    super(x, y);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.texture = texture;
    // add matter.js options for physics
    this.options = options;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
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
    rectMode(CENTER);

    if (this.texture == 0) {

      image(assets.crate, -assets.crate.width / 2, -assets.crate.height / 2);
      this.body.friction = 1;

    } else if (this.texture == 1) {

      image(assets.plank, -assets.plank.width / 2, -assets.plank.height / 2);
      this.body.friction = 1;
    }

    pop();
  }
}
