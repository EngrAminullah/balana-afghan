import { Navigate, useRoutes } from "react-router-dom";
// layouts

//

import Home from "./pages/Home";
import AboutUs from "./pages/about-us/about";

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: "/balana-afghan",
      element: <Home />,
      children: [
        { element: <Navigate to="/pages/balana-afghan" />, index: true },
        { path: "about", element: <AboutUs /> },
      ],
    },
  ]);

  return routes;
}
