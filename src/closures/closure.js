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