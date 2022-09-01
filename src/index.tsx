import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ApiClientProvider from './api/ApiClientProvider';
import EmailClient from './components/EmailClient';
import ContextProvider from './api/context';

ReactDOM.render(
  <React.StrictMode>
    <ApiClientProvider>
      <ContextProvider>
        <EmailClient>
          <App />
        </EmailClient>
        </ContextProvider>
    </ApiClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
