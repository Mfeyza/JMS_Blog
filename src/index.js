import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import  store  from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './app/store'; 
import 'primereact/resources/themes/saga-blue/theme.css';   
import 'primereact/resources/primereact.min.css';           
import 'primeicons/primeicons.css';     
import 'quill/dist/quill.snow.css';                    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  
);


