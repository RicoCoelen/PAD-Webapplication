class TracingLine extends GameObject {
  constructor(cannon, player, dotsAmount = 30) {
    super(0, 0, 0, 0);
    this.cannon = cannon;
    this.player = player;
    this.player.gravity = 0.4;
    this.dotsAmount = dotsAmount;
  }

  update() {
    this.draw()
  }

  draw() {

    if (this.cannon.shootingFase != 3) {

      fill(255, 0, 0);

      this.velocity.x = cos(this.cannon.angle) * (this.cannon.radius / 100) * this.player.maxSpeed;
      this.velocity.y = -sin(this.cannon.angle) * (this.cannon.radius / 100) * this.player.maxSpeed;

      this.position.x = this.cannon.position.x ;

      for (let i = 2; i < this.dotsAmount; i++) {

        for (let j = 0; j < 1; j += 0.1) {
          this.velocity.y += (this.player.gravity / 2 - 0.05) * 0.1;

        }
        this.velocity.x *= 0.995;

        this.position.x = i * this.velocity.x + this.cannon.position.x;

        this.position.y = i * this.velocity.y + this.cannon.position.y - 15;



        ellipse(this.position.x, this.position.y, 5, 5);
      }

    }

  }
}
