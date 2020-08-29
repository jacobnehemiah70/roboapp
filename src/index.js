import React from 'react'
import Reactdom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css';
import App from './container/App';
import './custom.scss';
import './index.css';
import 'tachyons';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

Reactdom.render(
    <App />,
    document.getElementById('root')
)

