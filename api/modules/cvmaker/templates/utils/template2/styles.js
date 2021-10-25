const styles = (mainColor, lighterColor) => `
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
  font-family: "Arial", sans-serif;
}
.user_name {
  font-size: 50px;
  display: inline-block;
  height: 80px;
  font-weight: 700;
  position: relative;
  bottom: 22px;
  color: ${mainColor};
}
.section_head {
  padding: 8px 16px;
  margin: 8px 0;
  font-size: 34px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  color: ${mainColor};
}
.section_icon {
  width: 30px;
  height: 30px;
  margin-top: 4px;
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
  width: 12%;
  display: table-cell;
  font-weight: 200;
  text-align: right;
  margin-right: 30px;
}
.row_data {
  width: 80%;
  margin-left: 70px;
}
.objectives_text {
  padding: 8px 16px;
  font-size: 22px;
  font-weight: 200;
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
.experience_left {
  display: inline-block;
  position: absolute;
  top: 0;
}
.experience_right {
  display: inline-block;
  margin-left: 240px;
}

.exp_bold {
  font-weight: 800;
}
.interests_info {
  margin: 18px 0;
  font-size: 22px;
  font-weight: 200;
}
.skill_info {
  display: inline-block;
  margin: 8px 26px 0 0;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  font-weight: 300;
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
}`;

export default styles;
