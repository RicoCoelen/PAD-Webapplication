/*
EXAMPLE CLASS!
*/
class Star extends SpriteGameObject {

  constructor() {
    super(0, 0, 'assets/star.png');
  }

  update() {
    super.update();
    this.position.x = mouseX - this.sprite.width/2;
    this.position.y = mouseY - this.sprite.height/2;
  }
}
