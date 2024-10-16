class Person {
  constructor(name = "unnamed person") {
    this.name = name;
  }

  toString() {
    return JSON.stringify(this);
  }
}

class Employee extends Shopper {
  constructor(name, money = 0, employer = "") {
    super(name, money);
    this.employer = employer;
    this.employed = true;
  }

  payDay(money = 0) {
    this.money += money;
  }
}

class Shopper extends Person {
  constructor(name, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}

export { Employee, Shopper };
