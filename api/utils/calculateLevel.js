const calculateLevelDots = (level) => level + 1;

const calculateLevelPrecent = (level) => {
    return calculateLevelDots(level) * 20;
};

export { calculateLevelDots, calculateLevelPrecent };
