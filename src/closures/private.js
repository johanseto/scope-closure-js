const person = () =>{
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName:(name) =>{
            saveName = name;
        }
    };
};


newPerson = person();

console.log(newPerson.getName());


newPerson.setName('Oscar');

console.log(newPerson.getName());

var saveName = 'Juanito';

console.log(newPerson.getName());



const person2 = (firstName) =>{
    var saveName = firstName;
    return {
        getName: () => {
            return saveName;
        },
        setName:(name) =>{
            saveName = name;
        }
    };
};


newPerson2 = person2("Johan");

console.log(newPerson2.getName());


newPerson2.setName('Chucui');

console.log(newPerson2.getName());

var saveName = 'Juanito';
console.log(saveName)

console.log(newPerson2.getName());