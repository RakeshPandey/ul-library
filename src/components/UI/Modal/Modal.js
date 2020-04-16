import React, { Component } from 'react';

import Backdrop from '../Backdrop/Backdrop';
import './Modal.css';

class Modal extends Component {
    state = {
        data: {
            title: 'Modal Title',
            content: 'Ever needed custom formatted sample / test data, like, bad? Well, thats the idea of this script. Its a free, open source tool written in JavaScript, PHP and MySQL that lets you quickly generate large volumes of custom data in a variety of formats for use in testing software, populating databases, and... so on and so forth.',
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

    cancelModalHandler = () => {
        this.setState({
            showModal: false
        })
    }

    continueModalHandler = () => {
        this.setState({
            showModal: false
        })
        // window.location = "https://www.google.com"
        alert('Please continue !!')
    }

    render() {

        let attachedClasses = ['Modal', 'Hide']
        if (this.state.showModal) {
            attachedClasses = ['Modal', 'Show']
        }

        return (
            <div className="container">
                <Backdrop show={this.state.showModal} hideModal={this.cancelModalHandler} />
                <div className={attachedClasses.join(' ')} >
                    <div className="ModalTitle">{this.state.data.title}</div>
                    <div className="ModalBody">
                        <p>{this.state.data.content}</p>
                        <p>
                            <button className="Button CancelButton" onClick={this.cancelModalHandler}>{this.state.data.cancel}</button>
                            <button className="Button" onClick={this.continueModalHandler}>{this.state.data.continue}</button>

                        </p>
                    </div>
                </div>
                <p><a href="#" onClick={this.showModalHandler}>Modal</a></p>
            </div>
        );
    }
}

export default Modal;