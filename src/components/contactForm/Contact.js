import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./__style__/index.css";


export default function Contact() {
    const form = useRef();
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
  
        if (validateForm()) { 
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
        }
    };

    const validateForm = () => {
        const name = form.current.user_name.value;
        const company = form.current.company_name.value;
        const email = form.current.user_email.value;
        const phone = form.current.user_phone.value;
        const message = form.current.message.value;

        if (!name || !company || !email || !phone || !message) {
          setMessage('Por favor, completa todos los campos.');
          return false;
        }
    
        if (!/^[A-Za-z\s]+$/.test(name)) {
          setMessage('Nombre solo debe contener letras y espacios.');
          return false;
        }
    
        if (!/^[A-Za-z\s]+$/.test(company)) {
          setMessage('Compañía solo debe contener letras y espacios.');
          return false;
        }
    
        if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
          setMessage('Correo electrónico no válido.');
          return false;
        }
    
        if (!/^\d+$/.test(phone)) {
          setMessage('Teléfono solo debe contener números.');
          return false;
        }
    
        return true;
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