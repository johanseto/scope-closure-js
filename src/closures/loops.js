const anotherFunction = () =>{
    for (var i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)//1000 miliseconds.
    }
}

anotherFunction()

//it was creating a closure, getting the contet of the last value of the loop.
//
//unwittingly we create a sclosure, the problem is that while jasript proeces setTimeOut, the for is exectudes as
//a function scope in an async way

const anotherFunction = () =>{
    for (let i=0;i<10;i++){
        setTimeout(()=>{
            console.log(i);
        },1000)//1000 miliseconds.
    }
}

anotherFunction()
//changing var with let, we broke the cycle of the clsoure... wtf??
//the reason is cause the way of let only works for block.
//This case the let force you JS to wait every new block code for every case of let(10).
//Take it like let start 10 different block code, and var also only uses one.