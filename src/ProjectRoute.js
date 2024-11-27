import React from 'react'

import {  createBrowserRouter  } from 'react-router-dom';
import Header from './component/Header';
import LoginRegister from './component/LoginRegister';
import Register from './component/Register';
import App from './App';



const customRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/header',
                element: <Header />
            },
            {
                path: '/login',
                element: <LoginRegister />,
               
            },
            {
                        path:'/register',
                        element:<Register/>
                    },
           
        ]
    },
]);

export default customRoute;
