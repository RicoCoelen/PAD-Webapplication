// needs fixing and maybe add texture to regular block for same effect but beter
class ImageBox extends SpriteGameObject {

  constructor(x, y, sprite, world, options = null) {
    // pass variable to upper class
    super(x, y, sprite);

    // save variables to object
    this.x = x;
    this.y = y;

    // add matter.js options for physics
    this.options = options;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
  }

  update() {
    super.update();
  }

  draw() {
    // get position and angle of rigidbody
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.sprite, 580, 550);
    pop();
  }
}
