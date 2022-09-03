import React, {useState} from 'react';
import classes from './Contact.module.css'
function Contact(props) {
      const [contactState, setContactState] = useState(false)

function contactClickHandler () {
      console.log('clicked')
      setContactState((prevContactState) => !prevContactState);
}

      return (
            <>
            <div className={classes.contact_wrap} data-aos="fade-right">
                  <h1> Get in Touch</h1>
                  <h2>As mentionned earlier, I am open for job opportunities of projects. So if you would like to discuss more...</h2>
                  <button className={classes.contactBtn} onClick={contactClickHandler}>Get in touch</button>
                  { contactState && (
                  <div className={classes.contactForm_wrap}>
                        <form className={classes.contact_form}>
                              <label>Name</label>
                              <input type='name'></input>
                              <label>Email/Contact</label>
                              <input type='email'></input>
                              <label>Object</label>
                              <input type='text'></input>
                              <label>Message</label>
                              <textarea  rows="4" cols="50"></textarea>
                        </form>
                  </div>)}
            </div>
            </>
      );
}

export default Contact;