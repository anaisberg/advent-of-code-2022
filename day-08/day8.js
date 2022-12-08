import { readFileSync } from 'fs';

const test = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-08/test.txt';
const input = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-08/input8.txt';
const allContents = readFileSync(input, 'utf-8');

const lines = allContents.split(/\r?\n/);

const rows = lines.length;
const columns = lines[0].length;

const getColumn = (colIndex) => {
    return lines.map((line) => Number(line[colIndex]));
}

const isOutside = (row, col) => {
    return (row === rows - 1 || col === columns - 1 || row === 0 || col === 0)
}

const isVisibleLeft = (row, col, trees) => {
    let isVisible = true;
    for (let j = col - 1; j >= 0; j--) {
        if (trees[row][j] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return isVisible
}

const isVisibleRight = (row, col, trees) => {
    let isVisible = true;
    for (let j = col + 1; j < columns; j++) {
        if (trees[row][j] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return isVisible
}

const isVisibleUp = (row, col, trees) => {
    let isVisible = true;
    for (let i = row - 1; i >= 0; i--) {
        if (trees[i][col] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return isVisible
}

const isVisibleDown = (row, col, trees) => {
    let isVisible = true;
    for (let i = row + 1; i < rows; i++) {
        if (trees[i][col] >= trees[row][col]) {
            isVisible = false;
            break;
        }
    }
    return isVisible
}



const isTreeVisible = (row, col, trees) => {
    if (isOutside(row, col)) return true;
    const left = isVisibleLeft(row, col, trees);
    const right = isVisibleRight(row, col, trees);
    const up = isVisibleUp(row, col, trees);
    const down = isVisibleDown(row, col, trees);
    return left || right || up || down;
};
    
const solvePart1 = () => {
    const trees = lines.map((line) => line.split("").map((item) => Number(item)));
    let visibleTrees = 0;
    trees.forEach((row, rowIndex) => {
        row.forEach((_, colIndex) => {
            if (isTreeVisible(rowIndex, colIndex, trees)) visibleTrees++;
        })
    })
    console.log(visibleTrees);
};

const solvePart2 = () => {
    console.log("part 2");
};

solvePart1()