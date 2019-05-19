class JumpPad extends SpriteGameObject {

  constructor(x, y, w, h, sprite = assets.jumppad, options = null){
    // pass variables to upper class
    super(x, y, sprite, w, h);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.sprite = sprite;

    // add matter.js options for physics
    this.options = options;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
    this.body.isStatic = true;

    this.collisions = [];
  }

  update() {

    super.update();

    this.vertices = this.body.vertices;

    if(this.collisions.length >= 1){

      for(let i = 0; i < this.collisions.length; i++){

        if(this.vertices[0].x < this.collisions[i].bodyB.position.x && this.vertices[1].x > this.collisions[i].bodyB.position.x){

          Matter.Body.setVelocity(this.collisions[i].bodyB, {
            x: 5 * -((this.vertices[0].y - this.vertices[1].y) / this.w),
            y: 5 * ((this.vertices[0].x - this.vertices[1].x) / this.w)
          });
        }

      }

    }

  }


  draw(){
    //get body position
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    push();
    translate(pos.x, pos.y);
    cam.camTranslate();
    rotate(angle);
    image(this.sprite, 0 - this.w / 2, 0 - this.h / 2, this.w, this.h);
    pop();
  }
}
