// import React from 'react';
import classes from './Footer.module.css'
// import github from '../../../assets/github.png'
// import download from '../../../assets/download.png'
// // import linkedin from 
// import discord from '../../../assets/discord.png'

function Footer(props) {
      return (
            <div className={classes.footer} id='more'>
                  <div className={classes.sc_div}>
               
                  <a rel='noreferrer' href='https://docs.google.com/document/d/1JgY27k-cTmrxOrWzq2qT4lPYsUiNzGxW6YyeuWR4Ft4/edit#' target='blank'>
                       
                        <img src={require(`../../../assets/download-${props.checked}.png`)} className={classes.sc_img} id='image_footer'alt='social media buttons'/>
                  </a>
                 
                  <a rel='noreferrer' href='https://github.com/rRoberto-dDamnplock' target="_blank">
                        <img src={require(`../../../assets/github-${props.checked}.png`)} className={classes.sc_img} alt='social media buttons'/>
                  </a>
                  <a rel='noreferrer' href='https://www.linkedin.com/in/roberto-rajaonarivony-56405122a' target='black'>
                        <img src={require(`../../../assets/linkedin-${props.checked}.png`)} className={classes.sc_img} alt='social media buttons'/>
                  </a>
                  {/* <a rel='noreferrer'>
                        <img src={require(`../../../assets/discord-${props.checked}.png`)} className={classes.sc_img} alt='social media buttons'/>
                  </a> */}
                  </div>
                  <div className={classes.copyright}>
                 <p>Designed and built by </p> 
                 <p>Rajaonarivony Tafita Sanchez Roberto</p>
                 <p> ⓒ Copyright 2023</p>
                 </div>
                 {/* <p></p> */}
                 
            </div>
      );
}

export default Footer;