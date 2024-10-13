/**
 * The Strategy pattern is a behavioral design pattern that lets you define a family of algorithms, put each of them
 * into separate classes,
 * and make their objects interchangeable. In other words, it's a way to change the behavior of an object at runtime
 * without changing its implementation.
 */

interface PaymentStrategy {
  pay(amount: number): void;
}

class PaypalStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

class CreditCardStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

class BitcoinStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {}

  public setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public addToCart(value: number): void {
    this.amount += value;
  }

  public checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

// client code
let cart = new ShoppingCart(new PaypalStrategy());
cart.addToCart(100);
cart.addToCart(50);
cart.checkout();

cart.setPaymentStrategy(new CreditCardStrategy());
cart.addToCart(100);
cart.checkout();

/**
 * when to use
 * 
 * 1. Multiple Conditional Statements: When you find yourself using multiple conditional statements to choose different
 *    variations of an algorithm, you should consider the Strategy pattern.
 * 2. Preparation for the Future: If you anticipate your algorithms will need to change or expand in the future, you
 *    might want to use the Strategy pattern to keep your code flexible and easy to update.
 * 3. Complex External Libraries or Frameworks: Sometimes you might use a complex library or framework for just a
 *    single specific task. By using the Strategy pattern, you can isolate all the work into a single class, making it
 *    easier to replace, mock or manage.
 * 4. The Need for Switching Algorithms at Runtime: If your application needs to switch its algorithms while it's
 *    running based on the conditions or user actions, you may need the Strategy pattern.
 */