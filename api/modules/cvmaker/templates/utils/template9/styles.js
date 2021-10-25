const styles = (mainColor, lighterColor) => `
.pb_before { page-break-before: always !important; } /* Breaks page before of element */
.pb_after  { page-break-after: always !important; } /* Breaks page after of element */
.pbi_avoid { page-break-inside: avoid !important; } /* Avoid breaks page in element */

.color_main_svg * {
    fill: ${mainColor};
  }
  html {
    zoom: 0.4;
  }
  .doc_wrapper {
    display: table;
    width: 100%;
    height: 2102px;
  }
  .rule {
    border-bottom: 1px solid black;
    width: 80%;
  }
  .mobile {
    margin-top: -10px;
  }
  .email {
    margin-bottom: 0;
  }
  body {
    font-family: Arial, sans-serif;
  }
  .section_head {
    margin-top: 16px; font-size: 20px; text-align: left !important;
    color: ${mainColor}
  }
  .section_icon {
    width: 30px; height: 30px; margin-bottom: 10px;
  }
  .section_icon * {
    fill: ${mainColor}
  }
  .personal_row {
    margin: 6px 0;
    position: relative;
    display: table;
    width: 100%;
    height: fit-content;
    font-size: 22px;
  }
  .personal_label {
    width: 18%;
    display: table-cell;
  }
  .personal_data {
    width: 80%;
    margin-left: 70px;
  }
  .objectives_text {
    padding: 8px 16px; font-size: 22px;
  }
  .experience_head {
    padding-top: 8px; font-size: 22px; text-align: justify; height: 36px;
  }
  .experience_head::after {
    content: ''; display: inline-block; width: 100%;
  }
  .experience_head span {
    display: inline-block;
  }
  .experience_info {
    margin: 6px 0; font-size: 20px;
  }
  .info_row {
    margin-bottom: 20px;
    display: table;
    width: 100%;
    height: fit-content;
    position: relative;
    font-size: 22px;
  }
  .row_label {
    width: 9%;
    display: table-cell;
    font-weight: 200;
    margin-right: 30px;
  }
  .row_data {
    width: 100%;
    margin-left: 70px;
  }
  .exp_bold {
    font-weight: 800;
  }
  .interests_info {
    margin: 14px 0; font-size: 22px;
  }
  .skill_row {
    position: relative;
    font-size: 22px;
    padding: 8px 16px;
  }
  .skill_level {
    width: fit-content;
    height: fit-content;
  }
  .star_icon {
    width: 16px;
    height: 16px;
    margin: 0 2px;
  }
  .star_icon_l {
    width: 16px;
    height: 16px;
    margin: 0 2px;
  }
  .star_icon_l * {
    fill: ${lighterColor};
  }
  .user_img_wrapper {
    display: inline-block;
    width: 80px;
    padding-bottom: 80px;
    margin-right: 20px;
    overflow: hidden;
    position: relative;
  }
  .user_img {
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  .user_name {
    font-size: 52px;
    display: inline-block;
    height: 80px;
    font-weight: 700;
    position: relative;
    bottom: 22px;
    color: ${mainColor};
    letter-spacing: 2px;
  }
  .left_line {
    background-color: ${mainColor};
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .doc_wrapper {
    padding: 0 30px 0 80px; 
    overflow: hidden; 
    display: table;
  }

`;

export default styles;
