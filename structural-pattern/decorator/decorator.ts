/**
 * The Decorator design pattern is a structural design pattern that allows you to dynamically add or override behaviour in an existing object
 * without changing its implementation. This pattern is particularly useful when you want to modify the behavior of an object without
 * affecting other objects of the same class.
 */

// Component
interface Coffee {
  cost(): number;
  description(): string;
}

// ConcreteComponent
class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }

  public description(): string {
    return "Simple Coffee";
  }
}

// Decorator
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

// ConcreteDecorator
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}

// client code
let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);

/**
 * when to use
 * 
 * 1. You need to add responsibilities to individual objects dynamically and transparently
 * 2. You need to add responsibilities to an object that can be withdrawn later 
 * 3. You want to add a few additional properties to some objects, but not all
 * 4. Sometimes, subclassing is not the best solution, especially when dealing with a large number of independent extensions
 * 5. You want to ensure that the system can be easily extended in the future
 */