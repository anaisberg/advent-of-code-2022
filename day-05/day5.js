const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-05/input5.txt', 'utf-8');
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

const fillStacks = (line, nbOfStacks, stacks) => {
    const splitLine = line.split('');
    for (let stackIndex = 0; stackIndex < nbOfStacks; stackIndex++) {
        const crate = splitLine.splice(stackIndex, 3).join('')
        let stack = stacks[stackIndex];
        if (crate[2] !== ' ') {
            if (!stack) stack = [crate];
            else stack.push(crate);
            stacks[stackIndex] = stack;
        }
    }
    return stacks;
}

const moveCrate = (line, stacks) => {
    const nbCrates = Number(line.slice(5, 7));
    const origin = Number(line.slice(12, 14)) - 1;
    const destination = Number(line.slice(17, 19)) - 1;
    const firstStack = stacks[origin];
    const destStack = stacks[destination];
    // we need to reverse for part 1
    // const crates = firstStack.splice(-nbCrates).reverse();
    // and keep the order for part 2
    const crates = firstStack.splice(-nbCrates);
    stacks[destination] = destStack.concat(crates);
    console.log('ctacks', stacks)
}

    
const solvePart1 = () => {
    const firstLine = lines[0];
    const nbOfStacks = getStacksNumber(firstLine);
    const stacks = createStacks();
    let lineIndex = 0;
    let line = lines[lineIndex];
    while (line.indexOf('1') < 0) {
        fillStacks(line, nbOfStacks, stacks);
        lineIndex++;
        line = lines[lineIndex];
    }
    for (let index = 0; index < nbOfStacks; index++) {
        const stack = stacks[index];
        stack.reverse();
    }
    lineIndex += 2;
    line = lines[lineIndex] 
    while (!!line) {
        moveCrate(line, stacks)
        // lines.forEach((line) => { })
        lineIndex++;
        line = lines[lineIndex];
    };
    console.log("After the rearrangement procedure completes, the satcks look like that:");
    console.log(stacks);
    stacks.forEach((stack) => console.log(stack.pop()))
};

solvePart1();
