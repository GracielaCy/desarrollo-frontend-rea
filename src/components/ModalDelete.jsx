import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { removeDictionaryData } from '../redux/dictionary/dictionaryActions';


Modal.setAppElement('#root'); // Configura el elemento raíz

const DeleteModal = ({ isOpen, onRequestClose }) => {
    const [lenguajeToDelete, setLenguajeToDelete] = useState('');
    const dispatch = useDispatch();

    const handleDeleteLenguaje = () => {
        dispatch(removeDictionaryData(lenguajeToDelete));
        setLenguajeToDelete(''); // Limpia el campo de entrada
        onRequestClose(); // Cierra el modal
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Eliminar Palabra"
            className="modal-content"
            overlayClassName="modal-overlay"
        >
            <button className="modal-close-button1" onClick={onRequestClose}>X</button>
            <h2>Modal Eliminar Palabra</h2>
            <form>
                <h2>Traductor USIP</h2>
                <p>que palabra desea eliminar del diccionario <br />
                   Puede escribir su palabra en ESPAÑOL, INGLES o PORTUGUES
                </p>
                <label>
                    palabra :
                    <input
                        type="text"
                        value={lenguajeToDelete}
                        onChange={(e) => setLenguajeToDelete(e.target.value)}
                    />
                </label>
                <button type="button" onClick={handleDeleteLenguaje}>Eliminar</button>
            </form>
        </Modal>
    );
};

export default DeleteModal;