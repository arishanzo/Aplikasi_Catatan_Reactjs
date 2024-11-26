import React from 'react';
import ReactDOM from 'react-dom/client';
import AppNotes from './components/appnotes';
import "./styles/css/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
    <AppNotes />
  </React.StrictMode>

);