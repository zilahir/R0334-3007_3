import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ApiClientProvider from './api/ApiClientProvider';
import EmailClient from './components/EmailClient';

ReactDOM.render(
  <React.StrictMode>
    <ApiClientProvider>
        <EmailClient>
          <App />
        </EmailClient>
    </ApiClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
