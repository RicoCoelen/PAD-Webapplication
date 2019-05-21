class LevelLoader {

  constructor() {

    this.levels = new Levels();

  }

  randomLevel(forbiddenLevels = null, state, player) {

    let random = round(random(1, this.levels.levels.length));

    while (random in forbiddenLevels) {

      random = round(random(1, this.levels.levels.length));

    }

    loadLevel(random, state, player);

  }


  loadLevel(index, state, player) {

    let level = this.levels.getLevel(index);

    state.blocks.add(new Boundary(-100, height / 2, 200, 2000));
    state.blocks.add(new Boundary(width + 100, height / 2, 200, 2000));
    state.blocks.add(new Boundary(width / 2, -100, 2000, 200));
    state.blocks.add(new Boundary(width / 2, height + 100, 2000, 200));

    for (let i = 0; i < level.length; i++) {

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

        let jumpPad = new JumpPad(level[i][1], level[i][2], player.body);
        Matter.Body.setAngle(jumpPad.body, level[i][5]);

        state.blocks.add(jumpPad);

      } else if (level[i][0] == 2) {

        state.blocks.add(new SquareBox(level[i][1], level[i][2], 1, 167, 25))

      } else if (level[i][0] == 4) {

        let texture = assets.dirt;
        let squareBox = new SquareBox(level[i][1], level[i][2], texture, texture.width, texture.height, {friction: 0.5});
        squareBox.body.density = 0.3;
        squareBox.body.friction = 0.9;
        Matter.Body.setAngle(squareBox.body, level[i][5]);
        state.blocks.add(squareBox);

      } else if (level[i][0] == 5) {

        let texture = assets.stone;
        let squareBox = new SquareBox(level[i][1], level[i][2], texture, texture.width, texture.height, {friction: 0.5});
        squareBox.body.density = 0.8;
        squareBox.body.friction = 1;
        Matter.Body.setAngle(squareBox.body, level[i][5]);
        state.blocks.add(squareBox);

      } else if (level[i][0] == 6) {

        let texture = assets.coin;
        let coin = new Coin(level[i][1], level[i][2], texture, texture.width, texture.height, player.body);
        Matter.Body.setAngle(coin.body, level[i][5]);
        state.blocks.add(coin);

      }


    }
  }
}
