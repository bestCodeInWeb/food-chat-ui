import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: App,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/signin',
        Component: SignIn,
      },
      {
        path: '/signup',
        Component: SignUp,
      },
    ]
  },
];

const router = createBrowserRouter(routes);

export default router;
