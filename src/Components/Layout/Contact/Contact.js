import React from 'react';
import classes from './Contact.module.css'
function Contact(props) {
      return (
            <div className={classes.contact_wrap} data-aos="fade-right">
                  <h1> Get in Touch</h1>
                  <h2>As mentionned earlier, I am open for job opportunities of projects. So if you would like to discuss more...</h2>
                  <button className={classes.contactBtn}>Get in touch</button>
                  
            </div>
      );
}

export default Contact;