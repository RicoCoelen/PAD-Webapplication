class JumpPad extends SquareEffect {

  constructor(x, y, w, h, otherBody = null, options = null){
    // pass variables to upper class
    super(x, y, w, h, otherBody);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = assets.jumppad;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h);
    this.body.isStatic = true;
    this.effect = function (otherBody) {
      this.vertices = this.body.vertices;

      Matter.Body.setVelocity(otherBody, {
        x: 15 * -((this.vertices[0].y - this.vertices[1].y) / this.w) + otherBody.velocity.x,
        y: 15 * ((this.vertices[0].x - this.vertices[1].x) / this.w) + otherBody.velocity.y
      });
      assets.jumpsound.play();

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
