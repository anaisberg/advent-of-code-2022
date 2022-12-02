const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/codecalendar/input2.txt', 'utf-8');

const calculateRoundOutcome = (opponent, me) => {
    if (opponent === me)
    return 1
};

const calculateShapeScore = (shape) => {
    switch (shape) {
        case 'X':
            return 1;
        case 'Y':
            return 2;
        case 'Z':
            return 3;
        default:
            return 0;
    }
};

allContents.split(/\r?\n/).forEach((line) => {
    const [them, me] = line.split(' ');
    const outcomeScore = calculateRoundOutcome(them, me);
    const shapeScore = calculateShapeScore(me);
});