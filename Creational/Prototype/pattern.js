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

  clone() {
    // generate a prototype
    var proto = Object.getPrototypeOf(this);
    // use the prototype to create a new object
    var cloned = Object.create(proto);

    cloned._name = this._name;
    cloned._shoppingList = [...this._shoppingList];

    return cloned;
  }
}

// creating prototype
var scout_prototype = new Shopper();
scout.addItemToList("camping knife");
scout.addItemToList("tent");
scout.addItemToList("backpack");
scout.addItemToList("map");

// using prototype to initiliase object
var alex = scout_prototype.clone();
alex.name = "Alex Banks";
alex.addItemToList("slingshot");

// using prototype to initiliase object
var eve = scout_prototype.clone();
eve.name = "Eve Porcello";
eve.addItemToList("reading light");
