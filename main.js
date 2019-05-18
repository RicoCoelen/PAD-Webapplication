var gameEnvironment;
var world;
var engine;
var assets;

function setup() {
  // create canvas.
  createCanvas(1080, 600);

  assets = new AssetLoader();

  // Creates gameEnvironment.
  gameEnvironment = new GameEnvironment();
  // add new states in the state list.
  gameEnvironment.gameStateManager.add(new PlayingState(), "PlayingState");
  gameEnvironment.gameStateManager.add(new GameEnd(), "GameEnd");
  gameEnvironment.gameStateManager.add(new Level(), "Level");
  // change scene to first in array.
  gameEnvironment.gameStateManager.switchTo("Level");
}

function draw() {
  // refresh background.
  background(140);
  //Update and draw the currentGameState.
  gameEnvironment.updateAndDraw();
}
