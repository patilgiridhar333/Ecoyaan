import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Home } from "@mui/icons-material";
import Home from "./Components/Home";
import About from "./Components/About";
import Home2 from "./Components/Home2";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About></About>,
      },
      {
        path: "/about",
        element: <Home></Home>,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
