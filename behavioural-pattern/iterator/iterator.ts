/**
 * The Iterator pattern is a design pattern that allows sequential access to elements in a collection, without exposing its underlying
 * representation. It provides a way to access the elements of an aggregate object sequentially without exposing the underlying details.
 */

class ArrayIterator<T> {
  private position: number = 0;
  constructor(private collection: T[]) {}

  public next(): T {
    // Get the next element in the collection
    let result: T = this.collection[this.position];
    this.position += 1;
    return result;
  }

  public hasNext(): boolean {
    return this.position < this.collection.length;
  }
}

// client code
const array: number[] = [1, 2, 3, 4, 5, 6];
const iterator = new ArrayIterator<number>(array);
console.log(iterator.hasNext());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.hasNext());

const arrayString = ["Hello", "World"];
const stringIterator = new ArrayIterator<string>(arrayString);
console.log(stringIterator.hasNext());
console.log(stringIterator.next());
console.log(stringIterator.next());

/**
 * when to use
 * 
 * 1. Complex Navigation Logic
 * 2. Multiple Traversal Algorithms
 * 3. Accessing Elements of a Collection without Exposing its Structure
 * 4. Different Collections with Same Traversal
 * 
 */