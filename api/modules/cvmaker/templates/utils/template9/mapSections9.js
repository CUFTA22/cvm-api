import { calculateLevelDots } from '../../../../../utils/calculateLevel';
import getDate from '../../../../../utils/getDate';
import findIcon from '../../findIcon';

export const mapExperience9 = (experiences) => {
    let result = '';

    if (experiences?.resumeObjective) {
        result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto">
                    <span style="font-size: 28px;">${experiences?.resumeObjective.title}</span>
                </div>
                
                <hr />
                <div class="interests_info col-lg-8 mx-auto">
                    ${experiences?.resumeObjective.value}
                </div>
                 `);

        delete experiences?.resumeObjective;
    }

    for (const key in experiences) {
        switch (key) {
            // -------------------------------------------------------------------------------------------------
            // Education & Work & Courses
            // -------------------------------------------------------------------------------------------------

            case 'educationAndSkills':
            case 'workExperience':
            case 'courses':
                result = result.concat(`<div class="section_head col-lg-8 row text-center mx-auto">
                                    <span style="font-size: 28px;">${experiences[key].title}</span>
                                </div>
                                 <hr />`);
                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 40px" class="col-lg-8 mx-auto">
                        <div class="info_row">
                            <span class="row_label">${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}</span>
                            <span class="row_data exp_bold">${val.main.val}</span>
                        </div>
                        <div class="info_row">
                            <span class="row_data">${val.third.val}, <i>${val.second.val}</i></span>
                        </div>
                        <div class="info_row">
                            <span class="row_data">${val.textEditor.val}</span>
                        </div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // References
            // -------------------------------------------------------------------------------------------------

            case 'references':
                result = result.concat(`<div class="section_head col-lg-8 row text-center mx-auto">
                                    <span style="font-size: 28px;">${experiences[key].title}</span>
                                </div>
                                 <hr />`);
                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 40px" class="col-lg-8 mx-auto">
                        <div class="info_row">
                            <span class="row_label">${val.contact_person.val}</span>
                            <span class="row_data exp_bold">${val.main.val}</span>
                        </div>
                        <div class="info_row">
                            <span class="row_data">${val.third.val}</i></span>
                        </div>
                        <div class="info_row">
                            <span class="row_data">${val.fourth.val}</span>
                        </div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // Language & Skills
            // -------------------------------------------------------------------------------------------------

            case 'languages':
            case 'skills':
                result = result.concat(`<div class="section_head col-lg-8 row text-center mx-auto">
                                    <span style="font-size: 28px;">${experiences[key].title}</span>
                                </div>
                                 <hr />`);
                experiences[key].value.map((val) => {
                    const lvl = calculateLevelDots(val.levels.index);
                    let icons = '';
                    Array.apply(null, Array(5)).map((item, idx) => {
                        const cls = lvl > idx ? 'star_icon' : 'star_icon_l';
                        icons = icons.concat(findIcon('circle', `${cls} color_main_svg`));
                    });

                    result = result.concat(`
                    <div class="skill_row">
                        <span>${val.main.val}</span>
                        <div class="skill_level">
                            ${icons}
                        </div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // Interests
            // -------------------------------------------------------------------------------------------------

            case 'interests':
                result = result.concat(`
                                <div class="section_head col-lg-8 row text-center mx-auto">
                                    <span style="font-size: 28px;">${experiences[key].title}</span>
                                </div>
                                <hr />
                                <div class="interests_info col-lg-8 mx-auto">
                                    ${experiences[key].value.map((val) => `<span>   ${val.main.val}</span>`)}
                                </div>
                                 `);
                break;

            default:
                result = result.concat(`
                <div class="section_head col-lg-8 row text-center mx-auto">
                    <span style="font-size: 28px;">${experiences[key].title}</span>
                </div>
                
                <hr />
                <div class="interests_info col-lg-8 mx-auto">
                    ${experiences[key].value}
                </div>
                 `);
                break;
        }
    }
    return result;
};

export const mapPersonal9 = (personal) => {
    let result = '';

    for (const key in personal) {
        result = result.concat(`
        <div class="personal_row"> <span>${personal[key].title}</span>          <span class="personal_data">${personal[key].val}</span> </div>
        `);
    }
    return result;
};
