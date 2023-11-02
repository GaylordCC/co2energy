import React, { useState, useEffect } from 'react';
import './MobileMenu.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [key, setKey] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setKey(prev => prev + 1); // Incrementa la clave para forzar la re-renderización
  };

  useEffect(() => {
    if (!isOpen) {
      setKey(0); // Resetea la clave cuando se cierra el menú
    }
  }, [isOpen]);

  return (
    <div>
      <div className={`hamburger ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`mobile-menu ${isOpen ? 'is-open' : ''}`} key={key}>
        <a href="#home" className="menu-item">Inicio</a>
        <a href="#services" className="menu-item">Servicios</a>
        <a href="#contact" className="menu-item">Contacto</a>
      </div>
    </div>
  );
};

export default MobileMenu;
