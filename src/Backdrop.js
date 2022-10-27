import React from 'react';
import ReactDOM from 'react-dom';


const BackdropRoot = document.getElementById('backdrop-root');

const Backdrop = () => {
    return ReactDOM.createPortal(<div className='backdropStyle'></div>,BackdropRoot);
}

export default Backdrop