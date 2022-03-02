import {StrictMode} from 'react';
import {render} from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);

// log web vitals
reportWebVitals(console.log);
