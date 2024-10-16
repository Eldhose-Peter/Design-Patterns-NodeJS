class Person {
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee;
    this.isManager = builder.isManager;
    this.hours = builder.hours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList || [];
  }

  toString() {
    return JSON.stringify(this);
  }
}


// using this Builder Class we will be able to create objects more easily and will be more readable.

class PersonBuilder {
  constructor(name) {
    this.name = name;
  }

  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(hours = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money) {
    this.money = money;
    return this;
  }

  withList(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return new Person(this);
  }
}


// Using the Builder class to create objects. With chaining.

// Employees
var sue = new PersonBuilder('Sue').makeEmployee().makeManager(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().makePartTime().build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
var charles = new PersonBuilder('Charles')
    .withMoney(500)
    .withList(['jeans', 'sunglasses'])
    .build();

var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();
