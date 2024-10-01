/**
 * Abstract Factory is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.
 */

interface IProductA {
  operationA(): string;
}

interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string;
}

interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of Operation A";
  }
}

class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of Operation B";
  }

  public combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();
    return `The result of Product B Collobrating with (${result})`;
  }
}

class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }

  public createProductB(): IProductB {
    return new ProductB();
  }
}

//  Client Code
const factory = new Factory();

const productA = factory.createProductA();
console.log(productA.operationA());

const productB = factory.createProductB();
console.log(productB.combinedOperation(productA));
console.log(productB.operationB());

/**
 * when to use
 * 
 * 1. Interrelated Dependencies: If you have a family of related products and you need to ensure that a client always uses objects that 
 *    belong together
 * 2. Switching Product Families: If you need to provide a way to swap out entire "families" of objects, an Abstract Factory can make 
 *    this easier.
 * 3. Encapsulating Complex Creation Logic
 * 4. Consistent Object Creation: If your code has dependencies on specific types of objects that need to be created together and you want 
 *    to enforce consistency
 * 5. Supporting Multiple Architectures: If your software needs to run in different environments that require different implementations 
 *    of a set of related objects
 */