const helloWorld = () =>{
    const hello = 'im hello';
    console.log(hello)
}

helloWorld()

var scope = 'I am global';

const functionScope =() =>{
    var scope = "Iam just local";
    const func = () => {
        return scope
    }

    console.log(func());
}

functionScope()
console.log(scope)