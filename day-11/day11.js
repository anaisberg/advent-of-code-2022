import { MONKEYS as TEST_MONKEYS } from '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-11/test.js';
import { MONKEYS } from '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-11/input.js';

const getBusinessLevel = (monkeys) => {
    const inspectedItems = Object.values(monkeys).map((monkey) => monkey.inspectedItems);
    const max1 = Math.max(...inspectedItems);
    const index = inspectedItems.indexOf(max1)
    inspectedItems.splice(index, 1);
    const max2 = Math.max(...inspectedItems);
    return max1 * max2;
}

const inspectItems = (monkey, monkeys) => { 
    const items = monkey.items;
    items.forEach((item) => {
        const worryLevel = Math.floor(monkey.getNewWorryLevel(item) / 3);
        const newMonkey = monkey.testItem(worryLevel);
        monkeys[newMonkey].items.push(worryLevel);
        
    });
    monkey.inspectedItems = monkey.inspectedItems + items.length;
    monkey.items = [];
};

const solvePart1 = (monkeys) => {
    const rounds = 20;
    for (let round = 0; round < rounds; round++) {
        Object.values(monkeys).forEach((monkey) => {
            inspectItems(monkey, monkeys);
        })
    }
    console.log(monkeys);
    console.log('business level', getBusinessLevel(monkeys));
}

solvePart1(MONKEYS);