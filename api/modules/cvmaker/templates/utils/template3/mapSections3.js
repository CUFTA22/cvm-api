import getDate from '../../../../../utils/getDate';
import sortByOrder from '../../../../../utils/sortByOrder';
import findIcon from '../../findIcon';

export const mapExperience3 = (experiences) => {
    let result = '';

    // experiences = sortByOrder(experiences);

    if (experiences?.profileData) {
        result = result.concat(`
                <div class="interests_info col-lg-8 mx-auto">
                    ${experiences?.profileData.value}
                </div>
                 `);

        delete experiences?.profileData;
    }

    for (const key in experiences) {
        switch (key) {
            // -------------------------------------------------------------------------------------------------
            // Education & Work & Courses
            // -------------------------------------------------------------------------------------------------

            case 'educationAndSkills':
            case 'workExperience':
            case 'courses':
                // if (true) result = result.concat(`<div style="page-break-before: always;"></div>`);

                result = result.concat(`
                    <hr />
                    <div class="section_head col-lg-8 row mx-auto">
                        <span>${experiences[key].title}</span>
                    </div>`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px" class="col-lg-8 mx-auto">
                        <div class="experience_head">
                            <span class="exp_bold">${val.main.val}</span>
                            <span>${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}</span>
                        </div>
                        <div class="experience_info">${val.third.val}, <i>${val.second.val}</i></div>
                        <div class="experience_info">${val.textEditor.val}</div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // References
            // -------------------------------------------------------------------------------------------------

            case 'references':
                result = result.concat(`<hr />
                <div class="section_head col-lg-8 row mx-auto">
                    <span>${experiences[key].title}</span>
                </div>`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px" class="col-lg-8 mx-auto">
                        <div class="experience_head">
                            <span class="exp_bold">${val.contact_person.val}</span>
                            <span>${val.main.val}</span>
                        </div>
                        <div class="experience_info">${val.third.val}</div>
                        <div class="experience_info">${val.fourth.val}</div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // Language & Skills
            // -------------------------------------------------------------------------------------------------

            case 'languages':
            case 'skills':
                result = result.concat(`<hr />
                <div class="section_head col-lg-8 row mx-auto">
                    <span>${experiences[key].title}</span>
                </div>
                <div class="skill_container col-lg-8 mx-auto">`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                        <div class="personal_row">
                            <span>${val.main.val}</span> <span class="personal_data">${val.levels.val}</span>
                        </div>
                   
                    `);
                });
                result = result.concat(`</div>`);

                break;

            // -------------------------------------------------------------------------------------------------
            // Interests
            // -------------------------------------------------------------------------------------------------

            case 'interests':
                result = result.concat(`
                                <hr />
                                <div class="section_head col-lg-8 row mx-auto">
                                    <span>${experiences[key].title}</span>
                                </div>

                                <div class="interests_info col-lg-8 mx-auto">
                                    ${experiences[key].value.map((val) => `<span>   ${val.main.val}</span>`)}
                                </div>
                                 `);
                break;

            default:
                result = result.concat(`
                <hr />
                <div class="section_head col-lg-8 row mx-auto">
                    <span>${experiences[key].title}</span>
                </div>
                
                <div class="interests_info col-lg-8 mx-auto">
                    ${experiences[key].value}
                </div>
                 `);
                break;
        }
    }
    return result;
};

export const mapPersonal3 = (personal) => {
    let result = '';

    result = result.concat(`
        <div style="font-size: 22px; margin: 10px 0" class="row col-lg-8 mx-auto">      
            ${findIcon('address', 'section_icon')}
            <span style="margin-right: 14px">${personal['address'].value}</span>
            ${findIcon('phone', 'section_icon')}
            <span style="margin-right: 14px">${personal['phone'].value}</span>
            ${findIcon('email', 'section_icon')}
            <span style="margin-right: 14px">${personal['email'].value}</span>
        </div>
        <hr />
        <div class="interests_info col-lg-8 mx-auto">
        `);

    delete personal.address;
    delete personal.phone;
    delete personal.email;
    // delete personal.name;

    for (const key in personal) {
        if (key !== 'name')
            result = result.concat(`
            <span class="personal_info">
                <div class="exp_bold">${personal[key]?.title}</div>
                <div>${personal[key]?.value}</div>
            </span>
        `);
    }

    result = result.concat(`</div>`);

    return result;
};
