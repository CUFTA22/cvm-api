const styles = (mainColor) => `
.color_main_bg {
  background-color: ${mainColor};
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
.user_name {
  font-size: 46px;
  text-transform: uppercase;
  display: inline-block;
  height: 80px;
  font-weight: bold;
  position: relative;
  bottom: 22px;
}
.section_head {
  padding: 8px 16px;
  margin: 8px 0;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: left;
}
.section_icon {
  width: 26px;
  height: 26px;
  margin-right: 14px;
  margin-bottom: 6px;
}
.personal_row {
  margin: 6px 0;
  height: 30px;
  position: relative;
  display: flex;
  align-items: center;
  font-size: 22px;
}
.personal_data {
  position: absolute;
  left: 220px;
}
.objectives_text {
  padding: 8px 16px;
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
  font-size: 20px;
}
.exp_bold {
  font-weight: 800;
}
.interests_info {
  margin: 14px 0;
  font-size: 22px;
}
.interests_info .personal_info {
  display: inline-block;
  margin: 0 70px 20px 0;
}
.skill_info {
  display: inline-block;
  margin: 8px 26px 0 0;
  font-size: 22px;
  display: flex;
  flex-direction: column;
}
.user_img_wrapper {
  display: inline-block;
  width: 80px;
  padding-bottom: 80px;
  margin-right: 20px;
  overflow: hidden;
  position: relative;
  border-radius: 50%;
}
.user_img {
  display: inline-block;
  position: absolute;
  width: 100%;
}
.cv_mark {
  color: white;
  font-size: 42px;
  position: absolute;
  height: fit-content;
  top: 0;
  right: 30px;
  padding: 14px 20px;
}
`;

export default styles;
