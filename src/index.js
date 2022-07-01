import React from 'react';
import ReactDOM from 'react-dom/client';

import logo from './img/logo.svg';
import img1 from './img/icon-document.svg';
import img2 from './img/icon-folder.svg';
import img3 from './img/icon-upload.svg';

import './index.scss';

// ==============================================

function App() {
  return (
    <main>
      <div className='A'>
        <img className='logo' src={logo} alt='' />
        <div className='contaienr'>
          <div>
            <img src={img1} alt='' />
          </div>
          <div>
            <img src={img2} alt='' />
          </div>
          <div>
            <img src={img3} alt='' />
          </div>
        </div>
      </div>
      <div className='B'>
        <p>You’ve used 815 GB of your storage</p>
        <div className='bar-container'>
          <svg></svg>
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
      </div>
    </main>
  );
}

// ==============================================

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ==============================================
