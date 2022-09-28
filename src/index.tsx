import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {store} from "./store/store";    //transfer data stored in a common workspace
import {Provider} from "react-redux";  
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter>
            <App />
      </BrowserRouter>
  </Provider>
  
   

);

