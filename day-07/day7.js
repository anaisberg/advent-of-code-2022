const fs = require('fs');
const test = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-07/test.txt';
const input = '/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-07/input7.txt';
const allContents = fs.readFileSync(input, 'utf-8');
const lines = allContents.split(/\r?\n/);

const getDirSizes = () => {
    let path = '';
    let dirs = { "/": 0 };
    lines.forEach((line) => {
        if (line.startsWith("$ cd /")) {
            path = "/";
        }  else if (line.startsWith("$ cd ..")) {
            let pathList = path.split('/')
            pathList.pop()
            pathList.pop()
            path = pathList.join("/") + "/";
        } else if (line.startsWith("$ cd")) {
            path += line.split(" ").pop() + "/"
        } else if (line.startsWith("dir")) {
            dirs[path + line.split(" ").pop() + "/"] = 0;
        } else if (line !== "$ ls"){
            dirs[path] += Number(line.split(" ")[0])
        }
    });
    const dirsWeight = Object.keys(dirs).map((currentDir) => {
        let sum = 0
        Object.keys(dirs).forEach((path) => { if (path.startsWith(currentDir)) sum += dirs[path] })
        return { path: currentDir, sum: sum };
    })
    return dirsWeight;
}
    
const solvePart1 = () => {
    const dirSizes = getDirSizes();
    const totalSum = dirSizes.reduce((acc, dir) => dir.sum < 100000 ? acc + dir.sum : acc, 0);
    console.log(totalSum);
};

const solvePart2 = () => {
    const dirSizes = getDirSizes();
    const maxSize = dirSizes.find((dir) => dir.path === "/").sum;
    const availableSpace = 70000000 - maxSize;
    const spaceNeeded = 30000000 - availableSpace;
    const bigDirs = dirSizes.filter((dir) => dir.sum >= spaceNeeded).sort((a,b) => a.sum <= b.sum);
    console.log(bigDirs.pop());
};

solvePart2()