/*
use this class to draw text.
*/
class TextGameObject extends GameObject {

  constructor(x, y, text) {
    // instansiate
    super(x, y);
    // give current object string
    this.text = text;
  }

  draw() {
    // draw text on position
    text(this.text, this.position.x, this.position.y);
  }
}
