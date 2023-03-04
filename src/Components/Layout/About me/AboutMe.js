import React, { useState } from "react";
import classes from "./AboutMe.module.css";
function AboutMe(props) {
  const [pState, setPState] = useState(false);
  function pClickHandler() {
    setPState((prevPState) => !prevPState);
  }
  return (
    <div className={classes.abt_wrap} data-aos="fade-left">
      <h1>About Me/Experience</h1>
      {!pState && (
        <h2 className={classes.about_me}>
              I started teaching myself how to code at 16, after being introduced to Java in high school. While I didn't pursue Java extensively,
          <p onClick={pClickHandler}>read more...</p>
        </h2>
      )}

      {pState && (
        <h2 className={classes.about_me}>
       I started teaching myself how to code at 16, after being introduced to Java in high school. While I didn't pursue Java extensively, I developed a passion for Python and JS, and now confidently create modern software and applications. Although my experience is primarily in solo projects and some collaborations with family and friends, I'm eager to apply my skills to professional projects and open to new opportunities.<p onClick={pClickHandler}>read less...</p>
        </h2>
      )}
    </div>
  );

  //       As i have mentionned above, I started teaching myself how to code since I was 16 years old. I was introduced to coding in highschool when we learned Java for computer class. However, I did not pursue Java as profoundly as I did in python and JS. Now i can confidently code for moder softwares and web sites. ...
  // My experience as a developer are most of the times self teaching and solo projects. However, I have built some collaborative projects with my cousin, friends and sister.
  // As for my professional experience, I haven’t had yet, though I believe my skills could positevely enhance work projects, so I am open for opportunities.
}

export default AboutMe;
