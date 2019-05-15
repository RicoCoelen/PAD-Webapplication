class JumpPad extends SquareEffect {

  constructor(x, y, otherBody = null) {

    super(x, y, 100, 25, otherBody);

    this.timer = 20;
    this.body.density = 0;
    this.body.friction = 1;

    this.effect = function(otherBody) {
      //Matter.Body.applyForce(otherBody, this.body.position, {x: 0, y: -0.095});
      //otherBody.velocity.x = 0;
      //otherBody.positionPrev.x = otherBody.position.x - 0;

      if (this.timer >= 20) {
        assets.jumpsound.play();
        Matter.Body.setVelocity(otherBody, {
          x: 20 * ((Math.cos((this.body.angle / Math.PI) * 180 - 90)) % 360),
          y: 20 * ((-Math.sin((this.body.angle / Math.PI) * 180 - 90)) % 360)
        });
      }
      this.timer = 0;
    };

  }

  update() {
    
    super.update();

    if (this.timer < 20) {
      this.timer += 1;
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
    image(assets.jumppad, -assets.jumppad.width / 2, -assets.jumppad.height / 2);
    pop();
  }

}
