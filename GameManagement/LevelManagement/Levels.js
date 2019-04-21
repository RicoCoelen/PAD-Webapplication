class Levels {

  constructor() {

    this.levels = [];
    this.levels.push([[0, 339.0, 374.0], [0, 738.0, 410.0], [0, 517.0, 608.0], [0, 529.0, 400.0], [0, 863.0, 447.0], [0, 663.0, 447.0], [0, 663.0, 447.0], [0, 863.0, 447.0]]);
    this.levels.push([[0, 248.0, 383.0], [0, 576.0, 353.0], [0, 1216.0, 325.0]]);

  }

  getLevel(index){

    return this.levels[index];

  }

}
