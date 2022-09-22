import React, { useReducer } from "react";
import classes from "./Skills.module.css";
/// front end images
import html from "../../../assets/html.png";
import css from "../../../assets/css.png";
import js from "../../../assets/js.png";
import bootstrap from "../../../assets/bootstrap.png";
import react from "../../../assets/atom.png";
import next from "../../../assets/next.png";
/// design images
import figma from "../../../assets/figma.png";
/// back end images
import mongo from "../../../assets/coca-leaves.png";
import node from "../../../assets/node-js.png";
import sql from "../../../assets/sql-server.png";
import express from "../../../assets/express.png";
import firebase from "../../../assets/firebase.png";
// other
import git from '../../../assets/git.png'
import github from '../../../assets/github-light.png'
import jquery from '../../../assets/jquery.png'
import materialUI from '../../../assets/materialUI.png'
import python from '../../../assets/python.png'

const defaultDivState = {
  front_end: false,
  design: false,
  back_end: false,
  other: false,
};

function divReducer(state, action) {
      switch(action.type){
            case 'FRONT':
                  return {front_end: !state.front_end}
            case 'DESIGN': 
                  return {design: !state.design}
            case 'BACK':
                  return {back_end: !state.back_end}
            case 'OTHER': 
                  return {other: !state.other}
            default: 
            throw new Error()

      }
//   if (action.type === "FRONT") {
//     let updatedItem = state.front_end;
//     return { front_end: !updatedItem };
//   }
}

function Skills(props) {
  const [currDivState, divDispatcher] = useReducer(divReducer, defaultDivState);
  // const [divState, setDivState] = useState(false)

  const fclickDivHandler = () => {
    divDispatcher({ type: "FRONT" });
  };

  const dclickDivHandler = () => {
    divDispatcher({ type: "DESIGN" });
  };

  const bclickDivHandler = () => {
    divDispatcher({ type: "BACK" });
  };

  const oclickDivHandler = () => {
    divDispatcher({ type: "OTHER" });
  };

  return (
    <div className={classes.skill_wrap} data-aos="fade-right" id='skills_tech'>
      <h1>Skills/Technologies</h1>
      <div className={classes.skills} >
        <button className={classes["skill-button-light"]} onClick={fclickDivHandler}>
          Front End
          {currDivState.front_end && (
            <div className={classes.bEnd}>
              <img
                className={classes.skillImg}
                src={html}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={css}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={js}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={bootstrap}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={react}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={next}
                alt="front end skills"
              />
            </div>
          )}
        </button>
        <button className={classes["skill-button"]} onClick={dclickDivHandler}>
          Design
          {currDivState.design && (
            <div className={classes.fEnd}>
              <img
                className={classes.skillImg}
                src={figma}
                alt="front end skills"
              />
            </div>
          )}
        </button>
        <button className={classes["skill-button-light"]} onClick={bclickDivHandler}>
          Back end   {currDivState.back_end && (
            <div className={classes.fEnd}>
              <img
                className={classes.skillImg}
                src={node}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={sql}
                alt="front end skills"
              />

              <img
                className={classes.skillImg}
                src={mongo}
                alt="front end skills"
              />

              <img
                className={classes.skillImg}
                src={firebase}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={express}
                alt="front end skills"
              />
            </div>
          )}
        </button>
        <button className={classes["skill-button"]} onClick={oclickDivHandler}>
          Other
          {currDivState.other && (
            <div className={classes.fEnd}>
              <img
                className={classes.skillImg}
                src={git}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={github}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={jquery}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={materialUI}
                alt="front end skills"
              />
              <img
                className={classes.skillImg}
                src={python}
                alt="front end skills"
              />
            
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Skills;
