class LevelLoader {

  constructor() {

    this.levels = new Levels();

  }


  loadLevel(index, state) {

    let level = this.levels.getLevel(index);

    for (let i = 0; i < level.length; i++) {

      if (level[i][0] == 0) {

        state.blocks.add(new SquareBox(level[i][1], level[i][2]));

      } else if (level[i][0] == 1) {

        state.blocks.add(new Finish(level[i][1], level[i][2]));

      } else if (level[i][0] == 2) {

        state.blocks.add(new HorStaticBox(level[i][1], level[i][2]));

      } else if (level[i][0] == 3) {

        state.blocks.add(new VerStaticBox(level[i][1], level[i][2]));

      }

    }

  }


}
