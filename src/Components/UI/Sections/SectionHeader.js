import React from "react";
import portFolioImg from "../../../assets/portfolio-image.png";
import classes from "./SectionHeader.module.css";
function SectionHeader(props) {
  return (
    <div className={classes.headerWrap}>
      <div className={classes.nameWrapper}>
        <h1 style={{ textAlign: "center" }}>Rajaonarivony Tafita</h1>
        <h1 style={{ textAlign: "center" }} className={classes.greyText}>
          Roberto
        </h1>
      </div>
      <img src={portFolioImg} alt="porfolio" className={classes.img} />
      <div className={classes.enthusiast}>
        <h1 style={{ textAlign: "center" }}>
          A science but mostly tech enthusiast.
        </h1>
        <h2>
        As a coding enthusiast, I have a passion for critical thinking and thrive on new challenges. I am a self-taught developer, always striving to improve and better my skills with each line of code.
        </h2>
      </div>
    </div>
  );
}

export default SectionHeader;
