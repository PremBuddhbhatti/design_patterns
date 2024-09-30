/**
 The prototype pattern is a creational design pattern that allows cloning objects, even complex ones, without coupling to their specific classes. All prototype classes have a common interface that makes it possible to copy objects even if their concrete classes are unknown. Prototype objects can produce full copies since objects of the same class can access each other's private fields.
 */

interface UserDetails {
  name: string;
  age: number;
  email: string;
}

interface Prototype {
  clone(): Prototype;
  getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
  constructor(private user: UserDetails) {}

  public clone(): Prototype {
    const clone = Object.create(this);
    clone.user = { ...this.user };
    return clone;
  }

  public getUserDetails(): UserDetails {
    return this.user;
  }
}

let user1 = new ConcretePrototype({
  name: "John",
  age: 32,
  email: "john@example.com",
});

let user2 = user1.clone();

if (user1 === user2) {
  console.log("Both instances are the same");
} else {
  console.log("Cloned objects are separate instances");
}

/*
  when to use
  1. When there a large object and you want to clone it with some properties changed.
  2. Complex Object Creation 
  3. High Cost of Object Creation
  4. Preserving Historical States
 */