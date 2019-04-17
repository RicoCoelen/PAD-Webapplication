

class SpriteGameObject extends GameObject {

  constructor(x = 0, y = 0, sprite) {
    super(x, y);
    this.sprite = loadImage(sprite);
    this.w = this.sprite.width;
    this.h = this.sprite.height;
  }
}
