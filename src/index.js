import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./assets/fonts/Webfonts/fontiran.css";
import { getDirection } from "./localization/index";
document.getElementsByTagName('body')[0].setAttribute('dir', getDirection());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);