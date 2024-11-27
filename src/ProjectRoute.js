import React from 'react'

import {  createBrowserRouter  } from 'react-router-dom';
import Header from './component/Header';
import LoginRegister from './component/LoginRegister';
import Register from './component/Register';
import App from './App';
import Forgot_Password from './component/Forgot_Password';
import Milk_Schedule from './component/Milk_Schedule';



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
            {
                        path:'/password',
                        element:<Forgot_Password/>
                    },
            {
                        path:'/milk',
                        element:<Milk_Schedule/>
                    },
           
        ]
    },
]);

export default customRoute;
