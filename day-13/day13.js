import { readFileSync } from 'fs';

const test = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-13/test.txt';
const input = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-13/input.txt';
const allContents = readFileSync(input, 'utf-8');

const pairs = allContents.split('/r').join('')
    .split('\n\n')
    .map((line) => line.split('\n').map(list => JSON.parse(list)));

const compareValues = (left, right) => {
    if (!Array.isArray(left) && !Array.isArray(right)) return right - left;
    if (!Array.isArray(left)) left = [left];
    if (!Array.isArray(right)) right = [right];
    const length = Math.min(left.length, right.length);
    for (let i = 0; i < length; i++) {
        const res = compareValues(left[i], right[i]);
        if (res !== 0) return res;
    }
    return right.length - left.length;
}

const solvePart1 = (pairs) => { 
    let indexSum = 0;
    pairs.forEach(([left, right], index) => {
        const res = compareValues(left, right)
        if (res > 0) indexSum += (index + 1);
    });
    console.log('Part 1:', indexSum);
};

const solvePart2 = (pairs) => {
    pairs.push([[[2]], [[6]]]);
    const packets = pairs.flat();
    const sortedPackets = packets
        .sort((a, b) => - compareValues(a, b))
        .map(x => x.toString());
    const firstDivider = sortedPackets.indexOf('2') + 1;
    const secondDivider = sortedPackets.indexOf('6') + 1;
    console.log('The decoder key for the distress signal is', firstDivider * secondDivider);
}
     

solvePart1(pairs);
solvePart2(pairs);
