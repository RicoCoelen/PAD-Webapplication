/*
this is the box class
*/
class Box extends GameObject {

  constructor(x, y, w=40, h=40,  options = null) {
    // pass variables to upper class
    super(x, y);
    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    // add matter.js options for physics
    this.options = options;
    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
    // then add to World
    Matter.World.add(world, this.body);
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
    image(assets.zwartVierkant, -assets.zwartVierkant.width/2, -assets.zwartVierkant.height/2);
    pop();
  }
}
