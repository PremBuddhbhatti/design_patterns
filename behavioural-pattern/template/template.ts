/**
 * The Template Method is a behavioral design pattern that defines the skeleton of an algorithm in a base class but
 * lets subclasses override specific steps of the algorithm without changing its structure. This pattern allows you to
 * make parts of an algorithm optional, mandatory, or customizable by the subclasses.
 */

abstract class CakeRecipe {
  public bakeCake(): void {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  protected preHeatOven(): void {
    console.log("Preheating oven to 175 Degree C");
  }

  protected bake(): void {
    console.log("Baking cake ....");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake ...");
  }

  protected decorate(): void {
    console.log("Decorating cake ...");
  }

  protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour, eggs");
  }

  protected decorate(): void {
    console.log(" Decorating cake with chocolate");
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, eggs");
  }
}

// client code
function bakecake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocolate cake");
bakecake(new ChocolateCake());

console.log("Baking a vanilla cake");
bakecake(new VanillaCake());

/**
 * when to use
 * 
 * 1. Duplicate code in subclasses: If you see that several subclasses share almost identical algorithms, with only a
 *    few steps being different.
 * 2. Complex conditional logic: If you see complicated conditional statements selecting different versions of the same
 *    algorithm in a base or utility class, it might be worth considering the Template Method pattern. 
 * 3. Need to extend part of an algorithm, not all of it
 * 4. Algorithm has a specific sequence of operations
 */