import React, { useReducer } from "react";
import classes from "./Tools.module.css";
// tools img
import vs from "../../../../assets/vs.png";
import figma from "../../../../assets/figma.png";
import postman from "../../../../assets/postman.png";
import git from "../../../../assets/git.png";
// environment image
import windows from "../../../../assets/windows.png";
import mac from "../../../../assets/mac.png";
import linux from "../../../../assets/linux.png";

const initialToolState = {
  toolState: false,
  environmentState: false,
};

function toolReducer(state, action) {
  switch (action.type) {
    case "TOOL":
      console.log("TOOL runninb");
      return { toolState: !state.toolState };
    case "ENV":
      console.log("ENV running");
      return { environmentState: !state.environmentState };
    default:
      throw new Error();
  }
}

function Tools(props) {
  const [currToolState, toolDispatcher] = useReducer(
    toolReducer,
    initialToolState
  );

  const toolClickHandler = () => {
    toolDispatcher({ type: "TOOL" });
  };

  const envClickHandler = (event) => {
      event.stopPropagation();
    toolDispatcher({ type: "ENV" });
    
  };
  return (
    <div>
      <h1>Tools/Enverironment</h1>

      <button className={classes.toolsButton} >
        <p onClick={toolClickHandler}>Tools</p>

        {currToolState.toolState && (
          <div className={classes.toolDiv}>
            <img className={classes.toolImg} src={vs} alt="front end skills" />
            <img
              className={classes.toolImg}
              src={figma}
              alt="front end skills"
            />
            <img
              className={classes.toolImg}
              src={postman}
              alt="front end skills"
            />
            <img className={classes.toolImg} src={git} alt="front end skills" />
          </div>
        )}

        {currToolState.toolState && (
          <div
            className={classes.envButton}
            role="button"
            type="button"
            onClick={envClickHandler}
          >

            <p> Enverironment </p>
          

            {currToolState.environmentState && (
              <div className={classes.envImg}>
                <img
                  className={classes.toolImg}
                  src={windows}
                  alt="front end skills"
                />
                <img
                  className={classes.toolImg}
                  src={mac}
                  alt="front end skills"
                />
                <img
                  className={classes.toolImg}
                  src={linux}
                  alt="front end skills"
                />
              </div>
            )}
          </div>
    )}
      </button>
    </div>
  );
}

export default Tools;
