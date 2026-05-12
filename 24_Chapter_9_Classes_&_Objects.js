// Classes & Objects : 

/* Objects : A JS object is an entity having state and behavior (properties and method)
             JS objects have a special property called prototype.  (Prototype s itself an object)
             We can set prototype using __proto__
             A prototype is an object from which other objects inherit properties and methods.
             if object & protoyype have same method , object's method will be used
*/

const student = {
  fullName: "Ansh",
  marks: 94.4,
  printMarks: function () {
    console.log("marks = ", this.marks);  // 'this' is a keyword. It means student.marks
  },
}

const employee = {
  calcTax() {
    console.log("Tax Rate is 10%");
  },
  // OR alternative syntax
  calTax2: function () {
    console.log("Tax Rate is 10%")
  }
}

const karan1 = {
  salary: 500000,
};
const karan2 = {
  salary: 500000,
};
const karan3 = {
  salary: 500000,
};

// To use methods and function of employee method in karan method then we use prototype

karan1.__proto__ = employee;
karan2.__proto__ = employee;
karan3.__proto__ = employee;
// So we don't have to write employee function for each karan methods  

const karan4 = {
  salary: 500000,
  calTax() {
    console.log("Tax rate is 20%");
  }
};
karan4.__proto__ = employee;
// Object’s own method has higher priority than prototype

/* Classes : Class is a program code template for creating objects.
             Those objects will have some state (variables) & some behaviour (functions) inside it

Syntax : class MyClass {
          constructor() {....}
          myMethod() {....}
          }
          let myObj = new MyClass();  -> Creating a object using class
          
          Used when we have to make multiple objects on same template.
          
          Constructor() Method is : 
          -> Automatically invoked by 'new' (if developer didn't made a constructor then it'll automatically be made)
          -> initializes object i.e will be executed when object is made 
*/

class Car {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
  constructor() { // constructor is a keyword 
    console.log("Creating an Object");
  }
}

class Car2 {
  constructor(brand, mileage) {
    console.log("Creating new Object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
}

let gwagon = new Car();
gwagon.setBrand("Merc");
let lexus = new Car();
lexus.setBrand("Lexus");

let fortuner = new Car2("Toyota", 10);



