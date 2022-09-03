import React from "react"
import './Switch.css';
// import classes from './Switch.module.css'
function Switch (props) {
    return (
        <>
         {/* <label>Dark mode</label> */}
        <div class="theme-switch-wrapper">
       
       <label className="theme-switch" for="checkbox">
  
    <input type="checkbox" id="checkbox" onChange={props.onChange}/>

    <div class="slider round"></div>
   
  </label>

  </div>
   </>
    )
}


export default Switch