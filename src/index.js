import React from 'react'
import Reactdom from 'react-dom'
import App from './container/App';
import './index.css';
import 'tachyons';

Reactdom.render(
    <App />,
    document.getElementById('root')
)

