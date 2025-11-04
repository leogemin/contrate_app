import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home } from '../pages/Home/Home';
import { MyCustomers } from '../pages/MyCustomers/MyCustomers';
import { Process } from '../pages/Process/Process';
import { MyProfile } from '../pages/MyProfile/MyProfile';
import { Login } from '../pages/Auth/Login';
import { Register } from '../pages/Auth/Register';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/customers',
        element: <MyCustomers />,
      },
      {
        path: '/process/:id',
        element: <Process />,
      },
      {
        path: '/profile',
        element: <MyProfile />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
