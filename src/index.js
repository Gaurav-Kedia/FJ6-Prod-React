import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Support from './Components/Support';
import reportWebVitals from './reportWebVitals';
import Privacy from './Components/Privacy';
import Tnc from './Components/Tnc';
import Cnr from './Components/Cnr';
import Snd from './Components/Snd';
import Testerlayout from './Components/Testerlayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="*" element={<App />} />
      <Route path="support" element={<Support />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="tnc" element={<Tnc />} />
      <Route path="cnr" element={<Cnr />} />
      <Route path="snd" element={<Snd />} />
      <Route path="tl" element={<Testerlayout />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
