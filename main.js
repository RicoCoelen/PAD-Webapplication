var gameEnvironment;
var world;
var engine;
var assets;

function setup() {
  // create canvas.
  createCanvas(1080, 600);

  assets = new AssetLoader();

  engine = Matter.Engine.create();
  world = engine.world;

  // add mouse constraint if nesscesary
  Matter.World.add(world, Matter.MouseConstraint.create(engine));

  // Creates gameEnvironment.
  gameEnvironment = new GameEnvironment();
  // add new states in the state list.
  gameEnvironment.gameStateManager.add(new PlayingState(), "PlayingState");
  gameEnvironment.gameStateManager.add(new TestState(), "TestState");
  gameEnvironment.gameStateManager.add(new Level(), "Level");
  // change scene to first in array.
  gameEnvironment.gameStateManager.switchTo("Level");
}

function draw() {
  // refresh background.
  background(140);
  Matter.Engine.update(engine);
  //Update and draw the currentGameState.
  gameEnvironment.updateAndDraw();
}
