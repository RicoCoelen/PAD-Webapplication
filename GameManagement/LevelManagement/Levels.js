class Levels {

  constructor() {
    this.levels = [];
    this.levels.push([]);
    this.levels.push([[0, 248.0, 383.0], [0, 576.0, 353.0], [0, 1216.0, 325.0]]);
    this.levels.push([[1, 977.0, 495.0], [1, 977.0, 495.0], [1, 777.0, 495.0], [1, 977.0, 495.0], [1, 577.0, 495.0], [1, 377.0, 495.0], [1, 177.0, 495.0], [1, 177.0, 495.0], [0, 177.0, 295.0], [0, 377.0, 295.0], [0, 577.0, 295.0], [0, 777.0, 295.0], [0, 977.0, 295.0]]);
    this.levels.push([[2, 488.0, 596.0], [3, 1078.0, 317.0], [2, 1024.0, 593.0], [3, 0.0, 287.0], [2, 408.0, 5.0], [2, 1001.0, 4.0], [1, 922.0, 510.0], [1, 845.0, 507.0], [1, 851.0, 423.0], [1, 931.0, 443.0], [0, 500.0, 548.0], [0, 500.0, 513.0], [0, 499.0, 490.0], [0, 499.0, 452.0], [0, 501.0, 432.0], [0, 509.0, 397.0], [0, 510.0, 368.0], [0, 510.0, 360.0], [0, 510.0, 333.0], [0, 512.0, 315.0], [0, 494.0, 569.0], [0, 502.0, 578.0], [0, 520.0, 571.0]]);
    this.levels.push([[3, 1068.0, 324.0], [3, 12.0, 328.0], [2, 340.0, 585.0], [2, 902.0, 585.0], [2, 871.0, 10.0], [2, 313.0, 8.0], [0, 554.0, 240.0], [0, 551.0, 174.0], [0, 556.0, 122.0], [0, 551.0, 92.0], [0, 552.0, 43.0], [0, 557.0, 276.0], [1, 854.0, 148.0], [1, 943.0, 53.0], [1, 756.0, 105.0]]);
    this.levels.push([[1, 856.0, 326.0], [0, 525.0, 423.0], [0, 472.0, 447.0], [4, 100, 100]]);
    this.levels.push([[0, 837.0, 474.0, 50.0, 50.0, 0.7853982], [1, 700.0, 463.0, 50.0, 50.0, 0.7853982], [2, 864.0, 377.0, 50.0, 50.0, 0.0], [3, 912.0, 159.0, 50.0, 50.0, 0.34906584], [4, 762.0, 186.0, 50.0, 50.0, 0.34906584], [1, 716.0, 311.0, 50.0, 50.0, 0.0], [1, 779.0, 306.0, 50.0, 50.0, 0.7853982], [6, 434.0, 417.0, 50.0, 50.0, 0.7853982], [6, 480.0, 200.0, 0, 0, 0]]);
  }

  getLevel(index){
    return this.levels[index];
  }
}
