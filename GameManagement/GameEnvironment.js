/*
The class that is going to bring all the game management together.
*/
class GameEnvironment {

  constructor() {
    this.gameStateManager = new GameStateManager();
    this.inputHandler = new InputHandler();
  }

  updateAndDraw() {
    this.gameStateManager.updateAndDraw();
  }

  handleInput() {
    this.gameStateManager.handleInput();
  }
}
