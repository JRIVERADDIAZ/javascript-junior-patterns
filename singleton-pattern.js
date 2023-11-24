
// Singleton 

/*
The singleton pattern in short, it make s ingle instance and one acces global
 point to that instance, means if we wants to restrict the instantiation of a class to a
single object basically we have to avoid someone gain acces to our class and add methods or properties in it, 
 using the instantiation.
*/

/**
 i dont want to lie you and say i have use the singleton pattern for all of these cases of use but here are 
 some those, it's helpfull:

 Database Connection Pool
Configuration Management 
Logging
Caching
User Sessions 
Thread Pools
GUI Components
Resource Management
Game State Management
Cache for Expensive Operations

*/

let instance;

// * 1.  Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// *  Within the constructor, we check to make sure the class hasn't already been instantiated.

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    this.counter = counter;
    instance = this;
  }

  getCount() {
    return this.counter;
  }

  increment() {
    return ++this.counter;
  }

  decrement() {
    return --this.counter;
  }
}

// * 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// *  This ensures that the newly created instance is not modifiable.
const singletonCounter = Object.freeze(new Counter());

// *  3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default singletonCounter;


// *  es6 way to create singletton base and produce the pattern effect 

let counter = 0;

// * 1. Create an object containing the `getCount`, `increment`, and `decrement` method.

const counterObject = {
  getCount: () => counter,
  increment: () => ++counter,
  decrement: () => --counter,
};

//  * 2.  Freeze the object using the `Object.freeze` method, to ensure the object is not modifiable.
const singletonCounter = Object.freeze(counterObject);

// *  3. Export the object as the `default` value to make it globally accessible.
export default singletonCounter;

// * 4. To use the pattern we have to make a call method call 

// object.method();
// const method = singletonCounter.getCount();

// ! Waring!!!!

// ? We could even export the frozen object directly, without having to declare multiple variables.

/* 
? The utility of this code is to create a single, shared database connection that can be accessed throughout 
? your application. This can be useful in scenarios where you want to manage a single, centralized database 
? connection to avoid the overhead of creating multiple connections, save resources, and ensure consistency 
? in your database interactions.

? However, it's important to note that this implementation is not thread-safe. In a multi-threaded environment, 
? you may need additional synchronization mechanisms to guarantee that only one instance is created. Also,
? this code snippet doesn't show the full implementation of the instance variable, so you should make sure it's 
? correctly declared and scoped.
*/

/*
? To make the code you provided for implementing the Singleton pattern in JavaScript thread-safe, you can use various 
? techniques. JavaScript is single-threaded, but if you have asynchronous code or are working in a multi-threaded 
? environment (e.g., using Web Workers), you should consider ensuring that your Singleton implementation is robust.
? One approach is to use the Module Pattern or closures to encapsulate the Singleton instance and provide thread safety.
 */


class DBConnection {
  constructor(uri) {
    if (DBConnection.instance) {
      throw new Error('Only one connection can exist!');
    }
    this.uri = uri;
    DBConnection.instance = this;
  }
  
  static getInstance(uri) {
    if (!DBConnection.instance) {
      DBConnection.instance = new DBConnection(uri);
    }
    return DBConnection.instance;
  }
}

// Usage
const connection1 = DBConnection.getInstance('mongodb://example.com/db1');
const connection2 = DBConnection.getInstance('mongodb://example.com/db2'); // Throws an error

console.log(connection1 === connection2);