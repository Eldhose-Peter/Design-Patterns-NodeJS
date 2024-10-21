class Storage {

    constructor(name, inventory=[], deliveryTime=0) {
        this.name = name;
        this.inventory = inventory;
        this.deliveryTime = deliveryTime;
        this.next = null;
    }

    lookInLocalInventory(itemName) {
        var index = this.inventory.map(item => item.name).indexOf(itemName);
        return this.inventory[index];
    }

    setNext(storage) {
        this.next = storage;
    }

    find(itemName) {
        var found = this.lookInLocalInventory(itemName);
        if (found) {
            return {
                name: found.name,
                qty: found.qty,
                location: this.name,
                deliveryTime: (this.deliveryTime === 0) ? 'now' : `${this.deliveryTime} day(s)`
            }
        } else if (this.next) {
            return this.next.find(itemName);
        } else {
            return `we do not carry ${itemName}`;
        }
    }

}

class Store {

    constructor(name, inventory=[]) {
        this.name = name;

        var floor = new Storage('store floor', inventory.floor);
        var backroom = new Storage('store backroom', inventory.backroom);
        var localStore = new Storage('nearby store', inventory.localStore, 1);
        var warehouse = new Storage('warehouse', inventory.warehouse, 5);

        // Here we are chaining the responsiblity 
        // from one item to the next
        // propagates till the item is found
        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;

    }

    find(itemName) {
        return this.storage.find(itemName);
    }

}

var inventory = require('./inventory');

var skiShop = new Store('Steep and Deep', inventory);

var searchItem = 'powder skis';
var results = skiShop.find(searchItem);

console.log( results );



