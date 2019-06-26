var gameStateManager; // Holds instances of game states and can switch between them
var world; // 
var engine; //
var assets; // Class that holds all the assets in a usable format
let levelmusic; //
let cam; // The camera for the game

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
  gameStateManager = new GameStateManager();

  // add new states in the state list.
  let level = new Level();
  gameStateManager.add(new PlayingState(), "PlayingState");
  gameStateManager.add(new GameEnd(), "GameEnd");
  gameStateManager.add(level, "Level");
  gameStateManager.add(new Menu(), "Menu");
  gameStateManager.add(new LevelSelect(level), "LevelSelect");

  // change scene to startscreen.
  gameStateManager.switchTo("Menu");

}

function draw() {

  // refresh background.
  background(140);

  //Update and draw the currentGameState.
  gameStateManager.updateAndDraw();

}
