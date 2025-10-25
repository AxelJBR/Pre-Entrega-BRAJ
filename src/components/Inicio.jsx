import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCreditCard, faLock } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Destacados from './Destacados';

const Inicio = () => {
  return (
    <main className="container my-4">
      <h2>¡Bienvenido a Dimensión Historieta!</h2>
      <p>
        En <strong>Dimensión Historieta</strong> celebramos el arte y la narrativa gráfica en todas sus formas. 
        Somos un espacio dedicado a los amantes del cómic, manga y la historieta nacional, donde podés descubrir títulos clásicos, ediciones especiales y nuevas joyas del mundo ilustrado.
        Nuestro objetivo es acercarte a historias que trascienden generaciones y culturas, brindándote una experiencia única tanto si sos un lector experimentado como si recién comenzás este viaje.
      </p>
      <p>
        Navegá nuestro <Link to="/catalogo">catálogo</Link> para encontrar tu próxima lectura, 
        respondé tus dudas en la sección de <Link to="/faq">preguntas frecuentes</Link>, 
        o <Link to="/contacto">contactanos</Link> si querés saber más.
        ¡Gracias por ser parte de esta dimensión donde cada viñeta cuenta!
      </p>
      
      <p className="fw-bold fs-5 mt-4">Productos Destacados</p>
      <Destacados />

      <section className="mt-4">
        <p className="mb-3 fs-6">
          <FontAwesomeIcon icon={faTruck} className="me-2" />
          ENVIAMOS A TODO EL PAÍS
        </p>
        <p className="mb-3 fs-6">
          <FontAwesomeIcon icon={faCreditCard} className="me-2" />
          TODOS LOS MEDIOS DE PAGO DISPONIBLES
        </p>
        <p className="mb-3 fs-6">
          <FontAwesomeIcon icon={faLock} className="me-2" />
          COMPRAS 100% SEGURAS Y CON GARANTÍA
        </p>
        <p className="mb-3 fs-6">
          <FontAwesomeIcon icon={faWhatsapp} className="me-2" />
          CONSULTA TUS DUDAS AL +54 9 11 1234-5678
        </p>
      </section>
    </main>
  );
};

export default Inicio;