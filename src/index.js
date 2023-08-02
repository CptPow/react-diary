import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ShowPost from './ShowPost';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ShowPost />
  </React.StrictMode>
);