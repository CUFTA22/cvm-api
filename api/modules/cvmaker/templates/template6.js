import adjustColor from '../../../utils/adjustColor';
import { mapPersonal6, mapExperience6 } from './utils/template6/mapSections6';
import styles from './utils/template6/styles';

// |---------------------------------------------------
// | Edinburgh - Template
// |---------------------------------------------------

export const template6 = (params, image) => {
    // Extract parameters
    let { personalInfo, experience, template } = params;

    const img_src = image ? `data:${image.mimetype};base64,${image.buffer.toString('base64')}` : '';

    const mainColor = template.color;
    const darkerColor = adjustColor(mainColor, -69);
    const lighterColor = adjustColor(mainColor, 120);

    // Generate content
    const css = styles(mainColor, lighterColor, darkerColor);
    const experienceContent = mapExperience6(experience);
    const personalContent = mapPersonal6(personalInfo, experience);

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
    
          <div
            class="left col-3"
            style="padding: 20px 20px 40px 20px; overflow: hidden"
          >
            <!-- ----------------------------------------------------------------------------------
                - Personal Section                                                                -
                --------------------------------------------------------------------------------- -->
    
            <!-- User image -->
    
            <div class="round-bottom round-bottom-2 color_main_bg"></div>
            <div class="round-bottom color_main_bg"></div>
    
            <h1
              style="
                text-align: center;
                color: white;
                font-size: 36px;
                position: relative;
              "
            >
              <b>${personalInfo.name.val}</b>
            </h1>
    
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
