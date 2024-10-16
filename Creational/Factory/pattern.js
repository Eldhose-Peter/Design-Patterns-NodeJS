var Employee = require("./Employee");
var Shopper = require("./Shopper");

// create a factory method, that would create the right object for you
var userFactory = (name, money = 0, type, employer) => {
  if (type === "employee") {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
};

var alex = userFactory("Alex Banks", 100);
var eve = userFactory("Eve Porcello", 100, "employee", "This and That");
