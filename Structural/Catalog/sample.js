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

// here each catalog item are stored separatly
var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

// and we can print an item total
console.log("boots total: ", `$${boots.total}`);

// now what if want to group together some of these items. and maybe we wanted to print the total of a group.
// For that we need to create a CatalogGroup which implements the same interface as CatalogItem
// Only then a catalog item and a catalog can be treated in the same way
