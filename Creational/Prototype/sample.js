class Shopper {
  constructor(name = "unnamed person") {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }
}

// repetitve code to initialise a large object
var alex = new Shopper("Alex Banks");
alex.addItemToList("camping knife");
alex.addItemToList("tent");
alex.addItemToList("backpack");
alex.addItemToList("map");
alex.addItemToList("slingshot");

// repetitve code to initialise a large object
var eve = new Shopper("Eve Porcello");
eve.addItemToList("camping knife");
eve.addItemToList("tent");
eve.addItemToList("backpack");
eve.addItemToList("map");
eve.addItemToList("reading light");
