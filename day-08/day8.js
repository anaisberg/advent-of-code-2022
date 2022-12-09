import { readFileSync } from 'fs';

const test = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-08/test.txt';
const input = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-08/input8.txt';
const allContents = readFileSync(input, 'utf-8');

const lines = allContents.split(/\r?\n/);
lines.pop()

const rows = lines.length;
const columns = lines[0].length;
let highestScenicScore = 0;

const isOutside = (row, col) => {
    return (row === rows - 1 || col === columns - 1 || row === 0 || col === 0)
}

const isVisibleLeft = (row, col, trees) => {
    let isVisible = true;
    let distance = 0;
    for (let j = col - 1; j >= 0; j--) {
        distance++;
        if (trees[row][j] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return { isVisible, distance }
}

const isVisibleRight = (row, col, trees) => {
    let isVisible = true;
    let distance = 0;
    for (let j = col + 1; j < columns; j++) {
        distance++;
        if (trees[row][j] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return { isVisible, distance }
}

const isVisibleUp = (row, col, trees) => {
    let isVisible = true;
    let distance = 0;
    for (let i = row - 1; i >= 0; i--) {
        distance++;
        if (trees[i][col] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return { isVisible, distance }
}

const isVisibleDown = (row, col, trees) => {
    let isVisible = true;
    let distance = 0;
    for (let i = row + 1; i < rows; i++) {
        distance++;
        if (trees[i][col] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return { isVisible, distance }
}



const isTreeVisible = (row, col, trees) => {
    if (isOutside(row, col)) return true;
    const left = isVisibleLeft(row, col, trees);
    const right = isVisibleRight(row, col, trees);
    const up = isVisibleUp(row, col, trees);
    const down = isVisibleDown(row, col, trees);

    const scenicScore = left.distance * right.distance * up.distance * down.distance;
    highestScenicScore = Math.max(highestScenicScore, scenicScore);

    return left.isVisible || right.isVisible || up.isVisible || down.isVisible;
};
    
const solve = () => {
    const trees = lines.map((line) => line.split("").map((item) => Number(item)));
    let visibleTrees = 0;
    trees.forEach((row, rowIndex) => {
        if (row.length === 0) return;
        row.forEach((_, colIndex) => {
            if (isTreeVisible(rowIndex, colIndex, trees)) visibleTrees++;
        })
    })
    console.log('Part 1: the number of visible trees is', visibleTrees);
    console.log('Part 2: the highest scenic score is', highestScenicScore);
};



solve()