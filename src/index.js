import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';


import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const locale = navigator.language.startsWith('es') ? 'es-ES' : 'en-US';
const messages = locale.startsWith('es') ? localeEsMessages : localeEnMessages;



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <IntlProvider locale={locale} messages= {messages}>
    <App />
    </IntlProvider>, document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
