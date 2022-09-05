import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import ApiClientProvider from './api/ApiClientProvider';
import EmailClient from './components/EmailClient';
import NotificationProvider from './components/common/Notification/context';
import RootContextProvider from './api/context';

ReactDOM.render(
  <React.StrictMode>
    <ApiClientProvider>
      <RootContextProvider>
        <NotificationProvider>
          <EmailClient>
            <App />
          </EmailClient>
        </NotificationProvider>
        </RootContextProvider>
    </ApiClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.unregister();
reportWebVitals();
