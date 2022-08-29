import './Contact.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [isDone, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2y24t5g', 'template_2gpy8ly', form.current, '8sH3i4bVXXbpdpkfh')
      .then((result) => {
        console.log(result.text);
        setDone(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  if (isDone === true) {
    window.alert("Thankyou for your feedback. \nHave a nice day ❤.");
    window.location.reload();

  }

  return (
    <div className='c-container'>
      <div className='contact' id='Contact'>
        <div className='c-left'>
          <span>Get in Touch</span>
          <span>Contact Me</span>
        </div>

        <div className="c-right">
          <form ref={form} className='contact-form' onSubmit={sendEmail}>
            <labe>Name:</labe>
            <input type="text" name='user_name' placeholder='name..' className='user' id='user_name' required />
            <label>E-mail:</label>
            <input type="email" name='user_email' placeholder='e-mail..' className='user' required ></input>
            <label >Message:</label>
            <textarea name="message" id="" cols="30" rows="10" placeholder='message..' className='user' required ></textarea>
            <input type="submit" value="Send" className='button send-button' />
          </form>
        </div>
      </div>
    </div>
  )
}
export default Contact;