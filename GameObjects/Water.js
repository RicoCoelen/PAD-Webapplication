class Water extends SquareEffect {

  constructor(x, y, w, h, otherBody = null){
    // pass variables to upper class
    super(x, y, w, h, otherBody);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = assets.water;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);

    this.effect = function (otherBody) {

      otherBody.frictionAir = 0.04;

    };

  }


  draw(){
    //get body position
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    push();
    translate(pos.x, pos.y);
    cam.camTranslate();
    rotate(angle);
    image(this.sprite, 0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
    pop();
  }
}
