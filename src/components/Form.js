import "./FormStyles.css"
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Form () {

  const form = useRef();

  const [resultSendEmail, setResultSendEmail ] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0mi3aa8', 'template_nqs4exi', form.current, 'KFlH3thsHkyrK_Cmb')
      .then((result) => {
          console.log(result.text);
          setResultSendEmail("Email byl úspěšně odeslán");
      }, 
      (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <div className="form">
      <p>{resultSendEmail}</p>
      <form ref={form} onSubmit={sendEmail}>
        <label>Vaše jméno:</label>
        <input type="text" name="user_name"></input>
        <label>Email:</label>
        <input type="text" name="user_email"></input>
        <label>Předmět:</label>
        <input type="text" name="subject"></input>
        <label>Zpráva:</label>
        <textarea rows="6" placeholder="Sem napiště Vaši zprávu:" name="message"/>
        <button className="btn">Odeslat</button>
      </form>
    </div>
  )
};

export default Form;