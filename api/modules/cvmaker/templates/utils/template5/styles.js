const styles = (mainColor, lighterColor) => `
.color_main_txt {
  color: ${mainColor};
}
.color_main_bg {
  background-color: ${mainColor};
}
.color_main_svg * {
  fill: ${mainColor};
}
html {
  zoom: 0.4;
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
.doc_wrapper {
  display: table;
  width: 100%;
  height: 2102px;
}
.left {
  color: rgb(251, 251, 251);
  display: inline-block;
  width: 30%;
  display: table-cell;
  vertical-align: top;
}
.right {
  display: inline-block;
  height: 100%;
}
.section_head {
  padding: 8px 0;
  margin: 8px 0;
  font-size: 29px;
  font-weight: 500;
  text-align: left !important;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
}
.section_head .txt {
  display: inline-block;
  position: absolute;
  top: 12px;
  left: 80px;
}
.section_wrapper {
  position: relative;
}
.left_section_icon {
  width: 28px;
  height: 28px;
  display: inline-block;
  position: absolute;
  top: 5px;
}
.icon_border {
  border: 1px solid rgb(67, 75, 85);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 26px;
  display: inline-block;
}
.section_icon {
  width: 30px;
  height: 30px;
  display: block;
  margin: auto;
  margin-top: 8px;
}
.section_icon * {
  fill: rgb(67, 75, 85);
}
.left_section_icon * {
  fill: rgb(251, 251, 251);
}
.left_head {
  margin-top: 16px;
  font-size: 28px;
  text-transform: none;
  display: inline-block;
}
.personal_data {
  font-size: 20px;
}
.personal_data div {
  margin: 2px 0;
}
.data_wrapper {
  padding-left: 46px;
  display: inline-block;
}
.objectives_text {
  padding: 8px 0;
  font-size: 22px;
}
.experience_wrapper {
  position: relative;
  padding-left: 80px;
  margin-bottom: 20px
}
.experience_head {
  padding-top: 8px;
  font-size: 22px;
  text-align: justify;
  height: 36px;
}
.experience_head::after {
  content: "";
  display: inline-block;
  width: 100%;
}
.experience_head span {
  display: inline-block;
}
.experience_info {
  margin: 6px 0;
  font-size: 22px;
}
.experience_left {
  display: inline-block;
  position: absolute;
  top: 0;
}
.experience_right {
  display: inline-block;
  margin-left: 260px;
}
.exp_bold {
  font-weight: 600;
}
.interests_section {
  padding-left: 20px;
  list-style-type: square;
}
.interests_info {
  margin: 14px 0;
  font-size: 22px;
}
.skill_row {
  position: relative;
  font-size: 22px;
  padding-left: 80px;
}
.skill_level {
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 330px;
  top: 0;
  text-align: left;
}
.lang_row {
  position: relative;
  font-size: 22px;
}
.lang_level {
  display: inline-block;
}
.star_icon {
  margin-right: 0px;
}
.star_icon_l * {
  fill: ${lighterColor};
}
.skill_meter {
  height: 10px;
}
.user_img_wrapper {
  width: 82%;
  padding-bottom: 82%;
  margin: 0 auto;
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
  border: 4px solid rgb(235, 235, 234);
}

`;

export default styles;
