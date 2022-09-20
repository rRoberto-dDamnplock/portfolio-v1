import React, {useState} from 'react';
import classes from './Contact.module.css'
import useInput from '../../../hooks/use-input';


const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => value.includes('@');



function Contact(props) {

      const {
            value: nameValue,
            isValid: nameIsValid,
            hasError: nameHasError,
            valueChangeHandler: nameChangeHandler,
            inputBlurHandler: nameBlurHandler,
            reset: resetName,
          } = useInput(isNotEmpty);
          const {
            value: emailValue,
            isValid: emailIsValid,
            hasError: emailHasError,
            valueChangeHandler: emailChangeHandler,
            inputBlurHandler: emailBlurHandler,
            reset: resetEmail,
          } = useInput(isEmail);

          const {
            value: objectValue,
            isValid: objectIsValid,
            hasError: objectHasError,
            valueChangeHandler: objectChangeHandler,
            inputBlurHandler: objectBlurHandler,
            reset: resetObject,
          } = useInput(isNotEmpty);

          const {
            value: messageValue,
            isValid: messageIsValid,
            hasError: messageHasError,
            valueChangeHandler: messageChangeHandler,
            inputBlurHandler: messageBlurHandler,
            reset: resetMessage,
          } = useInput(isNotEmpty);



      const [contactState, setContactState] = useState(false)


      const submitFormHandler = (e) => {
            e.preventDefault()

console.log(nameValue)
console.log(emailValue)
console.log(objectValue)
console.log(messageValue)

            resetName();
            resetEmail()
            resetObject();
            resetMessage()

      }

function contactClickHandler () {
      console.log('clicked')
      setContactState((prevContactState) => !prevContactState);

}



let formIsValid = false;

if(emailIsValid && nameIsValid && objectIsValid && messageIsValid){
      formIsValid= true;
}

// const completedClass = task.completed ? styles.isCompleted : '';

// return (
//     <div className={`${styles.task} ${completedClass}`}>
//     </div>
// )
      return (
            <>
            <div className={classes.contact_wrap} data-aos="fade-right" id='contact_me'>
                  <h1> Get in Touch</h1>
                  <h2>As mentionned earlier, I am open for job opportunities of projects. So if you would like to discuss more...</h2>
                  <button className={classes.contactBtn} onClick={contactClickHandler}>Get in touch</button>
                  { contactState && (
                 
                        <form className={classes.contact_form} onSubmit={submitFormHandler}>
                              <label>Name</label>
                              <input type='name'
                           
                              value={nameValue}
                              onChange={nameChangeHandler}
                              onBlur={nameBlurHandler}
                              className='fControl'
                              />
                              <label>Email/Contact</label>
                              <input type='email'   
                              
                              value={emailValue}
                              onChange={emailChangeHandler}
                              onBlur={emailBlurHandler}

                              />
                              <label>Object</label>
                              <input type='text'  
                           
                               value={objectValue}
                               onChange={objectChangeHandler}
                               onBlur={objectBlurHandler}

                                ></input>
                              <label>Message</label>
                              <textarea 
                              value={messageValue}
                              onChange={messageChangeHandler}
                              onBlur={messageBlurHandler}
                               rows="3" cols="auto"
                              ></textarea>
                              <button className={classes.message_btn} disabled={!formIsValid} type='submit'>Submit message</button>
                        </form>
                  )}
            </div>
            </>
      );
}

export default Contact;