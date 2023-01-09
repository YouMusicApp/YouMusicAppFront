import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(





    <BrowserRouter >
        <Provider store={store}>

            <Auth0Provider
                domain={process.env.REACT_APP_AUTH0_DOMAIN}
                clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
                redirectUri={window.location.origin + '/home'}
                audience={process.env.REACT_APP_AUTH0_AUDIENCE}
            >

                <App />


            </Auth0Provider>
        </Provider>


    </BrowserRouter>








);
