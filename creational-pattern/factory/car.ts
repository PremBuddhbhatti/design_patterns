/**
  The Factory Design Pattern is a type of creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
 */

abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  abstract displayCarInfo(): void;
}

class Sedan extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  public displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

// complexity of object creation is hidden by factory 
class CarFactory {
  public createCar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);
      case "suv":
        return new SUV(model, productionYear);
      case "hatchback":
        return new Hatchback(model, productionYear);
      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();

const sedan = carFactory.createCar("sedan", "Camry", 2023);
sedan.displayCarInfo();

const suv = carFactory.createCar("suv", "Defender", 2023);
suv.displayCarInfo();

const hatchback = carFactory.createCar("hatchback", "Corolla", 2023);
hatchback.displayCarInfo();

/**
 * when to use
 * 1. Uncertain Object Types: If your software is supposed to create different types of objects, and you don't know what these objects will be
 *    until runtime, you may need a Factory Method.
 * 2. Similar Classes: If you're dealing with a large number of classes that share a common superclass 
 * 3. Pluggability and Flexibility: If you are developing a library and want to provide a way for users to extend your library with their own
 *    classes
 * 4. Complexity Hiding: When object creation is complex or involves a lot of logic
 * 5. Conditional Object Creation: If your code involves conditional creation of objects based on certain parameters or environmental
 *    conditions
 * 
 */