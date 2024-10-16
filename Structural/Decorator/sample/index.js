var Shopper = require("./Shopper");
var InventoryItem = require("./InventoryItem");

var alex = new Shopper("Alex", 100);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

// here we have initialised items walkman and necklace
// what if we want to add some additional properties to these items,
// without changing the base InventoryItem class.

// It possible to do this by creating a wrapper/decorator class around the InventoryItem class.
// This allows you to extend the functionality of InventoryItem without modifying it.

alex.purchase(necklace);
alex.purchase(walkman);

alex.printStatus();
