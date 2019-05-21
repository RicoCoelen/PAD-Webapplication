class ScoreBoard extends TextGameObject {

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

    textFont(assets.junglefont, 36);
    textSize(50);
    textStyle();
    fill(255, 153, 51);
    text(this.text, 0, 5);
    image(assets.coin, 40, -45);

    pop();

  }

}
