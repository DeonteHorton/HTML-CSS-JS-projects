//ES6- JS Classes

function Vegetable(name) {
    this.name = name;
    //In Example below.... helper variable (this) means foo or baz
    //Prototype is a way to adding methods to a constructor function
    // all instances that receive it will inherited it
}

String.prototype.foo = function foo() {
    console.log("Foo!!");
    
}

var hello = 'world';
hello.foo();

var foo = new Vegetable('bar');
console.log(foo.name);

var baz = new Vegetable('haha');
console.log(baz.name);

Vegetable.prototype.getName = function getName() {
    console.log(this.name);
}
var carrot = new Vegetable("carrot")
carrot.getName();

class Vegetable2{
    constructor(name){
        this.name = name;
    }
    getName();
    log
}