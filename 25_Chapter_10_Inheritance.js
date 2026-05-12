/* INHERITANCE : Inheritance is passing down properties & methods from parent class to child class

Syntax : 
class Parent {
    ......    
}
class Child extends Parent {
    ......
}

if Child and parent have same method, child's method will be used. [Method Overriding]
*/

class parent {
    hello() {
        console.log("Hello");
    }
}

class person {
    eat() {
        console.log("Eat");
    }
    sleep() {
        console.log("Sleep");
    }
    work() {
        console.log("Do Nothing !");
    }
}

class child extends parent { }

class eng extends person {
    work() {
        console.log("Solve Problems , build something");
    }
}

class doctor extends person {
    work() {
        console.log("Treat Patients");
    }
}
let obj = new child(); // use new to call child
console.log(obj.hello());

let ansh = new eng();
console.log(ansh);
console.log(ansh.eat());
console.log(ansh.work());
// Note : When Parent class and child class have same function then child class function is executed. This is called Method overriding

let ankita = new doctor()
console.log(ankita.work());


/* Super Keyword : The Super keyword is used to call the constructor of its parent class 
                   acess the parent's properties and methods.

    Syntax :  super(args) -> Calls Parent's constructor
              super.parentMethod(args)
*/

class person2 {
    constructor() {
        console.log("Enter Parent Constructor");
        this.species = "Homo Species";
    }
    eat() {
        console.log("Eat");
    }
}

class eng2 extends person2 {
    constructor(branch) {
        console.log("Enter Child Constructor");
        super(); // If we use a constructor in child(derived) class then we use 'super' to invoke parent constructor first
        // Or we also have to use 'super' before using 'this' in child class
        this.branch = branch;
        console.log("Exit Child Constructor");
    }
    work() {
        super.eat();
        console.log("Solve Problems , build something");
    }
}
let ankit = new eng2("Chemical eng");
console.log(ankit.work());

class person3 {
    constructor(name) {
        this.species = "Homo Species";
        this.name = name;
    }
}

class eng3 extends person3 {
    constructor(name) {
        super(name);
    }
}
let shashwat = new eng3("shashwat");
