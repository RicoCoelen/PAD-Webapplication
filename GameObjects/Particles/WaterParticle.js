/*
this is the circle class
*/
class WaterParticle extends GameObject {

  constructor(x, y, r, options = null) {
    // pass variables to upper class
    super(x, y);
    // save variables to object
    this.x = x;
    this.y = y;
    this.r = r;
    this.options = options;
    this.lifespan = 255;
    // add rigidbody physics to box
    this.body = Matter.Bodies.circle(this.x, this.y, this.r, this.options);
    //then add to World
    Matter.World.add(world, this.body);

  }

  update() {
    super.update();
    this.isDead();
  }

  draw() {
    this.lifespan -= 20;
    // get position and angle of rigidbody
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    push();
    translate(pos.x, pos.y);
    cam.camTranslate();
    rotate(angle);
    circle(0, 0, this.r);
    pop();
  }

   isDead() {
     return this.lifespan < 0;
     if(lifespan < 0){
   }
  }

}
