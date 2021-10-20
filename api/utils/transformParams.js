import tempData from '../modules/cvmaker/fullReq.json';

const transformParams = (personalInfo, experience, template) => {
    const name = JSON.parse(template).id;
    const params = {
        personalInfo: tempData.personalInfo,
        experience: tempData.experience,
        template: JSON.parse(template),
    };

    params.personalInfo = {
        name: { val: `${params.personalInfo.firstName.val} ${params.personalInfo.lastName.val}`, title: 'name' },
        ...params.personalInfo,
        address: {
            val: `${params.personalInfo.address.val}, ${params.personalInfo.postcode.val} ${params.personalInfo.city.val}`,
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
