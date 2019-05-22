class LevelLoader {

  constructor() {

    this.levels = new Levels();

  }

  randomLevel(forbiddenLevels) {

    let random = round(random(1, this.levels.levels.length));

    while (random in forbiddenLevels) {

      random = round(random(1, this.levels.levels.length));

    }

    return random;

  }


  loadLevel(index, state, player, nigger) {

    let level = this.levels.getLevel(index);

    state.blocks.add(new Boundary(-100, height / 2, 200, 5000));
    state.blocks.add(new Boundary(level[0][0] + 100, height / 2, 200, 5000));
    state.blocks.add(new Boundary(width / 2, -100, 5000, 200));
    state.blocks.add(new Boundary(width / 2, height + 100, 5000, 200));

    for (let i = 1; i < level.length; i++) {

      if (level[i][0] == 0) {

        let texture = assets.crate;
        let squareBox = new SquareBox(level[i][1], level[i][2], texture, texture.width, texture.height);
        Matter.Body.setAngle(squareBox.body, level[i][5]);
        squareBox.body.friction = 0.6;
        state.blocks.add(squareBox);

      } else if (level[i][0] == 1) {

        let finish = new Finish(level[i][1], level[i][2], assets.finish.width, assets.finish.height, player.body);
        Matter.Body.setAngle(finish.body, level[i][5]);

        state.blocks.add(finish);

      } else if (level[i][0] == 2) {

        let texture = assets.plank;
        let squareBox = new SquareBox(level[i][1], level[i][2], texture, texture.width, texture.height);
        Matter.Body.setAngle(squareBox.body, level[i][5]);
        squareBox.body.density = 0.2;
        squareBox.body.friction = 0.6
        state.blocks.add(squareBox);

      } else if (level[i][0] == 3) {

        let jumpPad = new JumpPad(level[i][1], level[i][2], assets.jumppad.width, assets.jumppad.height, player.body);
        Matter.Body.setAngle(jumpPad.body, level[i][5]);

        state.blocks.add(jumpPad);

      } else if (level[i][0] == 4) {

        let texture = assets.dirt;
        let squareBox = new SquareBox(level[i][1], level[i][2], texture, texture.width, texture.height, {friction: 0.5});
        Matter.Body.setStatic(squareBox.body, true);
        squareBox.body.density = 0.3;
        squareBox.body.friction = 0.9;
        Matter.Body.setAngle(squareBox.body, level[i][5]);
        state.blocks.add(squareBox);

      } else if (level[i][0] == 5) {

        let texture = assets.stone;
        let squareBox = new SquareBox(level[i][1], level[i][2], texture, texture.width, texture.height, {friction: 0.5});
        Matter.Body.setStatic(squareBox.body, true);
        squareBox.body.density = 0.8;
        squareBox.body.friction = 1;
        Matter.Body.setAngle(squareBox.body, level[i][5]);
        state.blocks.add(squareBox);

      } else if (level[i][0] == 6) {

        let texture = assets.coin;
        let coin = new Coin(level[i][1], level[i][2], texture, texture.width, texture.height, player.body, nigger);
        Matter.Body.setAngle(coin.body, level[i][5]);
        state.blocks.add(coin);

      } else if (level[i][0] == 7){
        let speedPad = new SpeedPad(level[i][1], level[i][2], texture.width, texture.height, player.body);
        Matter.Body.setAngle(speedPad.body, level[i][5]);

        state.blocks.add(speedPad);
      } else if (level[i][0] == 8){
        let water = new Water(level[i][1], level[i][2], texture.width, texture.height, player.body);
        Matter.Body.setAngle(water.body, level[i][5]);
        Matter.Body.setStatic(water.body, true);

        state.blocks.add(water);
      }
    }
  }
}
