import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    window.alert("Thankyou for your feedback. \nHave a nice day ❤.");

    emailjs.sendForm('service_2y24t5g', 'template_2gpy8ly', form.current, '8sH3i4bVXXbpdpkfh')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className='c-container'>
      <div className='contact' id='Contact'>
        <div className='c-left'>
          <span>Get in Touch</span>
          <span>Contact Me</span>
        </div>

        <div className="c-right">
          <form ref={form} className='contact-form' onSubmit={sendEmail}>
            <label>Name:</label>
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