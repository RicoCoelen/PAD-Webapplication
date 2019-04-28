

class SpriteGameObject extends GameObject {

  constructor(x = 0, y = 0, sprite, w = 0, h = 0) {
    super(x, y);
    this.sprite = sprite;
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
  }

  draw() {
    image(this.sprite, this.x, this.y);
  }
}
