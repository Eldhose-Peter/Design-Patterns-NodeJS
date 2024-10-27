var Store = require("./Store");
var Shopper = require("./Shopper");
var Mall = require("./Mall");

var catsAndThings = new Store("Cats & Things");
var insAndOuts = new Store("Ins and Outs");

var alex = new Shopper("Alex");
var eve = new Shopper("Eve");
var sharon = new Shopper("Sharon");
var mike = new Shopper("Mike");

var valleyMall = new Mall();

// Adding new subscribers to catsAndThings store
catsAndThings.subscribe(alex);
catsAndThings.subscribe(eve);
catsAndThings.subscribe(mike);
catsAndThings.subscribe(valleyMall);

// Adding new subscribers to insAndOuts store
insAndOuts.subscribe(sharon);
insAndOuts.subscribe(valleyMall);

// create a new sale event
catsAndThings.sale(20);
insAndOuts.sale(50);

// the mall should be aware of all the sales that are happening
console.log(valleyMall.sales);

// Add all the Shoppers that have subrcibed must be notified of the sale event.
