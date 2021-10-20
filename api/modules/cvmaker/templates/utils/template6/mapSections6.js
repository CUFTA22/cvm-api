import { calculateLevelDots } from '../../../../../utils/calculateLevel';
import getDate from '../../../../../utils/getDate';
import findIcon from '../../findIcon';

export const mapExperience6 = (experiences) => {
    let result = '';

    if (experiences?.resumeObjective) {
        result = result.concat(`
                <hr />

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
                result = result.concat(`<hr />
                <div class="section_head row mx-auto">
                  <span>${experiences[key].title}</span>
                </div>`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px" class="mx-auto">
                        <div class="experience_head">
                            <span class="exp_bold">${val.main.val}</span>
                            <span>${getDate(val.start_date.val)} - ${getDate(val.end_date.val)}</span>
                        </div>
                        <div class="experience_info color_main_txt">
                            ${val.third.val}, <i>${val.second.val}</i>
                        </div>
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
                <div class="section_head row mx-auto">
                  <span>${experiences[key].title}</span>
                </div>`);

                experiences[key].value.map((val) => {
                    result = result.concat(`
                    <div style="margin-bottom: 20px" class="mx-auto">
                        <div class="experience_head">
                            <span class="exp_bold">${val.contact_person.val}</span>
                            <span>${val.main.val}</span>
                        </div>
                        <div class="experience_info color_main_txt">${val.third.val}</div>
                        <div class="experience_info color_main_txt">${val.fourth.val}</div>
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
                  <span>${experiences[key].title}</span>
                </div>`);

                experiences[key].value.map((val) => {
                    const lvl = calculateLevelDots(val.levels.val);
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

            default:
                result = result.concat(`
                <hr />
                <div class="section_head row mx-auto">
                  <span>${experiences[key].title}</span>
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

export const mapPersonal6 = (personal, experience) => {
    let result = '';

    result = result.concat(`<div class="personal_data mx-auto">`);
    for (const key in personal) {
        if (key !== 'name')
            result = result.concat(`
              <div class="section_wrapper">
                ${findIcon(key, 'left_section_icon color_main_svg')}
    
                <div class="data_wrapper">
                  <div class="exp_bold">${personal[key].val}</div>
                  <div style="margin-bottom: 16px">${personal[key].val}</div>
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
            const lvl = calculateLevelDots(val.levels.val);
            let icons = '';
            Array.apply(null, Array(lvl)).map((item, idx) => {
                icons = icons.concat(findIcon('circle', `star_icon color_main_svg`));
            });

            result = result.concat(`
            <div class="skill_row experience_head">
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
