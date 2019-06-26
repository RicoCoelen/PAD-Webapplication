class Button extends GameObject {

  constructor(x, y, w, h) {

    super(x, y);

    this.w = w;
    this.h = h;
    this.buttonFunc = function() {
      console.log("No button function found");
    };

  }

  draw() {

    push();

    translate(this.position.x, this.position.y);
    cam.camTranslate();

    fill(255, 4,5);
    rect(0, 0, this.w, this.h);

    pop();

  }

  setButtonFunc(func) {

    this.buttonFunc = func;

  }

  mousePressed() {

    if (mouseX > this.position.x && mouseX < this.position.x + this.w &&
        mouseY > this.position.y && mouseY < this.position.y + this.h) {

      if (this.buttonFunc != null) {

        this.buttonFunc();

      }

    }

  }

}
