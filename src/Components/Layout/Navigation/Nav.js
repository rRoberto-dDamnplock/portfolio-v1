import React, { useState } from "react";
import classes from "./Nav.module.css";
import Modal from "../../UI/Modal";

function Nav(props) {
  const [divState, setDivState] = useState(false);

  function navClickHandler() {
    
    setDivState((prevDivState) => !prevDivState);
  }
  return (<>

    <div className={classes.nav}>
    


    {divState && (<div className={classes.nav_modal}>
      <Modal onClose={navClickHandler}>
      
        <div className={classes.nav_wrapper}>
        <a href="#" className={classes.close} onClick={navClickHandler}></a>
          <a href='#currently_learning' onClick={navClickHandler}>Currently Learning</a>
          <a href='#skills_tech' onClick={navClickHandler}>Skills/Tech</a>
          <a href='#tools' onClick={navClickHandler}>Tools</a>
          <a href='#contact_me' onClick={navClickHandler}>Contact me</a>
          <a href='#more' onClick={navClickHandler}>More...</a>
        </div>
        </Modal>
      </div>
      
      )}
      {!divState && ( 
       <div>
      <div className={classes[`burger-${props.checked}`]} onClick={navClickHandler}>
     
      <div className={classes['strip burger-strip-3']} >
          <div className={classes.dash}>-</div>
          <div className={classes.dash}>-</div>
          <div className={classes.dash}>-</div>
      </div>

    
  </div>
  </div>)}
  
    </div>
   
    </>
  );
}

export default Nav;
