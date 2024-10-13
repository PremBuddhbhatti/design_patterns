/**
 * The Observer design pattern is a behavioral design pattern that allows you to define or create a subscription mechanism to send
 * notifications to multiple objects about any new events that happen to the object they're observing. The object that is being watched is
 * often called the subject. The objects that are watching the state changes are called observers or listeners.
 */

interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
  constructor(private id: number) {}

  public update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated. New state: ${subject.getState()}`
    );
  }
}

interface Subject {
  addObserver(observer: Observer): void;

  removeObserver(observer: Observer): void;

  notifyObservers(): void;

  getState(): number;

  setState(state: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Observer has been attached already.");
    }

    console.log("Attached an observer.");
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Detached an observer.");
  }

  public notifyObservers(): void {
    console.log("Notifying to all observers...");
    this.observers.forEach((observer) => observer.update(this));
  }

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    console.log("Setting state...");
    this.state = state;
    this.notifyObservers();
  }
}

// Client code
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);

const observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);

subject.setState(123); // Setting state... and then notifying all observers

/**
 * when to use
 * 
 * 1. Polling: If your code is constantly checking or "polling" an object to see if its state has changed.
 * 2. Inefficient Updates: If an object is being updated too often, or if only some of its observers need to react to changes, yet it's
 *    updating all of them anyway, that could be inefficient.
 * 3. Ineffective Communication Between Objects: If you see objects communicating directly with many other objects to share changes to their
 *    internal state, this is a strong smell.
 * 4. High Component Coupling: If components in your system are highly dependent on each other, then changes in one might affect the others.
 */