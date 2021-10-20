import { mapPersonal3, mapExperience3 } from './utils/template3/mapSections3';
import styles from './utils/template3/styles';

// |---------------------------------------------------
// | Otago - Template
// |---------------------------------------------------

export const template3 = (params, image) => {
    // Extract parameters
    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.color;

    // Generate content
    const css = styles(mainColor);
    const experienceContent = mapExperience3(experience);
    const personalContent = mapPersonal3(personalInfo);

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
          <div class="cv_mark color_main_bg">CV</div>
          <br /><br />
          <div class="col-lg-8 mx-auto row">
           ${
               img_src &&
               `<div class="user_img_wrapper">
                       <img class="user_img" src="${img_src}" alt="User avatar" />
                   </div>`
           }
            <div class="user_name">${personalInfo.name.val}</div>
          </div>


          ${personalContent}

          ${experienceContent}
    
          <br />
        </div>
      </body>
    </html>
        
    `;
};
