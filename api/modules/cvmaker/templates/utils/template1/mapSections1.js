import getDate from '../../../../../utils/getDate';
import sortByOrder from '../../../../../utils/sortByOrder';
import findIcon from '../../findIcon';

export const mapExperience1 = (experiences) => {
    let result = '';

    // experiences = sortByOrder(experiences);

    if (experiences?.profileData) {
        result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto bg-light">
                    ${findIcon('', 'section_icon')}
                    <span style="font-size: 28px; margin-left: 16px;">${experiences?.profileData.title}</span>
                </div>
                
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
                result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto bg-light">
                    ${findIcon(key, 'section_icon')}
                    <span style="font-size: 28px; margin-left: 16px;">${experiences[key].title}</span>
                </div>
                    `);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px;" class="col-lg-8 mx-auto">
                        <div class="experience_head"> 
                            <span class="exp_bold">${val.main.val}</span>         
                            <span>${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}</span>
                        </div>
                        <div class="experience_info"> ${val.third.val}, <i>${val.second.val}</i> </div>
                        <div class="experience_info"> ${val.textEditor.val} </div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // References
            // -------------------------------------------------------------------------------------------------

            case 'references':
                result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto bg-light">
                    ${findIcon(key, 'section_icon')}
                    <span style="font-size: 28px; margin-left: 16px;">${experiences[key].title}</span>
                </div>
                    `);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px;" class="col-lg-8 mx-auto">
                        <div class="experience_head"> 
                            <span class="exp_bold">${val.contact_person.val}</span>          
                            <span>${val.main.val}</span> 
                        </div>
                        <div class="experience_info"> ${val.third.val} </div>
                        <div class="experience_info"> ${val.fourth.val} </div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // Language & Skills
            // -------------------------------------------------------------------------------------------------

            case 'languages':
            case 'skills':
                result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto bg-light">
                    ${findIcon(key, 'section_icon')}
                    <span style="font-size: 28px; margin-left: 16px;">${experiences[key].title}</span>
                </div>
                <div class="skill_container col-lg-8 mx-auto">
                    `);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                        <div class="skill_info">
                            <div>${val.main.val}</div> <div>${val.levels.val}</div>
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
                                <div class="section_head col-lg-8 row text-center mx-auto bg-light">
                                    ${findIcon(key, 'section_icon')}
                                    <span style="font-size: 28px; margin-left: 16px;">${experiences[key].title}</span>
                                </div>

                                <div class="interests_info col-lg-8 mx-auto">
                                    ${experiences[key].value.map((val) => `<span>   ${val.main.val}</span>`)}
                                </div>
                                 `);
                break;

            default:
                result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto bg-light">
                    ${findIcon(key, 'section_icon')}
                    <span style="font-size: 28px; margin-left: 16px;">${experiences[key].title}</span>
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

export const mapPersonal1 = (personal) => {
    let result = '';

    result = result.concat(`
    <div class="col-lg-8 mx-auto">
        `);

    for (const key in personal) {
        result = result.concat(`
            <div class="personal_row"> 
                <span>${personal[key]?.title}</span>          
                <span class="personal_data">${personal[key]?.value}</span> 
            </div>
        `);
    }

    result = result.concat(`</div>`);

    return result;
};
