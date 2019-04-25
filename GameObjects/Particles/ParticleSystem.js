class ParticleSystem extends GameObject{

  constructor(x,y){
    super(x,y);
    this.x = x;
    this.y = y;
    this.waterParticles = [];
  }

  update(){
    super.update();
    this.addParticle();
  }

  addParticle(){

    this.waterParticles.push(new WaterParticle(this.x ,this.y, 40));
    console.log(this.waterParticles.length);

  }

  draw(){

    for (let i = this.waterParticles.length-1; i >= 0; i -= 1) {
      let w = this.waterParticles[i];
      w.update();
      w.draw();
      if (w.isDead()) {
        Matter.World.remove(world, this.WaterParticle, [deep=true])
        this.waterParticles.splice(i,1);
      }
    }

  }
}
