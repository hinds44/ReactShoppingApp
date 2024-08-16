import { React } from 'react'
import { ReactDOM } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from '../../node_modules/react-router-dom/dist/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);