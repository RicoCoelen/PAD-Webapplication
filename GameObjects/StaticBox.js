/*
this is the box class
*/
class StaticBox extends Box {

  constructor(x, y, w, h, options) {
    // pass variables to upper class
    super(x, y, w, h, options);
    // make body static
    this.body.isStatic = true;
  }
}
