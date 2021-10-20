const styles = (mainColor, lighterColor, darkerColor) => `
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
  height: 2005px;
}
.left {
  background-color: rgb(232, 233, 232);
  box-shadow: inset -5px 0 2px #48494b;
  display: inline-block;
  width: 30%;
  display: table-cell;
  vertical-align: top;    
  padding-top: 180px !important;
}
.right {
  display: inline-block;
  height: 100%;
  padding-top: 80px !important;
}
.section_head {
  padding: 8px 0;
  margin: 8px 0;
  font-size: 29px;
  font-weight: 500;
  text-align: left;
  letter-spacing: 2px;
}
.left_head {
  margin-top: 16px;
  font-size: 28px;
  text-transform: none;
}
.left_section_icon {
  width: 28px;
  height: 28px;
  display: inline-block;
  position: absolute;
  top: 5px;
}
.section_wrapper {
  position: relative;
}
.data_wrapper {
  display: inline-block;
}
.personal_data {
  font-size: 20px;
}
.personal_data div {
  margin: 2px 0;
}
.objectives_text {
  padding: 8px 0;
  font-size: 22px;
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
.exp_bold {
  font-weight: 600;
}
.interests_info {
  margin: 14px 0;
  font-size: 22px;
}
.interests_section {
  padding-left: 20px;
  list-style-type: square;
}
.skill_row {
  position: relative;
  font-size: 22px;
}
.skill_level {
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 260px;
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
  border-radius: 5px;
}
.round-bottom {
  position: absolute;
  z-index: 0;
  overflow: hidden;
  width: 200%;
  margin-bottom: -50px;
  left: -50%;
  top: -32px;
  border-radius: 53%/0 0 200px 200px;
  height: 188px;
}
.round-bottom-2 {
  top: -16px;
  background-color: ${darkerColor};
}
.user_img_wrapper {
  width: 116px;
  padding-bottom: 116px;
  overflow: hidden;
  position: relative;
}
.user_img {
  display: inline-block;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-right: 1px solid ${mainColor};
}
.top_banner {
  height: 120px;
  position: absolute;
  z-index: 10;
  top: 30px;
  left: 30px;
  width: calc(100% - 60px);
  border: 2px solid ${mainColor};
  background-color: white;
  display: table;
  overflow: hidden;
}
.banner_img {
  display: table-cell;
  width: 118px;
  height: 118px;
}
.banner_name {
  display: table-cell;
  font-size: 48px;
  font-weight: 600;
  margin: 0 auto;
  vertical-align: middle;
  text-align: center;
}
`;

export default styles;
