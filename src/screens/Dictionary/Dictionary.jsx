
import React, { useState } from 'react';
import './Dictionary.css';  
import  AddModal from '../../components/Modal';
import DeleteModal from '../../components/ModalDelete';
import ModalTraslate from '../../components/ModalTraslate';

const Dictionary = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para almacenar la palabra ingresada
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [translateModalIsOpen, setTranslateModalIsOpen] = useState(false);

  return (
    <div className="dictionary-container">
      <h1>DICTIONARY USIP</h1>
      <p>
             Este módulo(diccionario) corresponde al recuperatorio  del modulo-7 ReactJS URL  https/tu_usuario.github.io/tu_proyecto/dictionary
     </p>
      
    

      <div className="button-section">
        <button className="add-button"  onClick={()=>setModalIsOpen(true)}>Agregar palabra</button>
        <button className="delete-button" onClick={() => setDeleteModalIsOpen(true)}  >Eliminar palabra</button>
        <button className="translate-button" onClick={() => setTranslateModalIsOpen(true)}>Traducir palabra</button>
      </div>
      < AddModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      /> 
      <DeleteModal
         isOpen={deleteModalIsOpen}
         onRequestClose={() => setDeleteModalIsOpen(false)}
      />
      
      <ModalTraslate
        isOpen={translateModalIsOpen}
        onRequestClose={() => setTranslateModalIsOpen(false)}
      />   
    </div>
  );
};

export default Dictionary;