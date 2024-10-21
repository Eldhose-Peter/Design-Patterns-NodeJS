class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
  }

  find(itemName) {
    var index = this.inventory.map((item) => item.name).indexOf(itemName);
    return this.inventory[index];
  }
}

var inventory = require("./inventory");

// here we only searching inventory -> floor item.
var skiShop = new Store("Steep and Deep", inventory.floor);

var searchItem = "ski hats";
var results = skiShop.find(searchItem);

console.log(results);

// What if we wanted to search through all the items ? one after the other ? 
// We can implement this through Chain of Responsibility
