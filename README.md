>## Interview Questions


>### 1.What are some benefits of using TypeScript over JavaScript in a project?
+ By Using TypeScript we can resolve all the Type related errors.
+ We don't have to rely on runtime to check bugs & errors, we can fixed them during development process.
+ We can use static types, interfaces, classes, generics, and modules in our code.


>### 2.What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each?
+ Optional Chaining (?.) : We use optional chaining when we want to access a property of an object which we don't know if it exists or not.
+ Nullish Coalescing (??) : We use nullish coalescing when we want to assign a default value to a variable if it is null or undefined.


>### 3.How do you handle asynchronous operations in TypeScript, and what are the advantages of using async/await over callbacks or Promises?
+ I can handle asynchronous operations in TypeScript by using async/await. The advantages of using async/await over callbacks or Promises are: 1. It makes our code more readable and easy to understand. 2. It makes our code more maintainable. 3. We can use Try/Catch to handle errors in async/await.


>### 4.How can you use TypeScript's enums, and what are their advantages?
+ We can use TypeScript's enums to define a set of named constants. The advantages of using TypeScript's enums are: 1. It makes our code more readable and easy to understand. 2. It makes our code more maintainable. 3. It makes our code more robust.


>### 5.Explain the role of type guards in TypeScript and provide an example of a custom type guard?
+ Type guards are used to check the type of a variable at development process. They are used to check if a variable is of a specific type or not. If the variable is of the specified type, then the type guard returns true, otherwise it returns false. Example : ```tsx isAnimal(animal: any): animal is {name: string}```


