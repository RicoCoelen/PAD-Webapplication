class Finish extends SquareEffect {

  constructor(x, y, w, h, otherBody = null) {
    // pass variables to upper class
    super(x, y, w, h, otherBody);

    // save variables to object
    this.x = x;
    this.y = y;

    this.body.isStatic = true;
    this.body.collisionFilter.category = 0;

    //checks collision
    this.effect = function(otherBody) {

      gameEnvironment.gameStateManager.switchTo("GameEnd");
      assets.winsound.play();

    }

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
    cam.camTranslate();
    rotate(angle);

    image(assets.finish, -assets.finish.width / 2, -assets.finish.height / 2);
    pop();
  }

}
