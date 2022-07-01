import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

// ==============================================

function App() {
  return (
    <main>
      <div className='A'>A</div>
      <div className='B'>B</div>
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
