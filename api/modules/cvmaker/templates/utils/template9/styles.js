const styles = (mainColor, lighterColor) => `
.color_main_svg * {
    fill: ${mainColor};
  }
  html {
    zoom: 0.4;
  }
  .doc_wrapper {
    display: table;
    width: 100%;
    height: 2005px;
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
    margin: 6px 0; position: relative; display: flex; align-items: center; font-size: 22px;
  }
  .personal_data {
    position: absolute; left: 260px;
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
    width: 700px;
    height: 20px;
    position: relative;
    font-size: 22px;
  }
  .row_label {
    font-weight: 200;
  }
  .row_data {
    position: absolute;
    left: 260px;
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
    position: absolute;
    left: 270px;
    top: 0;
    text-align: left;
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
    height: 100vh;
    display: table;
  }

`;

export default styles;
