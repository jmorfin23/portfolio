import React from 'react'; 
import { Modal } from '../modal-window'; 
import './index.css'; 

export const ModalContainer = () => {
    return(
        <div className="modal-container">
            <Modal>
                <ol className="modal-list">
                    <li></li>
                    <li></li>
                </ol>
            </Modal>
        </div>
    )
}; 