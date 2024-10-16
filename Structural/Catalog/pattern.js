class CatalogItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get total() {
    return this.price;
  }

  print() {
    console.log(`${this.name} $${this.price} `);
  }
}

class CatalogGroup {
  constructor(name, composites = []) {
    this.name = name;
    this.composites = composites;
  }

  get total() {
    return this.composites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);
    this.composites.forEach((item) => item.print());
  }
}

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

// a group of items
var group_shoes = new CatalogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops,
]);

// a group of items
var group_food = new CatalogGroup("Food for while you try on clothes", [
  new CatalogItem("Milkshake", 5.99),
  new CatalogItem("French Fries", 3.99),
]);

// an item
var keychain = new CatalogItem("Key Chain", 0.99);

// a group of item and group
var catalog = new CatalogGroup("Clothes and Food", [
  keychain,
  group_shoes,
  group_food,
]);

// get the total of all the group
console.log(`$${catalog.total}`);

// print all the items in the group
catalog.print();
