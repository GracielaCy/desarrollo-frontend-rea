import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { addDictionaryData } from '../redux/dictionary/dictionaryActions'; // Importa tu acción

Modal.setAppElement('#root');

const  AddModal = ({ isOpen, onRequestClose }) => {
  const [lenguaje1, setLenguaje1] = useState('');
  const [lenguaje2, setLenguaje2] = useState('');
  const [lenguaje3, setLenguaje3] = useState('');
  const dispatch = useDispatch();

  const handleAddWord = () => {
    const newLenguaje = {
      langua1: lenguaje1,
      langua2: lenguaje2,
      langua3: lenguaje3,
    };

    dispatch(addDictionaryData(newLenguaje));
   
    setLenguaje1('');
    setLenguaje2('');
    setLenguaje3('');

    onRequestClose();
  };

  return (
    <Modal
    
    isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Agregar Palabra"
      className="modal-content"
      overlayClassName="modal-overlay"
      
    
    >
      
             
     
      <form>
      <h2>Modal Agregar Palabra</h2>
      <button 
          className="modal-close-button" 
          onClick={onRequestClose}>
          X
      </button>
        <h2>Traductor USIP</h2>
        <label  >
          Español:
           <input type="text" value={lenguaje1} onChange={(e) => setLenguaje1(e.target.value)} />
         <br />
         <br />
        </label>
        <label >
          Ingles:
          <input type="text" value={lenguaje2} onChange={(e) => setLenguaje2(e.target.value)} />
        <br />
        <br />
        </label >
        <label>
          Portugues:
          <input type="text" value={lenguaje3} onChange={(e) => setLenguaje3(e.target.value)} />
        <br />
        </label>
        <button type="button" onClick={handleAddWord}>Agregar</button>
       
      </form>
      
    </Modal>
  );
};

export default AddModal;