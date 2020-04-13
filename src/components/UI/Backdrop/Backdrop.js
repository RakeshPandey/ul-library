import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    return (
        <div className="Backdrop" onClick={props.hideModal}
            style={{
                opacity: props.show ? '1' : '0' ,
                display: props.show ? 'block' : 'none'
            }}></div>
    )
}

export default backdrop;