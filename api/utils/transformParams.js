const transformParams = (personalInfo, experience, template) => {
    const name = template.title;
    const params = {
        personalInfo,
        experience,
        template,
    };

    params.personalInfo = {
        name: { val: `${params.personalInfo.firstName.value} ${params.personalInfo.lastName.value}`, title: 'name' },
        ...params.personalInfo,
        address: {
            val: `${params.personalInfo.address.value}, ${params.personalInfo.postcode.value} ${params.personalInfo.city.value}`,
            title: 'address',
        },
    };
    delete params.personalInfo.city;
    delete params.personalInfo.postcode;
    delete params.personalInfo.firstName;
    delete params.personalInfo.lastName;
    delete params.personalInfo.avatarImage;

    return { name, params };
};

export default transformParams;
