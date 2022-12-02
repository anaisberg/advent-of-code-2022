const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/advent-of-code-2022/day-02/input2.txt', 'utf-8');

const calculateRoundOutcome = (opponent, me) => {
    switch (opponent) {
        case 'A':
            if (me === 'X') return 3;
            if (me === 'Y') return 6;
            if (me === 'Z') return 0;
        case 'B':
            if (me === 'X') return 0;
            if (me === 'Y') return 3;
            if (me === 'Z') return 6;
        case 'C':
            if (me === 'Z') return 3;
            if (me === 'Y') return 0;
            if (me === 'X') return 6;
        default:
            return 0;
    }
};

const calculateShapeScore = (shape) => {
    switch (shape) {
        case 'X':
        case 'A':
            return 1;
        case 'Y':
        case 'B':
            return 2;
        case 'Z':
        case 'C':
            return 3;
        default:
            return 0;
    }
};

const calculateEndPoints = (end) => {
    switch (end) {
        case 'X':
            return 0;
        case 'Y':
            return 3;
        case 'Z':
            return 6;
        default:
            return 0;
    }
};

const findOutShape = (opponent, end) => {
    switch (opponent) {
        case 'A':
            if (end === 0) return 'C';
            if (end === 3) return 'A';
            if (end === 6) return 'B';
        case 'B':
            if (end === 0) return 'A';
            if (end === 3) return 'B';
            if (end === 6) return 'C';
        case 'C':
            if (end === 0) return 'B';
            if (end === 3) return 'C';
            if (end === 6) return 'A';
        default:
            return 'A';            
    }
}

const part1score = () => {
    let totalScore = 0;
    allContents.split(/\r?\n/).forEach((line) => {
        if (line.length === 0) return;
        const [them, me] = line.split(' ');
        const outcomeScore = calculateRoundOutcome(them, me);
        const shapeScore = calculateShapeScore(me);
        const roundScore = outcomeScore + shapeScore;
        console.log(them, me)
        console.log(shapeScore, '+', outcomeScore, '=', roundScore)
        totalScore += roundScore;
    });

    console.log('if everything goes exactly according to the strategy guide, my score would be:')
    console.log(totalScore)
}

const part2score = () => {
    let totalScore = 0;
    allContents.split(/\r?\n/).forEach((line) => {
        if (line.length === 0) return;
        const [them, end] = line.split(' ');
        const outcomeScore = calculateEndPoints(end);
        const myShape = findOutShape(them, outcomeScore)
        const shapeScore = calculateShapeScore(myShape);
        const roundScore = outcomeScore + shapeScore;
        console.log(them, end)
        console.log(myShape, shapeScore, '+', outcomeScore, '=', roundScore)
        totalScore += roundScore;
    });

    console.log('if everything goes exactly according to the strategy guide, my score would be:')
    console.log(totalScore)
}

// part1score();
// part2score();