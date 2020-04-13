import React, { Component } from 'react';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Modal.css';

class Modal extends Component {

    state = {
        data: {
            title: 'Modal Title',
            content: 'Dummy Data goes here...',
            link: 'www.google.com',
            continue: 'Continue',
            cancel: 'Cancel'
        },
        showModal: false
    }

    showModalHandler = () => {
        this.setState({
            showModal: true
        })
    }

    render () {
        return (
            <Auxiliary>                
                <div className="container">
                   <p><a href="/">Modal</a></p> 
                   <div className="Modal">
                        <div className="ModalTitle"></div>
                        <div className="ModalBody"></div>
                   </div>
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;