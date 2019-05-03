/*
this is the SquareEffect class
*/
class SquareEffect extends GameObject {

  constructor(x, y, w, h, effect = function (otherBody) {console.log("no effect function found");}, options = null) {
    // pass variables to upper class
    super(x, y);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // add the function of the squarebox
    this.effect = effect;

    // add matter.js options for physics
    this.options = options;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
  }

  update() {
    super.update();

    //this.effect();
  }


  collidesWith(otherBody) {

    let collisions = Matter.Query.collides(this.body, [otherBody]);

    if (collisions.length > 0) {

      this.effect(otherBody);

    }

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
    rect(0, 0, this.w, this.h);
    pop();
  }

  setEffect(effect) {

    this.effect = effect;

  }

}
