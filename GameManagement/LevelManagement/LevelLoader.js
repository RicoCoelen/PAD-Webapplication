class LevelLoader {

  constructor() {

    this.levels = new Levels();

  }


  loadLevel(index, state) {

    let level = this.levels.getLevel(index);

    state.blocks.add(new Boundary(-40, height / 2, 80, 2000));
    state.blocks.add(new Boundary(width + 40, height / 2, 80, 2000));
    state.blocks.add(new Boundary(width / 2, -40, 2000, 80));
    state.blocks.add(new Boundary(width / 2, height + 40, 2000, 80));

    for (let i = 0; i < level.length; i++) {

      if (level[i][0] == 0) {

        state.blocks.add(new SquareBox(level[i][1], level[i][2]));

      } else if (level[i][0] == 1) {

        state.blocks.add(new Finish(level[i][1], level[i][2]));

      } else if (level[i][0] == 4) {

        state.blocks.add(new JumpPad(level[i][1], level[i][2]));

      }

    }
  }
}
