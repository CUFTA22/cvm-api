import { mapPersonal1, mapExperience1 } from './utils/template1/mapSections1';
import styles from './utils/template1/styles';

import findIcon from './findIcon';

// |---------------------------------------------------
// | Berkeley - Template
// |---------------------------------------------------

export const template1 = (params, image) => {
    // Extract parameters
    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.value;

    // Generate content
    const css = styles(mainColor);
    const experienceContent = mapExperience1(experience);
    const personalContent = mapPersonal1(personalInfo);

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <!-- Bootstrap core CSS -->
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <!-- Material Design Bootstrap -->
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css"
          rel="stylesheet"
        />
    
        <style>
          ${css}
        </style>
      </head>
      <body>
        <div class="col-lg-8 mx-auto" style="padding: 0 30px;">
        <br /><br />
        <div class="col-lg-8 mx-auto row">
            ${
                img_src &&
                `<div class="user_img_wrapper">
                  <img class="user_img" src="${img_src}" alt="User avatar" />
                </div>`
            }
            <h1 class="user_name"><b>${personalInfo.name.val}</b></h1>
        </div>
        <br />
            
        <div class="section_head col-lg-8 row text-center mx-auto bg-light">
          ${findIcon('name', 'section_icon')}
          <span style="font-size: 28px; margin-left: 16px;">Personal</span>
        </div>
    
        ${personalContent}
    
        ${experienceContent}
          
        <br />
      </body>
    </html>
            `;
};
