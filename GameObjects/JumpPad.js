class JumpPad extends SquareEffect {

  constructor(x, y) {

    super(x, y, 100, 25);
    this.setEffect(function () {

    });

  }

  update(){
    super.update();
    this.effect();

  }

}
