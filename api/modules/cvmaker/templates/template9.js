import adjustColor from '../../../utils/adjustColor';
import { mapPersonal9, mapExperience9 } from './utils/template9/mapSections9';
import styles from './utils/template9/styles';

// |---------------------------------------------------
// | Oxford - Template
// |---------------------------------------------------

export const template9 = (params, image, pageNo) => {
    // Extract parameters
    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.value;
    const lighterColor = adjustColor(mainColor, 120);

    // Generate content
    const css = styles(mainColor, lighterColor, pageNo);
    const experienceContent = mapExperience9(experience);
    const personalContent = mapPersonal9(personalInfo);

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
      <!-- <div class="col-lg-8 mx-auto doc_wrapper"> -->

        <div class="left_line"></div>

        <br /><br />
        <div class="col-lg-8 mx-auto row">
            ${
                img_src &&
                `<div class="user_img_wrapper">
                  <img class="user_img" src="${img_src}" alt="User avatar" />
                </div>`
            }
            <h1 class="user_name"><b>Cirriculum Vitae</b></h1>
        </div>
    
        <!-- ----------------------------------------------------------------------------------
             - Personal Section                                                               -
             ---------------------------------------------------------------------------------- --> 
        
        <div class="section_head col-lg-8 row text-center mx-auto">
          <span style="font-size: 28px;">Personal</span>
        </div>
        <hr />
    
        <div class="col-lg-8 mx-auto">
            ${personalContent}
        </div>

        ${experienceContent}
          
        <br />
        <!-- </div> -->
      </body>
    </html>
            `;
};
