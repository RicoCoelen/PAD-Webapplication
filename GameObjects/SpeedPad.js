class SpeedPad extends SquareEffect{

  constructor(x, y, w, h, otherBody = null){
    // pass variables to upper class
    super(x, y, w, h, otherBody);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = assets.speedpad;

    this.isTouched = false;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    this.body.isStatic = true;
    this.effect = function (otherBody) {
      this.vertices = this.body.vertices;

      if (this.isTouched == false) {
        otherBody.velocity.x = 0;
        this.isTouched = true;
      }

      Matter.Body.setVelocity(otherBody, {
        x: otherBody.velocity.x + (this.vertices[1].x - this.vertices[0].x + 1000) / this.w,
        y: otherBody.velocity.y - (this.vertices[0].y - this.vertices[1].y) / this.w
      });

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
