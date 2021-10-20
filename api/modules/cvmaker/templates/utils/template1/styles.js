const styles = (mainColor, lighterColor) => `
html {
  zoom: 0.7;
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
  padding: 8px 16px; margin: 8px 0; font-size: 20px; background-color: #F0F1F0 !important; text-align: left !important;
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
  position: absolute; left: 220px;
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
.exp_bold {
  font-weight: 800;
}
.interests_info {
  margin: 14px 0; font-size: 22px;
}
.skill_info {
  display: inline-block; margin: 8px 26px 0 0; font-size: 22px; display: flex; flex-direction: column;
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
  font-size: 44px;
  font-size: 50px;
  display: inline-block;
  height: 80px;
  font-weight: 700;
  position: relative;
  bottom: 22px;
  color: ${mainColor};
}
`;

export default styles;
