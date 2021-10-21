import { mapPersonal2, mapExperience2 } from './utils/template2/mapSections2';
import styles from './utils/template2/styles';

// |---------------------------------------------------
// | Princeton - Template
// |---------------------------------------------------

export const template2 = (params, image) => {
    // Extract parameters
    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.value;

    // Generate content
    const css = styles(mainColor);
    const experienceContent = mapExperience2(experience);
    const personalContent = mapPersonal2(personalInfo);

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
        <div class="col-lg-8 mx-auto" style="padding: 0 30px">
          <br /><br />
          <div class="col-lg-8 mx-auto row">
            ${
                img_src &&
                `
            <div class="user_img_wrapper">
              <img class="user_img" src="${img_src}" alt="User avatar" />
            </div>
            `
            }
            <h1 class="user_name">Curriculum Vitae</h1>
          </div>
          <br />
    
          <!-- ----------------------------------------------------------------------------------
             - Personal Section                                                               -
             ---------------------------------------------------------------------------------- -->
    
          <hr />

          ${personalContent}

          ${experienceContent}

        </div>
      </body>
    </html>
    
    `;
};
