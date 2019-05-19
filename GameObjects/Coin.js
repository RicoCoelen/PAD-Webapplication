class Coin extends SquareEffect {

  constructor(x, y, texture, w, h, otherBody = null) {

    super(x, y, w, h, otherBody);

    var life = 1;

    this.currentSinusTimer = 1;
    this.sinusTimer = 30;

    this.visible = true;
    this.texture = texture;

    this.body.isStatic = true;
    this.body.collisionFilter.category = 0;

    this.effect = function(otherBody) {

      if (this.life = 1) {

        this.life = 0;
        this.visible = false;
        assets.scoresound.play();
        Matter.Body.setPosition(this.body, {
          x: -600,
          y: -600
        })

      }
    };

  }

  update() {

    super.update();

    if (this.currentSinusTimer >= this.sinusTimer) {

      this.currentSinusTimer = -this.sinusTimer;
    }

    if (this.currentSinusTimer >= 0 && this.currentSinusTimer < this.sinusTimer) {

      this.currentSinusTimer += 1;
      this.body.position.y += 0.5;
      //Matter.Body.setVelocity(this.body, {0,1})

    } else if (this.currentSinusTimer >= -this.sinusTimer && this.currentSinusTimer < 0) {

      this.currentSinusTimer += 1;
      this.body.position.y -= 0.5;

    }

  }


  draw() {

    if (this.visible) {
      // get position and angle of rigidbody
      var pos = this.body.position;
      var angle = this.body.angle;

      // draw box
      push();
      translate(pos.x, pos.y);
      cam.camTranslate();
      rotate(angle);
      image(this.texture, -this.texture.width / 2, -this.texture.height / 2);
      pop();

    }
  }
}
