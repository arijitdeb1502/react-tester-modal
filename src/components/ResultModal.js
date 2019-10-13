import React from 'react';
import Modal from 'react-modal';
import '../styles/ResultModal.css';


const ResultModal = (props)=>(
    <Modal
        isOpen={props.visibility}
        onRequestClose={props.handleModalButton}
        contentLabel="Final Result"
        closeTimeoutMS={200}
        className="modal"
    >
        <h1>Result: {props.result}</h1>
        <button className="button" onClick={props.handleModalButton}>Okay</button>
    </Modal>
)


export default ResultModal;