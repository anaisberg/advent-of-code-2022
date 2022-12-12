export const MONKEYS = {
    0: {
        items: [99, 63, 76, 93, 54, 73],
        getNewWorryLevel: (item) => item * 11,
        testItem: (item) => {
            if (item % 2 === 0) return 7;
            return 1;
        },
        inspectedItems: 0,
    },
    1: {
        items: [91, 60, 97, 54],
        getNewWorryLevel: (item) => item + 1,
        testItem: (item) => {
            if (item % 17 === 0) return 3;
            return 2;
        },
        inspectedItems: 0,
    },
    2: {
        items: [65],
        getNewWorryLevel: (item) => item + 7,
        testItem: (item) => {
            if (item % 7 === 0) return 6;
            return 5;
        },
        inspectedItems: 0,
    },
    3: {
        items: [84, 55],
        getNewWorryLevel: (item) => item + 3,
        testItem: (item) => {
            if (item % 11 === 0) return 2;
            return 6;
        },
        inspectedItems: 0,
    },
    4: {
        items: [86, 63, 79, 54, 83],
        getNewWorryLevel: (item) => item * item,
        testItem: (item) => {
            if (item % 19 === 0) return 7;
            return 0;
        },
        inspectedItems: 0,
    },
    5: {
        items: [96, 67, 56, 95, 64, 69, 96],
        getNewWorryLevel: (item) => item + 4,
        testItem: (item) => {
            if (item % 5 === 0) return 4;
            return 0;
        },
        inspectedItems: 0,
    },
    6: {
        items: [66, 94, 70, 93, 72, 67, 88, 51],
        getNewWorryLevel: (item) => item * 5,
        testItem: (item) => {
            if (item % 13 === 0) return 4;
            return 5;
        },
        inspectedItems: 0,
    },
    7: {
        items: [59, 59, 74],
        getNewWorryLevel: (item) => item + 8,
        testItem: (item) => {
            if (item % 3 === 0) return 1;
            return 3;
        },
        inspectedItems: 0,
    },
};
