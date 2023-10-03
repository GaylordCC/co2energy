import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./__style__/index.css";


export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1fs0vwv', 'template_pcsyv6r', e.target, '93S_coT7nBbX8AcQ8')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <form className='form' ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input type="text" name="user_name" />
            <label>Compañia</label>
            <input type="text" name="company_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Teléfono</label>
            <input type="number" name="user_phone" />
            {/* <label>Asunto</label> */}
            {/* <input type="text" name="message_subject" /> */}
            <label>Mensaje</label>
            <textarea name="message" />
            <input className='pointer' type="submit" value="Enviar" />
        </form>
    )
}