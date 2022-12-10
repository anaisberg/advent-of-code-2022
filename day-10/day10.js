import { readFileSync } from 'fs';

const test = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-10/test.txt';
const input = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-10/input.txt';
const allContents = readFileSync(input, 'utf-8');

const lines = allContents.split(/\r?\n/);

const updateRegisterValue = (instruction, register, X) => {
    if (instruction.length === 1) register.push(X);
    else {
        const addx = Number(instruction[1]);
        register.push(X);
        X += addx;
        register.push(X)
    }
    return X;
}

const getSignalStrengthSum = (register) => {
    let sum = 0;
    for (let cycle = 19; cycle < 220; cycle += 40) {
        const signalStrength = (cycle + 1) * register[cycle];
        sum += signalStrength;
    }
    return sum;
}

const solvePart1 = () => {
    const program = lines.map((line) => line.split(' '))
    let X = 1;
    const register = [1]
    program.forEach((instruction) => {
        X = updateRegisterValue(instruction, register, X)
    });
    const sumSignalStrength = getSignalStrengthSum(register);
    console.log('The sum of the 20th, 60th, 100th, 140th, 180th, and 220th signal strength is', sumSignalStrength);
}

solvePart1();