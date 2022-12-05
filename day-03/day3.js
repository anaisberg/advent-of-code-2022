const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-03/input3.txt', 'utf-8');

const getItemPriority = (item) => {
    if (item.toUpperCase() === item) return item.charCodeAt(0) - 38;
    return item.charCodeAt(0) - 96;
}

const getTwoCompartiments = (items) => {
    const itemsList = items.split('');
    const priorityList = itemsList.map((item) => getItemPriority(item));
    const itemsPerCompartment = priorityList.length / 2;
    return [priorityList.slice(0, itemsPerCompartment), priorityList.slice(itemsPerCompartment)]
}
    
let prioritySum = 0;
allContents.split(/\r?\n/).forEach((line) => {
    if (line.length === 0) return;
    const [comp1, comp2] = getTwoCompartiments(line);
    const misplacedItem = comp1.filter(item => comp2.includes(item)).pop();
    prioritySum += misplacedItem;
});

console.log("The sum of the priorities of the item types that appear in both compartments of each rucksack is:");
console.log(prioritySum);

  