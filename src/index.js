import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const image = document.createElement('meta');
image.property = 'og:image';  
image.content  = 'https://www.example.com/ogp.jpg';

const title = document.createElement('meta');
title.property = 'og:title';
title.content = 'OGP title';

const description = document.createElement('meta');
description.property = 'og:description';
description.content = 'OGP description';

document.head.appendChild(image);
document.head.appendChild(title);
document.head.appendChild(description);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
