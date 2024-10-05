/**
 * The Adapter Design Pattern is a software design pattern that allows the interface of an existing class to be used from another interface.
 * It's often used to make existing classes work with others without modifying their source code. The Adapter Pattern is especially useful
 * when the classes that need to communicate with each other do not have compatible interfaces
 */
class Rectangle {
  constructor(private width: number, private height: number) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

class Square {
  constructor(private side: number) {}

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

class SquareToRectangleAdapter {
  constructor(private square: Square) {}

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeight(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}

// client code
let square = new Square(5);
let adapter = new SquareToRectangleAdapter(square);

console.log(adapter.getHeight());
console.log(adapter.getWidth());
console.log(adapter.area());
console.log(adapter);

/**
 * when to use
 * 
 * 1. Incompatibility of interfaces: When two parts of a system have different interfaces and need to communicate with each other, the Adapter
 *    pattern can help to "translate" between the two interfaces.
 * 2. Refactoring of legacy code: In case of a system redesign where you want to maintain backward compatibility, the Adapter pattern can
 *    serve as a bridge between the new systems and the old ones.
 * 3. Alternatives to multiple inheritance
 * 4. Abstracting volatile classes: Sometimes you might need to abstract the use of volatile classes (ones that change often). The Adapter can
 *    encapsulate these changes so that the impact on the rest of the application is minimized.
 */