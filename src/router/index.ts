import { RouteObject, createHashRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Chat from "../pages/Chat";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/chat/:chatId",
        Component: Chat,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
