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
     
      return { toolState: !state.toolState };
    case "ENV":
     
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

  // const envClickHandler = (event) => {
  //   event.stopPropagation();
  //   toolDispatcher({ type: "ENV" });
  // };
  return (
    <div className={classes.tool_wrap} data-aos="fade-right" id='tools'>
      <h1>Tools/Environment</h1>

      <button className={classes.toolsButton} onClick={toolClickHandler}>
        Tools

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
          <div className={classes.envButton} role="button" type="button">
            <p> Enverironment </p>

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
          </div>
        )}
      </button>
    </div>
  );
}

export default Tools;
