
//? Factory

// *  With the Factory Pattern, we can use a special function - the factory function - to create many of the same 
// * objects.


/*
* Not really a pattern: In JavaScript, the factory pattern isn't much more than a function that returns an
* object without using the new keyword. ES6 arrow functions allow us to create small factory functions that 
* implicitly return an object each time.
 
* However, in many cases it may be more memory efficient to create new instances instead of new objects each 
* time.
 */

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  async getPosts() {
    const posts = await fetch(`https://my.cms.com/posts/user/${this.id}`);
    return posts;
  }
}

const user1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});
// * The fullName method is the same for all the objects that were created. By creating new instances, 
// * the fullName method is available on the prototype instead of on the objec, which saves memory.


export const createBook = (title, author, isbn) => ({
    title,
    author,
    isbn,
  });
  
  export const book1 = createBook('Harry Potter', 'JK Rowling', 'AB123');
  
  export const book2 = createBook(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    'CD456'
  );
  
  export const book3 = createBook('Moby-Dick', 'Herman Melville', 'EF789');
  
  export const book4 = createBook('Harry Potter', 'JK Rowling', 'AB123');
  
  export const book5 = createBook(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    'CD456'
  );
