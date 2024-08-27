import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import LadingPage from "../screens/LadingPage/LadingPage";
import App from "../App";

const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-rea' : '/';



const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LadingPage />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;