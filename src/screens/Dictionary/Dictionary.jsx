

import React, { useState } from 'react';
import './Dictionary.css';  // Estilos para el módulo

const Dictionary = () => {
  const [word, setWord] = useState(''); // Estado para almacenar la palabra ingresada

  return (
    <div className="dictionary-container">
      <h1>DICTIONARY USIP</h1>
      <p>
             Este módulo(diccionario) corresponde al recuperatorio  del modulo-7 ReactJS URL  https/tu_usuario.github.io/tu_proyecto/dictionary
     </p>
      
    

      <div className="button-section">
        <button className="add-button">Agregar palabra</button>
        <button className="delete-button">Eliminar palabra</button>
        <button className="translate-button">Traducir palabra</button>
      </div>
    </div>
  );
};

export default Dictionary;