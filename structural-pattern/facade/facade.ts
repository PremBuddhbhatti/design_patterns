/**
 * The Facade design pattern is a structural design pattern that provides a simplified interface to a complex system. It involves creating a
 * wrapper interface over a complex system to hide its complexities. This pattern involves a single class that provides simplified 
 * methods required by the client and delegates calls to methods of existing system classes.
 */

class Grinder {
  public grindBeads(): void {
    console.log("Grinding beans ...");
  }
}

class Boiler {
  public boilWater(): void {
    console.log("Boiling Water ...");
  }
}

class Brewer {
  public brewCoffee(): void {
    console.log("Brewing Coffee ...");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee() {
    this.grinder.grindBeads();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The Coffee is ready");
  }
}

// Client code
let grinder = new Grinder();
let boiler = new Boiler();
let brewer = new Brewer();

let coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();

/**
 * when to use
 * 
 * 1. Rampant Dependencies: If you notice that a lot of classes in your system are dependent on a wide array of other classes or subsystems,
 *    it can lead to high coupling and complex interactions.
 * 2. Overwhelming Complexity: When you're dealing with a complex subsystem with multiple interdependent classes or operations, using them
 *    directly can be overwhelming and error-prone. 
 * 3. Overexposure of Inner Workings: If client code is overexposed to the internals of a subsystem, it can lead to code that's hard to
 *    understand and maintain.
 * 4. Need for a Layered Architecture: If you need to build a multi-layered or tiered architecture. This way, the complexity of interactions
 *    between layers can be effectively managed.
 * 5. Refactoring Legacy Code: Legacy code can often be difficult to work with, especially when it's not feasible to refactor all at once.
 */