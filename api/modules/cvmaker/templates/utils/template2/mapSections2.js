import getDate from '../../../../../utils/getDate';
import sortByOrder from '../../../../../utils/sortByOrder';

export const mapExperience2 = (experiences) => {
    let result = '';

    // experiences = sortByOrder(experiences);

    if (experiences?.profileData) {
        result = result.concat(`
        <hr />
        <div class="section_head col-lg-8 row mx-auto">
            <span>${experiences?.profileData.title}</span>
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
                    <hr />
                    <div class="section_head col-lg-8 row mx-auto">
                        <span>${experiences[key].title}</span>
                    </div>
                    `);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 40px;" class="col-lg-8 mx-auto">
                        <div class="info_row">
                            <div class="row_label">${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}</div>
                            <div class="row_data exp_bold">${val.main.val}</div>
                        </div>
                        <div class="info_row">
                            <div class="row_label"></div>
                            <div class="row_data">${val.third.val}, <i>${val.second.val}</i></div>
                        </div>
                        <div class="info_row">
                            <div class="row_label"></div>    
                            <div class="row_data">${val.textEditor.val}</div>
                        </div>
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
                    <div style="margin-bottom: 40px" class="col-lg-8 mx-auto">
                        <div class="info_row">
                            <span class="row_label">${val.main.val}</span>
                            <span class="row_data exp_bold">${val.contact_person.val}</span>
                        </div>
                        <div class="info_row"><span class="row_data">${val.third.val}</span></div>
                        <div class="info_row"><span class="row_data">${val.fourth.val}</span></div>
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
                        <div class="info_row">
                            <span class="row_label">${val.main.val}</span>
                            <span class="row_data exp_bold">${val.levels.val}</span>
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

export const mapPersonal2 = (personal) => {
    let result = '';

    result = result.concat(`
    <div class="section_head col-lg-8 row mx-auto">
    <span>Personal</span>
  </div>

  <div style="margin-bottom: 40px" class="col-lg-8 mx-auto">


        `);

    for (const key in personal) {
        result = result.concat(`
            <div class="info_row">
                <span class="row_label">${personal[key]?.title}</span>
                <span class="row_data exp_bold">${personal[key]?.value}</span>
            </div>
        `);
    }

    result = result.concat(`</div>`);

    return result;
};
