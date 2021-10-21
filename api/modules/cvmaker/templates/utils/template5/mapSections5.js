import { calculateLevelDots } from '../../../../../utils/calculateLevel';
import getDate from '../../../../../utils/getDate';
import findIcon from '../../findIcon';

export const mapExperience5 = (experiences) => {
    let result = '';

    if (experiences?.resumeObjective) {
        result = result.concat(`
        <hr />
        <div class="section_head row mx-auto">
            <div class="icon_border">
                ${findIcon(key, 'section_icon')}
            </div>
            <div class="txt">${experiences?.resumeObjective.title}</div>
        </div>

        <div class="objectives_text mx-auto">
            ${experiences?.resumeObjective.value}
        </div>
                 `);

        delete experiences?.resumeObjective;
    }

    for (const key in experiences) {
        switch (key) {
            case 'languages':
            case 'interests':
                break;
            // -------------------------------------------------------------------------------------------------
            // Education & Work & Courses
            // -------------------------------------------------------------------------------------------------

            case 'educationAndSkills':
            case 'workExperience':
            case 'courses':
                result = result.concat(`
                <hr />
                <div class="section_head row mx-auto">
                    <div class="icon_border">
                        ${findIcon(key, 'section_icon')}
                    </div>
                    <div class="txt">${experiences[key].title}</div>
                </div>
                `);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div class="experience_wrapper mx-auto">
                        <div class="experience_info experience_left">
                            ${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}
                        </div>
            
                        <div class="experience_right">
                            <div class="experience_info exp_bold">${val.main.val}</div>
                            <div class="experience_info">
                                ${val.third.val}, <i>${val.second.val}</i>
                            </div>
                            <div class="experience_info">${val.textEditor.val}</div>
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
                <div class="section_head row mx-auto">
                    <div class="icon_border">
                        ${findIcon(key, 'section_icon')}
                    </div>
                    <div class="txt">${experiences[key].title}</div>
                </div>`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div class="experience_wrapper mx-auto">
                        <div class="experience_info experience_left">${val.main.val}</div>
            
                        <div class="experience_right">
                            <div class="experience_info exp_bold">${val.contact_person.val}</div>
                            <div class="experience_info">${val.third.val}</div>
                            <div class="experience_info">${val.fourth.val}</div>
                        </div>
                    </div>
                    `);
                });
                break;

            // -------------------------------------------------------------------------------------------------
            // Language & Skills
            // -------------------------------------------------------------------------------------------------

            case 'skills':
                result = result.concat(`<hr />
                <div class="section_head row mx-auto">
                    <div class="icon_border">
                        ${findIcon(key, 'section_icon')}
                    </div>
                    <div class="txt">${experiences[key].title}</div>
                </div>`);

                experiences[key].value.map((val) => {
                    const lvl = calculateLevelDots(val.levels.index);
                    let icons = '';
                    Array.apply(null, Array(5)).map((item, idx) => {
                        const cls = lvl > idx ? 'star_icon' : 'star_icon_l';
                        icons = icons.concat(findIcon('star', `${cls} color_main_svg`));
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

            default:
                result = result.concat(`
                <hr />
                <div class="section_head row mx-auto">
                    <div class="icon_border">
                        ${findIcon(key, 'section_icon')}
                    </div>
                    <div class="txt">${experiences[key].title}</div>
                </div>

                <div class="objectives_text mx-auto">
                    ${experiences[key].value}
                </div>
                 `);
                break;
        }
    }
    return result;
};

export const mapPersonal5 = (personal, experience) => {
    let result = '';

    result = result.concat(`<div class="personal_data mx-auto">`);
    for (const key in personal) {
        result = result.concat(`
              <div class="section_wrapper">
                ${findIcon(key, 'left_section_icon')}
    
                <div class="data_wrapper">
                  <div class="exp_bold">${personal[key].title}</div>
                  <div style="margin-bottom: 16px">${personal[key].value}</div>
                </div>
              </div>
        `);
    }
    result = result.concat(`</div>`);

    if (experience['interests']) {
        let items = '';
        experience['interests'].value.map((val) => (items = items.concat(`<li>${val.main.val}</li>`)));

        result = result.concat(`
        <div class="section_head left_head row mx-auto">
        <span>Interests</span>
      </div>

      <ul class="personal_data interests_section mx-auto">
        ${items}
      </ul>      
        `);
    }

    if (experience['languages']) {
        result = result.concat(`
            <div class="section_head left_head row mx-auto">
              <span>${experience['languages'].title}</span>
            </div>
        `);

        experience['languages'].value.map((val) => {
            const lvl = calculateLevelDots(val.levels.index);
            let icons = '';
            Array.apply(null, Array(lvl)).map((item, idx) => {
                icons = icons.concat(findIcon('star', `star_icon`));
            });

            result = result.concat(`
            <div class="lang_row experience_head">
                <span>${val.main.val}</span>
                <div class="lang_level">
                    ${icons}
                </div>
            </div>
            `);
        });
    }

    return result;
};
