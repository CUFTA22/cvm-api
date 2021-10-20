import adjustColor from '../../../utils/adjustColor';
import { mapPersonal8, mapExperience8 } from './utils/template8/mapSections8';
import styles from './utils/template8/styles';

// |---------------------------------------------------
// | Auckland - Template
// |---------------------------------------------------

export const template8 = (params, image) => {
    // Extract parameters

    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.color;
    const darkerColor = adjustColor(mainColor, -69);
    const lighterColor = adjustColor(mainColor, 120);

    // Generate content
    const css = styles(mainColor, lighterColor, darkerColor);
    const experienceContent = mapExperience8(experience);
    const personalContent = mapPersonal8(personalInfo, experience);

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

            <div class="top_banner">
                <div class="banner_img">
                    <div class="user_img_wrapper">
                        <img class="user_img" src="${img_src}" alt="User avatar" />
                    </div>
                </div>
                <div class="banner_name">${personalInfo.name.val}</div>
            </div>

          <!-- ----------------------------------------------------------------------------------
                - Left Side                                                                     -
                --------------------------------------------------------------------------------- -->
    
          <div
            class="left col-3"
            style="padding: 20px 20px 40px 20px; overflow: hidden"
          >
            <!-- ----------------------------------------------------------------------------------
                - Personal Section                                                                -
                --------------------------------------------------------------------------------- -->
        
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
