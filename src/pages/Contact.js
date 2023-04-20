import React, { useRef,} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_65a9nyr',
     'template_8o0ubcp', 
     form.current,
     'K72gwKshXFwmTFfx3')

    .then((result) => {
        alert('Message successfully sent!')
        window.location.reload(false)

        console.log(result.text);
    }, 
    (error) => {
          alert('Oopsieee! failed to send a message.Try again later :) ')
          window.location.reload()
          
        console.log(error.text);
    });
  }
  return (
    <div className="container">
      <div className='contt'>
      <h2>Contact Us</h2>
      
      <form ref={form} onSubmit={sendEmail}>
        
        <div className="form-control">

          <label >Name :  </label>
          <input
            type="text"
            name="user_name"
          />

        </div>


        <div className="form-control">

          <label >Email :  </label>
          <input
            type="email"
            name="user_email"
          />

        </div>


        <div className="form-control">

          <label >Query: </label>
          <textarea name="message"/>

        </div>

        <button className='sub' type="submit">Submit</button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
