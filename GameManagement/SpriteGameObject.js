

class SpriteGameObject extends GameObject {

  constructor(x = 0, y = 0, sprite, w = 0, h = 0, rotation = 0) {
    super(x, y);
    this.sprite = sprite;
    this.w = sprite.width;
    this.h = sprite.height;
    this.x = x;
    this.y = y;
    this.rotation = rotation;

  }

  draw() {

    push();

    translate(this.x, this.y);
    cam.camTranslate();
    rotate(this.rotation);

    image(this.sprite, -this.w/2, -this.h/2);

    pop();

  }
}
