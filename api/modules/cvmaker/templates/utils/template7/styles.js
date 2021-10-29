const styles = (mainColor, lighterColor, pageNo) => `
.pb_before { page-break-before: always !important; } /* Breaks page before of element */
.pb_after  { page-break-after: always !important; } /* Breaks page after of element */
.pbi_avoid { page-break-inside: avoid !important; } /* Avoid breaks page in element */
.color_main_txt {
  color: ${mainColor};
}
.color_main_bg {
  background-color: ${mainColor};
}
.color_main_svg * {
  fill: ${mainColor};
}
.doc_title {
  position: absolute;
  top: 0;
  width: 100%;
  padding: 18px;
  text-align: center;
  font-size: 44px;
  letter-spacing: 2px;
  font-weight: 600;
  color: white;
}
html {
  zoom: 0.4;
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  width: 30%;
  display: inline-block;
  height: ${pageNo * 100}%;
  position: absolute;
  top: 0;
  left: 0;

}
.right {
  padding-top: 70px !important;
  width: 75%;
  margin: 0 0 0 auto;

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
}
.section_head .line {
  display: inline-block; 
  margin-left: 20px; 
  height: 4px; 
  width: 100%;
  background-color: red;
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
  /* padding-left: 46px; */
  display: inline-block;
}
.objectives_text {
  padding: 8px 0;
  font-size: 22px;
}
.experience_wrapper {
  position: relative;
  padding-left: 20px;
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
  margin-left: 280px;
}
.exp_bold {
  font-weight: 600;
}
.interests_section {
  padding-left: 36px;
  list-style-type: square;
}
.interests_info {
  margin: 14px 0;
  font-size: 22px;
}
.skill_row {
  position: relative;
  font-size: 22px;
}
.skill_level {
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 300px;
  top: 0;
  text-align: left;
}
.lang_level {
  display: inline-block;
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
.skill_meter {
  height: 10px;
}
.user_img_wrapper {
  width: 58%;
  padding-bottom: 58%;
  overflow: hidden;
  position: relative;  border-radius: 50%;

}
.user_img {
  display: inline-block;
  position: absolute;
  width: 100%;
  border: 8px solid white;border-radius: 50%;
}

`;

export default styles;
