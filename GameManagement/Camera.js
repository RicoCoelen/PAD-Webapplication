class Camera {

  constructor() {

    this.position = createVector(0, 0);

  }

  reset() {

    this.position = createVector(0, 0);

  }

  setCam(position, y = null) {

    this.position = createVector(0, 0);

    if (y == null) {

      this.position = position;

    } else {

      this.position.x = position;
      this.position.y = y;

    }



  }

  moveCam(position, y = null) {

    if (y == null) {

      this.position += position;
      return;

    }
    this.position.x += position;
    this.position.y += y;

  }

  camTranslate(scalar = 1) {

    translate(this.position.x * scalar, this.position.y * scalar);

  }

}
