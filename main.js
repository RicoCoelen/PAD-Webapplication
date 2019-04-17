var gameEnvironment;
var world;
var engine;

function setup() {
  // create canvas.
  createCanvas(1080, 600);
  // Creates gameEnvironment.
  gameEnvironment = new GameEnvironment();
  // add new states in the state list.
  gameEnvironment.gameStateManager.add(new PlayingState(), "PlayingState");
  gameEnvironment.gameStateManager.add(new TestState(), "TestState");
  // change scene to first in array.
  gameEnvironment.gameStateManager.switchTo("PlayingState");
}

function draw() {
  // refresh background.
  background(140);
  //Update and draw the currentGameState.
  gameEnvironment.updateAndDraw();
}
