import React from "react";
import classes from "./Nav.module.css";
function Nav(props) {
  return (
      <div className={classes.burger}>
      <div className={classes['strip burger-strip-3']}>
          <div></div>
          <div></div>
          <div></div>
      </div>
  </div>
      //  <div className={classes['main-image']}></div>
  );
}

export default Nav;
