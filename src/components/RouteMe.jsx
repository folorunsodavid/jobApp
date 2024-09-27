import { createBrowserRouter } from "react-router-dom";
// import Landing from "../pages/Landing";
// import Register from "../pages/Register";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HomeLayout />
      </div>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);

export default router;
