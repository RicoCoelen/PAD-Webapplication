class Camera {

  constructor() {

    this.position = createVector(0, 0);

  }

  reset() {

    this.position *= 0;

  }

  setCam(position, y = null) {

    this.position = createVector();

    if (y == null) {

      this.position = position;
      return;

    }

    this.position.x = position;
    this.position.y = y;

  }

  moveCam(position, y = null) {

    if (y == null) {

      this.position += position;
      return;

    }
    this.position.x += position;
    this.position.y += y;

  }

  camTranslate() {

    translate(this.position.x, this.position.y);

  }

}
