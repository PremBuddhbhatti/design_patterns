/**
 * The Builder pattern is a creational design pattern that lets you construct complex objects step by step.
 */


interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private readonly parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product Parts: ${this.parts.join(", ")}`);
  }
}

class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(): void {
    this.product.add("PartA");
  }

  public setPartB(): void {
    this.product.add("PartB");
  }

  public setPartC(): void {
    this.product.add("PartC");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimumProduct(): void {
    this.builder.setPartA();
  }

  public buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.buildMinimumProduct();
let minProduct = builder.getProduct();
console.log(minProduct);

director.buildFullProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct);

/*
  when to use
  1. Complex Object Creation
  2. Step-by-step Object Creation
  3. Combination Explosion: If you are dealing with an object that can be configured in many different ways, the Builder pattern can be useful.
  4. Immutable Objects
 */