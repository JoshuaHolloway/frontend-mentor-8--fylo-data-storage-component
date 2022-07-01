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
            <svg width='24.074' height='19.2' viewBox='0 0 19.244 23.981'>
              <path
                id='Shape'
                d='M2.393,23.981A2.391,2.391,0,0,1,0,21.583L.012,2.4A2.391,2.391,0,0,1,2.406,0h9.622l7.216,7.195V21.583a2.4,2.4,0,0,1-2.406,2.4Z'
                fill='#697ed4'
              />
            </svg>
          </div>
          <div>
            <svg width='24.074' height='19.2' viewBox='0 0 24.074 19.2'>
              <path
                id='Path'
                d='M21.666,2.4h-9.63L9.629,0H2.407a2.393,2.393,0,0,0-2.4,2.4L0,16.8a2.4,2.4,0,0,0,2.407,2.4H21.666a2.4,2.4,0,0,0,2.407-2.4V4.8A2.4,2.4,0,0,0,21.666,2.4Z'
                fill='#697ed4'
              />
            </svg>
          </div>
          <div>
            <svg width='24.074' height='19.2' viewBox='0 0 24.074 16'>
              <path
                id='Shape'
                d='M6.018,16a6.015,6.015,0,0,1-.6-12,7.342,7.342,0,0,1,6.62-4A7.544,7.544,0,0,1,19.46,6a5.1,5.1,0,0,1,4.614,5,4.96,4.96,0,0,1-5.016,5Z'
                fill='#697ed4'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='B'>
        <p className='text'>
          You’ve used <span>815 GB</span> of your storage
        </p>
        <div className='bar-container'>
          <div className='bar'>
            <div className='circle'></div>
          </div>
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
