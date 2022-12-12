export const MONKEYS = {
    0: {
        items: [79, 98],
        getNewWorryLevel: (item) => item * 19,
        testItem: (item) => {
            if (item % 23 === 0) return 2;
            return 3;
        },
        inspectedItems: 0,
    },
    1: {
        items: [54, 65, 75, 74],
        getNewWorryLevel: (item) => item + 6,
        testItem: (item) => {
            if (item % 19 === 0) return 2;
            return 0;
        },
        inspectedItems: 0,
    },
    2: {
        items: [79, 60, 97],
        getNewWorryLevel: (item) => item * item,
        testItem: (item) => {
            if (item % 13 === 0) return 1;
            return 3;
        },
        inspectedItems: 0,
    },
    3: {
        items: [74],
        getNewWorryLevel: (item) => item + 3,
        testItem: (item) => {
            if (item % 17 === 0) return 0;
            return 1;
        },
        inspectedItems: 0,
    },
};
