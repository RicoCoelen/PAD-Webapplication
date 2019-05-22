class Water extends SquareEffect {

  constructor(x, y, w, h, otherBody = null){
    // pass variables to upper class
    super(x, y, w, h, otherBody);

    // save variables to object
    this.x = x;
    this.y = y;
    this.sprite = assets.water;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    this.body.isStatic = true;
    this.body.collisionFilter.category = 0;

    this.effect = function (otherBody) {

      otherBody.frictionAir = 0.04;

    };

  }


  draw() {
    //get body position
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    push();
    translate(pos.x, pos.y);
    cam.camTranslate();
    rotate(angle);
    tint(255, 100);
    image(this.sprite, -this.sprite.width / 2, -this.sprite.height / 2);
    pop();
  }
}
