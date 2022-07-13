# Javascript quiz  (Basic Level) -

| Name | Email | Address |
|------|-------|---------|
|vikas bairwa| vb334531@gmail.com |sanganer jaipur|
# Theory
***Q1*** **What are the basic data types in TypeScript?**

>>We assign data types by simply placing a colon after the variable name but before the equal sign:
```
const {variable name}: {variable type} = {variable value}
```
>>The data types are follows:-

- **1 Boolean**
  - Booleans in TypeScript work the same way as they do in JavaScript.  Variables of data type boolean are declared like so:
  
 ```
 const myBool: boolean = false;
 ```
- **2 String**
  - Strings in TypeScript work the same way as they do in JavaScript.  Variables of data type string are declared like so:
  ```
  let myString: string = 'bacon'
  ```
- **3 Number**
  - Numbers in TypeScript work the same way as they do in JavaScript.  Variables of data type number are declared like so:
   ```
   const myNum: number = 1207;
   ```  
- **4 Array**
  - Arrays in TypeScript are, like other data types, just like arrays in JavaScript.  Variables of data type array are declared two separate ways :   
  ```
  const myArr: number[] = [12, 90, 71];
  ```
**There are some more data types in typescript:-**
  1. Tupple
  2. Enum
  3. Unknown
  4. Any
  5. Void
  6. Null and Undefined
  7. Never
  8. Object

**Q2 What is Generic data type.**
>>TypeScript Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types.

**Q3 What is type inferring in TS**
>>The type of the x variable is inferred to be number . This kind of inference takes place when initializing variables and members, setting parameter default values, and determining function return types. In most cases, type inference is straightforward.
```
let x = [0, 1, null];

let x: (number | null)[]
```

**Q4 . What are the possible ways to define typing for functions.**

>> **1 Method Signatures**
   - The method signature syntax is probably the most straightforward to use. When defining an object type, its methods can easily be described by providing signatures as follows:

```
interface Date {
  toString(): string;
  setTime(time: number): number;
  // ...
}
```

**2 Function Type Literals**
 - Function type literals are another way to declare the type of a function. They're typically used in the signature of a higher-order function, that is, a function which accepts functions as parameters or which returns a function:

 ```
 interface Array<T> {
  sort(compareFn?: (a: T, b: T) => number): this;
  // ...
}
 ```
**3 Object Type Literals with Call or Construct Signatures**
 - In JavaScript, functions are nothing but special objects than can be called. This fact is reflected in the syntax of object type literals: they describe the shape of an object, which also happens to have a call signature

 ```
 interface RegExpConstructor {
  // Call signatures
  (pattern: RegExp): RegExp;
  (pattern: string, flags?: string): RegExp;

  // ...
}
 ```
***Q5 How to define Generic type for Classes.***
>>A Generic class simply means that the items or functions in that class can be generalized with the parameter(example T) to specify that we can add any type as a parameter in place of T like Integer, Character, String, Double or any other user-defined type. 
-
   - These classes are known as parameterized classes or parameterized types because they accept one or more parameters.
For example:

```
class StudentInfo<T, U> {
  private Id: T;
  private Name: U;

  setValue(id: T, mame: U): void {
    this.Id = id;
    this.Name = name;
  }

  display(): void {
    console.log(`Id = ${this.Id}, Name = ${this.Name}`);
  }
}

let student1 = new StudentInfo<number, string>();
student1.setValue(123, "Sameer");
student1.display();
```
-----

## Program

**Define the types in typescript for the given following JavaScript code.
Todo:**
 - Define type/interface for a single Todo object.
 - Define type for each function.
 - Do not use `any` (TS Data Type) type of typescript 
 
 - code:-
 ```
 var todos = [];
function add(name, description) {
 return todos.push({
 name: name,
 description: description,
 done: false
 });

 }
function remove(index) {
 return todos.splice(index, 1);
}
function list() {
 todos.forEach(function(todo, index) {
 console.log(index + " - " + todo.name);
 });
}
function update(index, name, description) {
 todos[index].name = name;
 todos[index].description = description;
 return todos[index];
}
 ```

## solution

```
 class Entry {
     name: string;
     description: string;
     done: boolean;
   }

   var todos: Entry[] = [];

   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }

   function remove(index: number): Entry[] {
     return todos.splice(index, 1);
   }

   function list(): void {
     todos.forEach(function (todo: Entry, index: number) {
       console.log(index + " - " + todo.name);
     });
   }

   function update(index: number, name: string, description: string): Entry {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }

   console.log(add("Go to College", "Do some Assignments"));       
      list();        
```


