var hello = 'Hello';
//console.log(hello)
var hello = "hello ajksdakjsdjk";
let world = 'Hello World';
//let world = 'Hello d';
//var helloWorld = 'Hello World';

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

const helloWorld = () =>{
    globalVar = 'im global';
}

anotherFunction();
helloWorld();

const otherfunction =() =>{
    var localVar = globalVar = 'Im global';
}
otherfunction()
console.log(globalVar);
