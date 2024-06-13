import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainApp from "./main-app";
import HomePage from "./home-page";
import AboutPage from "./about-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: ":filmId",
        element: <AboutPage />,
      },
    ],
  },
]);

export function AppRoute() {
  return <RouterProvider router={router} />;
}
