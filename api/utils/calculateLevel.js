const calculateLevelDots = (level) => {
    switch (level) {
        case 'Anfänger':
            return 1;
        case 'dazwischenliegend':
            return 2;
        case 'Geschickt':
            return 3;
        case 'Erfahren':
            return 4;
        case 'Experte':
            return 5;

        default:
            return 1;
    }
};

const calculateLevelPrecent = (level) => {
    return calculateLevelDots(level) * 20;
};

export { calculateLevelDots, calculateLevelPrecent };
