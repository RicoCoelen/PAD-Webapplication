class LevelLoader {

  constructor() {

    this.levels = new Levels();

  }


  loadLevel(index, state, player) {

    let level = this.levels.getLevel(index);

    state.blocks.add(new Boundary(-100, height / 2, 200, 2000));
    state.blocks.add(new Boundary(width + 100, height / 2, 200, 2000));
    state.blocks.add(new Boundary(width / 2, -100, 2000, 200));
    state.blocks.add(new Boundary(width / 2, height + 100, 2000, 200));

    for (let i = 0; i < level.length; i++) {

      if (level[i][0] == 0) {

        let squareBox = new SquareBox(level[i][1], level[i][2], assets.crate);
        Matter.Body.setAngle(squareBox.body, level[i][5]);

        state.blocks.add(squareBox);

      } else if (level[i][0] == 1) {

        let finish = new Finish(level[i][1], level[i][2]);
        Matter.Body.setAngle(finish.body, level[i][5]);

        state.blocks.add(finish);

      } else if (level[i][0] == 2) {

        state.blocks.add(new SquareBox(level[i][1], level[i][2], assets.plank, 167, 25));

      } else if (level[i][0] == 3) {

        let jumpPad = new JumpPad(level[i][1], level[i][2], player.body);
        Matter.Body.setAngle(jumpPad.body, level[i][5]);

        state.blocks.add(jumpPad);

      } else if (level[i][0] == 4) {

        state.blocks.add(new SquareBox(level[i][1], level[i][2], assets.dirt, 50, 50));

      }
    }
  }
}
