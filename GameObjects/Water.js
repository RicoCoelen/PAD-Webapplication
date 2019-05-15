class Water extends GameObject{
  constructor(x, y, w, h, options = null) {
    // pass variables to upper class
    super(x, y);

    // save variables to object
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    // add matter.js options for physics
    this.options = options;

    // add rigidbody physics to box
    this.body = Matter.Bodies.rectangle(this.x, this.y, this.w, this.h, this.options);
    this.body.isStatic = true;
    this.body.collisionFilter.category = 0;
  }

  update(){
    super.update();
  }

  draw(){
    //get body position
    var pos = this.body.position;

    // draw box
    fill(0, 0, 240, 60);
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
    fill(0);
  }
}
