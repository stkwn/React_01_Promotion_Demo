import React from 'react';
import ReactDOM from 'react-dom';


const BackdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return ReactDOM.createPortal(<div className='backdropStyle'>{props.children}</div>,BackdropRoot);
}

export default Backdrop