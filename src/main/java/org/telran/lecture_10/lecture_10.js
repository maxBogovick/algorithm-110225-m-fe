class Tool {
    constructor(name, price, weight) {
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.value = price/weight;
    }
}

const tools = [
    new Tool("a", 100),
    new Tool("c", 10),
    new Tool("b", 3),
    new Tool("z", 20)];


//console.log([1, 4, 2, 8, 10, 5].sort((num1, num2) => num1-num2));    
// O(n*log(n))    
/*
const sortByPriceDesc = (item1, item2) => item2.price - item1.price;
const sortByPriceAsc = (item1, item2) => item1.price - item2.price;
const sortByNameDesc = (item1, item2) => item2.name.localeCompare(item1.name);

console.log("sort by price desc = ", tools.sort(sortByPriceDesc));
console.log("sort by price asc = ", tools.sort(sortByPriceAsc));
console.log("sort by name desc = ", tools.sort(sortByNameDesc));
*/

// 67 
// 1 5 10 50 => 50 10 5 1 1 
// 1, 3, 4 =>  6 => 4 1 1 => 3 3 
// 

// сортировка
// цикл
// условие выбора максимально выгодной монеты

function coinGreedyChange(coins, amount) {
    coins.sort((coin1, coin2) => coin2 - coin1);

    const result = [];
    let remaining = amount;
// [50, 25, 10, 5, 1]
    for (const coin of coins) {
        // condition 
        /*while(remaining >= coin) {
            result.push(coin);
            remaining -= coin;
        }
            */
        const canTakeCoins = Math.floor(remaining/coin);
        if (canTakeCoins > 0) {
            result.push({coin, count: canTakeCoins});
            remaining -= coin * canTakeCoins;
        }
    }

    if (remaining > 0) {
        throw new Error("We don't have enough coins");
    }

    return result;
}

console.log(coinGreedyChange([5, 1, 10, 25, 50], 159));

function backpack(tools, capacity) {
    tools.sort((tool1, tool2) => tool2.value - tool1.value);

    const result = [];
    let remaining = capacity;
    let totalValue = 0;

    for (const tool of tools) {
        if (tool.weight <= remaining) {
            result.push(tool);
            remaining -= tool.weight;
            totalValue += tool.value;
        }
    }

    return {result, totalValue};
}

const resultOfBackpack = backpack([
    new Tool("молоток", 5, 5),
    new Tool("гвозди", 1, 1),
    new Tool("перфоратор", 100, 3),
    new Tool("секатор", 10, 0.5),
    new Tool("пила", 30, 1),
    new Tool("мешок с цементом", 10, 25),
    new Tool("проволока", 10, 1),
], 3);

// [1, 2, 3, 4, 5, 6] => 21
//console.log([1, 2, 3, 4, 5, 6].reduce((acc, num) => acc+num, 0));
console.log(resultOfBackpack.result.reduce((acc, tool) => acc + tool.weight, 0));
console.log(resultOfBackpack);

const events = [
    {name: "Meeting 1", start: 1, end: 4},
    {name: "Meeting 2", start: 3, end: 5},
    {name: "Meeting 10", start: 0, end: 6},
    {name: "Meeting 3", start: 5, end: 7},
    {name: "Meeting 4", start: 8, end: 9},
    {name: "Meeting 8", start: 5, end: 9},
]

function greedyMeetings(events) {
    events.sort((e1, e2) => e1.end - e2.start);

    const result = [];
    let lastEndTime = -1;

    for (const event of events) {
        if (event.start >= lastEndTime) {
            result.push(event);
            lastEndTime = event.end;
        }
    }

    return result;
}

console.log(greedyMeetings(events));