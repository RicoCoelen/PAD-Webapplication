class JumpPad extends SquareEffect {

  constructor(x, y) {

    super(x, y, 100, 25);

    this.effect = function (otherBody) {
      console.log(" yeeta;df")
console.log(otherBody);
      Matter.Body.applyForce(otherBody, this.body.position, {x: 0, y: -0.095});
      otherBody.velocity.x = 0;
      otherBody.positionPrev.x = otherBody.position.x - 0;
      assets.jumpsound.play();

    };

  }

  update(){

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
    image(assets.jumppad, -assets.jumppad.width/2, -assets.jumppad.height/2);
    pop();
  }

}
