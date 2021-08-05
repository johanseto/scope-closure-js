// const moneyBox = (coins) =>{
//     var saveCoins = 0;
//     saveCoins += coins
//     console.log(`monex box : $${saveCoins}`);
// }

const moneyBox = () =>{
    var saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`monex box : $${saveCoins}`);

    }
    return countCoins
    
}

let miMoneyBox = moneyBox();
miMoneyBox(6)
miMoneyBox(5);
miMoneyBox(10);


/////


const moneyBox2 = (box) =>{
    var saveCoins = box;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`monex box : $${saveCoins}`);

    }
    return countCoins
    
}

let miMoneyBox2 = moneyBox2(1000);
miMoneyBox2(6)
miMoneyBox2(5);
miMoneyBox2(10);