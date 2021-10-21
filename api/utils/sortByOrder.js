const sortByOrder = (arr) =>
    arr.sort((a, b) => {
        return a?.order - b?.order;
    });

export default sortByOrder;
