import adjustColor from '../../../utils/adjustColor';
import { mapPersonal7, mapExperience7 } from './utils/template7/mapSections7';
import styles from './utils/template7/styles';

// |---------------------------------------------------
// | Cambridge - Template
// |---------------------------------------------------

export const template7 = (params, image) => {
    // Extract parameters
    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.value;
    const lighterColor = adjustColor(mainColor, 120);

    // Generate content
    const css = styles(mainColor, lighterColor);
    const experienceContent = mapExperience7(experience);
    const personalContent = mapPersonal7(personalInfo, experience);

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
        <div class="doc_wrapper">
          <!-- ----------------------------------------------------------------------------------
                - Left Side                                                                     -
                --------------------------------------------------------------------------------- -->
    
          <div class="doc_title color_main_bg">Curriculum Vitae</div>
    
          <div class="left col-3" style="padding: 30px 20px 40px 20px">
            <!-- ----------------------------------------------------------------------------------
                - Personal Section                                                                -
                --------------------------------------------------------------------------------- -->
    
            <!-- User image -->
    
            <div class="user_img_wrapper">
              <img class="user_img" src="${img_src}" alt="User avatar" />
            </div>
    
            <div class="section_head left_head row mx-auto">
              <span>Personal</span>
            </div>

            ${personalContent}
    
          </div>
          <!-- ----------------------------------------------------------------------------------
                - Right Side                                                                    -
                --------------------------------------------------------------------------------- -->
    
          <div class="right col-12" style="padding: 20px">
            <div class="mx-auto" style="width: 100%; padding: 10px">
    
              ${experienceContent}    
              <br />
            </div>
          </div>
        </div>
      </body>
    </html>
    
            `;
};
