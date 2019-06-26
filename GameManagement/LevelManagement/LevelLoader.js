class LevelLoader {

  constructor() {

    // Initiates an instance of levels which holds the level in array form
    this.levels = new Levels();

  }

  // Returns an integer that corresponds to a level that was not in forbiddenLevels
  randomLevel(forbiddenLevels) {

    let random = round(random(1, this.levels.levels.length));

    while (random in forbiddenLevels) {

      random = round(random(1, this.levels.levels.length));

    }

    return random;

  }

  // Takes in the current state and the level to load and loads the level into the current state
  loadLevel(index, state, player, coins) {

    // Gets the array of the selected level
    let level = this.levels.getLevel(index);

    // Adds standard invisible Boundaries to the state
    state.blocks.add(new Boundary(-100, height / 2, 200, 5000));
    state.blocks.add(new Boundary(level[0][0] + 100, height / 2, 200, 5000));
    state.blocks.add(new Boundary(width / 2, -100, 5000, 200));
    state.blocks.add(new Boundary(width / 2, height + 100, 5000, 200));

    // Loops through the level array and adds the objects in it to the scene
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
        let coin = new Coin(level[i][1], level[i][2], texture, texture.width, texture.height, player.body, coins);
        Matter.Body.setAngle(coin.body, level[i][5]);
        state.blocks.add(coin);

      } else if (level[i][0] == 7){
        let speedPad = new SpeedPad(level[i][1], level[i][2], 370, assets.speedpad.height, player.body);
        Matter.Body.setAngle(speedPad.body, level[i][5]);

        state.blocks.add(speedPad);

      } else if (level[i][0] == 8){
        let water = new Water(level[i][1], level[i][2], assets.water.width, assets.water.height, player.body);
        Matter.Body.setAngle(water.body, level[i][5]);
        state.blocks.add(water);
      }
    }
  }
}
