var gameEnvironment;
var world;
var engine;
var assets;
let levelmusic;
let cam;

function preload() {
  // preload() runs once
  assets = new AssetLoader();
}

function setup() {

  //add camera
  cam = new Camera();

  // create canvas.
  createCanvas(1080, 600);

  // Creates gameEnvironment.
  gameEnvironment = new GameEnvironment();
  // add new states in the state list.
  gameEnvironment.gameStateManager.add(new PlayingState(), "PlayingState");
  gameEnvironment.gameStateManager.add(new GameEnd(), "GameEnd");
  gameEnvironment.gameStateManager.add(new Level(), "Level");
  // change scene to first in array.
  gameEnvironment.gameStateManager.switchTo("PlayingState");
}

function draw() {
  // refresh background.
  background(140);
  //Update and draw the currentGameState.
  gameEnvironment.updateAndDraw();
}
