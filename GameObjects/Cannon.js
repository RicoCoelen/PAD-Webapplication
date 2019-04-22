class Cannon extends GameObject {


  constructor(x, y, r = 100, child, options = null) {

    super(x, y);

    // we add the child of the cannon and add it to class variable
    this.child = child;

    //prevents going to next shootingfase within a frame
    this.cooldown = false;

    //determines what should be affected bij the user input
    this.shootingFase = 0;

    //cirkel information
    this.maxRadius = 100;
    this.radius = r;
    //this.middleX = width / 2;
    //this.middleY = height / 2;

    //set how far the angle is to shoot and how quick it moves
    this.minDeg = -20;
    this.maxDeg = 90;
    this.currentDeg = -20;
    this.speed = 0.9;
    // give this object a body
  }

  update() {

    //checks for input and moves to next fase when needed
    if (keyIsPressed && !this.cooldown) {
      this.shootingFase += 1;
      this.cooldown = true;
      this.speed = -0.9;
    } else if (this.cooldown && !keyIsPressed) {
      this.cooldown = false;
    }

    //fase 1 sets the shooting angle
    if (this.shootingFase == 0)
    {
      this.angle = this.currentDeg * (PI / 180);
      this.currentDeg += this.speed;

      if (this.currentDeg <= this.minDeg || this.currentDeg >= this.maxDeg) {
        this.speed *= -0.9;
      }
    }

    //fase 2 sets the shooting power
    else if (this.shootingFase == 1) {
      this.radius += this.speed;
      if (this.radius <= 0 || this.radius >= this.maxRadius) {
        this.speed *= -0.9;
      }
    }

    //sets the velociry to the ball object and sets shootingfase to do nothing
    else if (this.shootingFase == 2) {
      // make static for first seconds
      Matter.Body.setStatic(this.child.body, false);
      Matter.Body.setVelocity( this.child.body, {x: cos(this.angle) * (this.radius / 100) * this.child.maxSpeed, y: -(sin(this.angle) * (this.radius / 100)) * this.child.maxSpeed});
      this.child.fall = true;
      this.shootingFase++;
    }
  }

  draw() {
    fill(255);
    // draw circle with changing sizes
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    // draw line of circle
    line(this.position.x, this.position.y, (cos(this.angle) * this.radius) + this.position.x, -(sin(this.angle) * this.radius) + this.position.y);
  }

}
