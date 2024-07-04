import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'

import './index.css';
import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>
);
