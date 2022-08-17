import React from "react";
import portFolioImg from "../../../assets/portfolio-image.png";
import classes from "./SectionHeader.module.css";
function SectionHeader(props) {
  return (
    < div className={classes.headerWrap}>
      <div className={classes.nameWrapper}>
        <h1 style={{textAlign:'center'}}>Rajaonarivony Tafita</h1>
        <h1 style={{textAlign:'center'}} className={classes.greyText}>Roberto</h1>
      </div>
      <img src={portFolioImg} alt="portfolio-image" className={classes.img} />
      <div className={classes.enthusiast}>
        <h1>A science but mostly tech enthusiast.</h1>
        <h2>I started learning software developement on my own when I was 16 years old. And since then I have found it to be both my therapy and insanity.</h2>
      </div>
    </div>
  );
}

export default SectionHeader;
