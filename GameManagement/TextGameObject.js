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

    push();

    translate(this.position.x, this.position.y);
    cam.camTranslate();

    textFont(assets.afritubufont, 20);
    text(this.text, 0, 0);

    pop();

  }
}
