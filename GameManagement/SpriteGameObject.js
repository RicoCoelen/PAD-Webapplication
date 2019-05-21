

class SpriteGameObject extends GameObject {

  constructor(x = 0, y = 0, sprite, offsetAngle = 0) {
    super(x, y);
    this.texture = sprite;
    this.w = sprite.width;
    this.h = sprite.height;
    this.x = x;
    this.y = y;
    this.offsetAngle = offsetAngle;

  }

  draw() {

    let pos;
    let angle;

    if (this.body != null) {

      pos = this.body.position;
      angle = this.body.angle;

    } else {

      pos = createVector(this.x, this.y);
      angle = 0;

    }

    angle += this.offsetAngle;

    push();

    translate(pos.x, pos.y);
    cam.camTranslate();
    rotate(angle);

    image(this.texture, -this.w/2, -this.h/2);

    pop();

  }
}
