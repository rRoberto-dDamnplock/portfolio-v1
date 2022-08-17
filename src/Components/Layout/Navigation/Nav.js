import React, { useState } from "react";
import classes from "./Nav.module.css";
function Nav(props) {
  const [divState, setDivState] = useState(false);

  function navClickHandler() {
    console.log('SET div state')
    setDivState((prevDivState) => !prevDivState);
  }
  return (<>

    <div className={classes.nav}>
       
    {divState && (<div className={classes.nav_modal}>
      
        <div className={classes.nav_wrapper}>
        <a href="#" className={classes.close} onClick={navClickHandler}></a>
          <a>Rajaonarivony Roberto</a>
          <a>Currently Learning</a>
          <a>Skills/Tech</a>
          <a>Tools</a>
          <a>Contact me</a>
          <a>More...</a>
        </div>
      </div>
      
      )}
      {!divState && ( 
       
      <div className={classes.burger} onClick={navClickHandler}>
       
      <div className={classes['strip burger-strip-3']} >
          <div>-</div>
          <div>-</div>
          <div>-</div>
      </div>


  </div>)}
     
    </div>
    </>
  );
}

export default Nav;
