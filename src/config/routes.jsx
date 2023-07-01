import { element } from "prop-types";
import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Index"));
const Colors = React.lazy(() => import("../views/theme/colors/Colors"));
const Typography = React.lazy(() => import("../views/theme/typography/Typography"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
];

export default routes;
