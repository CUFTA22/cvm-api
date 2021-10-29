const styles = (mainColor, pageNo) => `
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
.left {
  color: rgb(251, 251, 251);
  width: 30%;
  display: inline-block;
  height: ${pageNo * 100}%;
  position: absolute;
  top: 0;
  left: 0;
}
.right {
  width: 75%;
  margin: 0 0 0 auto;
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
.skill_row {
  position: relative;
  font-size: 22px;
}
.skill_level {
  width: 300px;
  height: 10px;
  background-color: rgb(235, 235, 234);
  border-radius: 8px;
  position: absolute;
  left: 300px;
  top: 50%;
  transform: translateY(-50%);
}
.lang_level {
  display: inline-block;
}
.skill_meter {
  height: 10px;
  border-radius: 5px;
}
.user_img_wrapper {
  width: 82%;
  padding-bottom: 82%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;  
  border-radius: 50%;
}
.user_img {
  position: absolute;
  width: 100%;
  border: 2px solid rgb(235, 235, 234);border-radius: 50%;
}
`;

export default styles;
