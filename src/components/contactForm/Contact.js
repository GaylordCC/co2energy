import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./__style__/index.css";


export default function Contact() {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_1fs0vwv', 'template_pcsyv6r', e.target, '93S_coT7nBbX8AcQ8')
        .then((result) => {
            setMessage('Mensaje enviado con éxito');
            form.current.reset();
            console.log(result.text);
            console.log("message sent");
        }, (error) => {
            setMessage('Error al enviar el mensaje');
            console.log(error.text);
        });
    };


    return (
        <div>
            {message && (
            <div className="modal">
                <div className="modal-content">
                <span className="close" onClick={() => setMessage('')}>&times;</span>
                <p>{message}</p>
                </div>
            </div>
            )}
            <form className='form' ref={form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Compañia</label>
                <input type="text" name="company_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Teléfono</label>
                <input type="number" name="user_phone" />
                <label>Mensaje</label>
                <textarea name="message" />
                <input className='pointer' type="submit" value="Enviar"/>
            </form>
        </div>
    )
}