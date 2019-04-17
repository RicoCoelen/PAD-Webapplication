class GameStateManager {

  constructor() {
    //List that is going to hold all the game states.
    this.children = [];
    this.currentGameState = null;
  }

  //Function to add a gameState to the gameStateList.
  add(gameState, name) {
    //Checks if the given object is of type GameObjectList.
    if (gameState instanceof GameObjectList) {
      // add game state to children
      this.children[name] = gameState;
    }
  }

  updateAndDraw() {
    // update current gamestate
    this.currentGameState.update();
    this.currentGameState.draw();
  }

  handleInput() {
    this.currentGameState.handleInput();
  }

  //This is a function to switch state.
  switchTo(name) {
    //Checks if the given index is valid.
    if (name in this.children) {
      this.currentGameState = this.children[name];
    }
  }
}
