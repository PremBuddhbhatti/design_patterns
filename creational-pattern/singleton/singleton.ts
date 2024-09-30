/*
 The Singleton pattern is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
 */

class Singleton {
  private static intance: Singleton;
  private static _value: number;

  // private constructor because no one can create a new instance with new keyword
  private constructor() {}

  public static getInstance(): Singleton {
    // create new instance only if not exists
    if (!Singleton.intance) {
      Singleton.intance = new Singleton();
    }
    return Singleton.intance;
  }

  set value(value: number) {
    Singleton._value = value;
  }

  get value() {
    return Singleton._value;
  }
}

let instance1 = Singleton.getInstance();
let instance2 = Singleton.getInstance();
instance1.value = 10;
console.log(instance1.value);
console.log(instance2.value);

// both should have same instance
console.log(instance1 === instance2);


/*
  when to use singleton
  1. Global Variables 
  2. Repeated Initialization of same thing e.g. DB connection
  3. Multiple Access, Single Control: when a resource is shared and modified by multiple access point e.g. System cache
  4. Duplicate Instances of same object are being created 
 */