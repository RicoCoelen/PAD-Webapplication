class LevelLoader {

  constructor() {

    this.levels = new Levels();

  }


  loadLevel(index, state) {

    let level = this.levels.getLevel(index);

    for (let i = 0; i < level.length; i++) {

      if (level[i][0] == 0) {

        state.blocks.add(new SquareBox(level[i][1], level[i][2]));
      }

    }

  }


}
