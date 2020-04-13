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
            showModal: !this.state.showModal;
        })
    }

    render () {
        return (
            <Auxiliary>
                <div className="container">
                    Modal
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;