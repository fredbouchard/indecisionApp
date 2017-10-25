import React from 'react';
import Modal from 'react-modal';

const OptionModal = props => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.onClose}
        closeTimeoutMS={200}
        className="Modal">
        <h3 className="Modal-title">Selected Option</h3>
        {props.selectedOption && <p className="Modal-body">{props.selectedOption}</p>}
        <button className="Button Button-primary" onClick={props.onClose}>Got it!</button>
    </Modal>
);

export default OptionModal;