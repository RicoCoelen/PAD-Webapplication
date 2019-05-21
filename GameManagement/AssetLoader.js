class AssetLoader {

  constructor() {
    this.winningbackground = loadImage('assets/winningBackground.png');
    this.background1 = loadImage('assets/background1.jpg');
    this.background2 = loadImage('assets/background2.jpeg');
    this.crate = loadImage('assets/crate.png');
    this.cannon = loadImage('assets/cannon.png');
    this.monkey = loadImage('assets/monkey.png');
    this.finish = loadImage('assets/finish.png');
    this.jumppad = loadImage('assets/Jumppad.png')
    this.dirt = loadImage('assets/dirtblock.png');
    this.plank = loadImage('assets/plank.png');
    this.stone = loadImage('assets/cobblestone.png');
    this.coin = loadImage('assets/banana.png');
    this.blackTriangle = loadImage('assets/blackTriangle.png');

    this.jumpsound = loadSound('assets/JumpSound.mp3');
    this.scoresound = loadSound('assets/scoreSound.wav');
    this.winsound = loadSound('assets/happyMonkey.wav');
    this.levelmusic = loadSound('assets/levelMusic.mpeg');
  }


}
