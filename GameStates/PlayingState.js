class PlayingState extends GameObjectList {

  constructor() {
    // call base class
    super();
    // resets the state
    this.reset();
  }

  /*
   this function resets the state and init all the variables
   type:void
  */
  reset() {

    super.reset();

    this.result = -1;

    // add extra game object list to keep it ordered
    this.blocks = new GameObjectList();
    this.texts = new GameObjectList();

    //Testing
    this.water = new Water(512, height / 2, 175, height);
    this.speedPad = new SpeedPad(624, height * 7 / 8, 175, height / 8);
    this.popupMenu = new PopupMenu(100, 100, width - 200, height - 200);

    // Load level
    this.levelLoader = new LevelLoader();
    this.levelLoader.loadLevel(0, this, this.player);

    // create the player and the cannon/line
    this.player = new Player(50, height - 25, assets.monkey.width/2, {isStatic: false, restitution: 0.99});
    this.theCannon = new Cannon(50, height - 25, 100, this.player, 0.5);
    this.tracingLine = new TracingLine(this.theCannon, this.player, 50);

    // add static blockss
    this.blocks.add(new StaticBox(200, height - 40, 25, 80));  // 1st

    // make static outer walls


    // add text objects
    this.texts.add(new TextGameObject(220, height - 50, "Geen Pijn"));
    this.texts.add(new TextGameObject((220 + width - 100) / 2, height - 50, "Gemmidelde Pijn"));
    this.texts.add(new TextGameObject(width - 100, height - 50, "Erg Veel Pijn"));

    for(let i = 1; i <= 10 ; i++){
      this.texts.add(new TextGameObject(150 + (width - 170) / 10 * i, height - 20, i));
    }

    // add the important stuff to gameobjectlist

    this.add(new SpriteGameObject(width/2, height/2, assets.background1, assets.background1.width, assets.background1.height));
    this.add(this.player);
    this.add(this.tracingLine);
    this.add(this.theCannon);
    this.add(this.blocks);
    this.add(this.texts);
    this.add(this.popupMenu);

  }

  update(){

    super.update();

    if (this.theCannon.shootingFase == 3) {
      this.player.visible = true;
    }
    else {
      this.player.visible = false;
    }


    if (this.player.body.position.y >= 560 && this.player.body.position.x >= 225 && this.player.body.position.x <= width) {
      this.popupMenu.result = round((this.player.body.position.x - 150) / (width - 170) * 1000, 2) / 100;
      this.popupMenu.visible = true;
      Matter.Body.setVelocity(this.player.body, {x: 0, y:0});
    }

    // gets the array with collisions form library
    this.water.collisions = Matter.Query.collides(this.water.body, [this.player.body]);
    this.speedPad.collisions = Matter.Query.collides(this.speedPad.body, [this.player.body]);

    cam.setCam(width/2-this.player.body.position.x, 0);

    if (this.player.body.position.x < width/2) {

      cam.setCam(0, 0);

    } else if (this.player.body.position > 100000) {

      cam.setCam(10000000 - width/2);

    }

  }
}
