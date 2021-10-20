const getDate = (data) => {
    if (!data.month) return 'Present';

    return `${data.month.substr(0, 3)} ${data.year}`;
};

export default getDate;
