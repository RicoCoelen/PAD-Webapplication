class SpeedPad extends GameObject{
  constructor(x, y, w, h, options = null){
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

    // if flipped objects will be sent to the left instead
    this.flipped = true;

    this.collisions = [];
  }


  update(){
    super.update();

    this.vertices = this.body.vertices;

    if(this.collisions.length >= 1){

      for(let i = 0; i < this.collisions.length; i++){

        if(this.vertices[0].x < this.collisions[i].bodyB.position.x && this.vertices[1].x > this.collisions[i].bodyB.position.x){

          if(0 < (this.vertices[0].y + this.vertices[1].y + this.vertices[2].y + this.vertices[3].y - this.collisions[i].bodyB.position.y * 4) / 4){
            if(this.flipped){
              Matter.Body.setVelocity(this.collisions[i].bodyB, {
                x: this.collisions[i].bodyB.velocity.x - (this.vertices[1].x - this.vertices[0].x) / this.w,
                y: this.collisions[i].bodyB.velocity.y - (this.vertices[0].y - this.vertices[1].y) / this.w
              });
            }else{
              Matter.Body.setVelocity(this.collisions[i].bodyB, {
                x: this.collisions[i].bodyB.velocity.x - (this.vertices[0].x - this.vertices[1].x) / this.w,
                y: this.collisions[i].bodyB.velocity.y - (this.vertices[0].y - this.vertices[1].y) / this.w
              });
            }
          }
        }
      }
    }
  }


  draw(){
    //get body position
    var pos = this.body.position;
    var angle = this.body.angle;

    // draw box
    fill(200, 200, 0, 60);
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    rect(0, -this.h / 4, this.w, this.h / 2);
    pop();
    fill(0);
  }
}
