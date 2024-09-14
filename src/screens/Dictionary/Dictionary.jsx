
import React, { useState } from 'react';
import './Dictionary.css';  // Estilos para el módulo
import  AddModal from '../../components/Modal';
import DeleteModal from '../../components/ModalDelete';

const Dictionary = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para almacenar la palabra ingresada
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  return (
    <div className="dictionary-container">
      <h1>DICTIONARY USIP</h1>
      <p>
             Este módulo(diccionario) corresponde al recuperatorio  del modulo-7 ReactJS URL  https/tu_usuario.github.io/tu_proyecto/dictionary
     </p>
      
    

      <div className="button-section">
        <button className="add-button"  onClick={()=>setModalIsOpen(true)}>Agregar palabra</button>
        <button className="delete-button" onClick={() => setDeleteModalIsOpen(true)}  >Eliminar palabra</button>
        <button className="translate-button">Traducir palabra</button>
      </div>
      < AddModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      /> 
      <DeleteModal
         isOpen={deleteModalIsOpen}
         onRequestClose={() => setDeleteModalIsOpen(false)}
         />
    </div>
  );
};

export default Dictionary;