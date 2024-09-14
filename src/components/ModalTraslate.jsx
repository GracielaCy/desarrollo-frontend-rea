import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';


const ModalTraslate = ({isOpen, onRequestClose }) => {
   // const [translateModalIsOpen, setTranslateModalIsOpen] = useState(false);
    const [lenguajeToTranslate, setLenguajeToTranslate] = useState(''); // Palabra que el usuario ingresa
    const [translatedLenguaje, setTranslatedLenguaje] = useState(''); // Traducción de la palabra

    const dictionary = useSelector((state) => {
        console.log(state); // Verifica la estructura del estado global
        return state.dictionary ? state.dictionary.dictionary : [];
    });  
    
   
    const handleTranslate = () => {
        // Buscar la palabra en el diccionario
        const translation = dictionary.find(
            (entry) =>
                entry.lenguaje1 === lenguajeToTranslate ||
                entry.lenguaje2 === lenguajeToTranslate ||
                entry.lenguaje3 === lenguajeToTranslate
        );

        if (translation) {
            // Mostrar la traducción
            setTranslatedLenguaje(`Palabra en otros idiomas: ${translation.lenguaje1}, ${translation.lenguaje2}, ${translation.lenguaje3}`);
        } else {
            setTranslatedLenguaje('No se encontró la traducción.');
        }
    };

    return (
        <div>
             
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                contentLabel="Eliminar Palabra"
                className="modal-content"
                overlayClassName="modal-overlay"
            >
                    
                <button className="modal-close-button1" onClick={onRequestClose}>X</button>
                <form>
                   <h2>Traducir Palabra</h2>
                
                   <input
                       type="text"
                       placeholder="Escribe una palabra"
                       value={lenguajeToTranslate}
                       onChange={(e) => setLenguajeToTranslate(e.target.value)}
                   />
                   <button onClick={handleTranslate}>Traducir</button>
                   <button onClick={onRequestClose}>Cancelar</button>

                   <textarea
                      readOnly
                      value={translatedLenguaje}
                     placeholder="La traducción aparecerá aquí..."/>

                </form>
            </Modal>    
        </div>
    );
};

export default ModalTraslate;