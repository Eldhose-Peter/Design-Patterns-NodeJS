class Person {

    constructor(name, isEmployee=false, isManager=false, hours=40, money=0, shoppingList=[] ) {
        this.name = name
        this.isEmployee = isEmployee;
        this.isManager = isManager;
        this.hours = hours;
        this.money = money;
        this.shoppingList = shoppingList;
    }

    toString() {
        return JSON.stringify(this);
    }

}

// In the below objects its very hard to identify what we are passing as params, because there are too many. 
// This design can lead to errors by mistake.

// Employees
var sue = new Person('Sue', true, true, 60);
var bill = new Person('Bill', true, false, 20);
var phil = new Person('Phil', true, false);

// Shoppers
var charles = new Person('Charles', false, false, 0, 500, ['jeans', 'sunglasses']);
var tabbitha = new Person('Tabbitha', false, false, 0, 1000);


