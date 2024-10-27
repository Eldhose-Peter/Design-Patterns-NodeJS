class Mall {
  constructor() {
    this.sales = [];
  }

  // listen for notification here
  notify(storeName, discount) {
    this.sales.push({ storeName, discount });
  }
}

class Shopper {
  constructor(name) {
    this.name = name;
  }

  // listen for notification here
  notify(storeName, discount) {
    console.log(
      `${this.name}, there is a sale at ${storeName}! ${discount}% off everything!`
    );
  }
}

class Store {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }

  subscribe(observer) {
    this.subscribers.push(observer);
  }

  sale(discount) {
    // notifiy each subscriber on sale event.
    this.subscribers.forEach((observer) =>
      observer.notify(this.name, discount)
    );
  }
}

export default { Mall, Shopper, Store };
