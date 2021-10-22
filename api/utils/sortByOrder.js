const sortByOrder = (obj) => {
    const order = [],
        res = {};
    Object.keys(obj).forEach((key) => {
        return (order[obj[key]['order'] - 1] = key);
    });
    order.forEach((key) => {
        res[key] = obj[key];
    });
    return res;
};

export default sortByOrder;
