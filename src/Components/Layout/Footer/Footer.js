import React from 'react';
import classes from './Footer.module.css'
import github from '../../../assets/github.png'
import download from '../../../assets/download.png'
import linkedin from '../../../assets/linkedin.png'
import discord from '../../../assets/discord.png'
function Footer(props) {
      return (
            <div className={classes.footer}>
                  <div className={classes.sc_div}>
                  <a>
                        <img src={download} className={classes.sc_img} alt='social media buttons'/>
                  </a>
                  <a>
                        <img src={github} className={classes.sc_img} alt='social media buttons'/>
                  </a>
                  <a>
                        <img src={linkedin} className={classes.sc_img} alt='social media buttons'/>
                  </a>
                  <a>
                        <img src={discord} className={classes.sc_img} alt='social media buttons'/>
                  </a>
                  </div>
                  <div className={classes.copyright}>
                 <p>Designed and built by </p> 
                 <p>Rajaonarivony Tafita Sanchez Roberto</p>
                 <p>Copyright 2022</p>
                 </div>
                 {/* <p></p> */}
                 
            </div>
      );
}

export default Footer;