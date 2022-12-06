const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-05/test.txt', 'utf-8');
const lines = allContents.split(/\r?\n/);

const getItemPriority = (item) => {
    if (item.toUpperCase() === item) return item.charCodeAt(0) - 38;
    return item.charCodeAt(0) - 96;
}

const getStacksNumber = (line) => {
    return (line.length + 1) / 4
}

const createStacks = (number) => {
    const stacks = []
    for (let i = 0; i < number; i++) {
        stacks.push([])
    }
    return stacks;
}
    
const solvePart1 = () => {
    const firstLine = lines[0];
    const nbOfStacks = getStacksNumber(firstLine);
    const stacks = createStacks();
    lines.forEach((line) => {
        if (line.length === 0) return;
       console.log(line, line.length)
    });
    console.log("The sum of the priorities of the item types that appear in both compartments of each rucksack is:");
    console.log(stacks);
};

solvePart1();
