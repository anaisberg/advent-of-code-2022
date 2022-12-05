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
    
const solvePart1 = () => {
    let prioritySum = 0;
    allContents.split(/\r?\n/).forEach((line) => {
        if (line.length === 0) return;
        const [comp1, comp2] = getTwoCompartiments(line);
        const misplacedItem = comp1.filter(item => comp2.includes(item)).pop();
        prioritySum += misplacedItem;
    });
    console.log("The sum of the priorities of the item types that appear in both compartments of each rucksack is:");
    console.log(prioritySum);
};

const findCommonItem = (group) => {
    const [r1, r2, r3] = group;
    const commonOneTwo = r1.filter(item => r2.includes(item));
    const common = commonOneTwo.filter(item => r3.includes(item));
    return common.pop();
};

const solvePart2 = () => {
    const rucksacks = allContents.split(/\r?\n/);
    const numberOfGroups = (rucksacks.length - 1) / 3;
    let prioritySum = 0;
    for (let currentGroup = 0; currentGroup < numberOfGroups; currentGroup += 1) {
        const group = rucksacks.splice(0, 3).map((rucksack) => rucksack.split(''));
        const commonGroupItem = findCommonItem(group);
        const itemPriority = getItemPriority(commonGroupItem);
        prioritySum += itemPriority;
    }
    console.log("The sum of the priorities of the item types that correspond to the badges of each three-Elf group is:");
    console.log(prioritySum);
};

// solvePart1();
solvePart2();