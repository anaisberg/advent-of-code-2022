const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-04/input4.txt', 'utf-8');

    
const solvePart1 = () => {
    let doubleAssignments = 0;
    allContents.split(/\r?\n/).forEach((line) => {
        if (line.length === 0) return;
        const [first, second] = line.split(',');
        const [start1, end1] = first.split('-')
        const [start2, end2] = second.split('-')
        if (Number(start1) <= Number(end2) && Number(end1) >= Number(end2)) doubleAssignments += 1;
        else if (Number(start1) >= Number(start2) && Number(end1) <= Number(end2)) doubleAssignments += 1;
    });
    console.log("number of assignment pairs which one range fully contain the others:");
    console.log(doubleAssignments);
};

const solvePart2 = () => {
    let doubleAssignments = 0;
    allContents.split(/\r?\n/).forEach((line) => {
        if (line.length === 0) return;
        const [first, second] = line.split(',');
        const [start1, end1] = first.split('-')
        const [start2, end2] = second.split('-')
        if (!(Number(start1) > Number(end2)) && !(Number(end1) < Number(start2))) doubleAssignments += 1;
    });
    console.log("number of assignment pairs that overlap:");
    console.log(doubleAssignments);
};

// solvePart1();
solvePart2();
