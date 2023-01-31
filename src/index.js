import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Recommendations from "./components/recommendations/Recommendations";
import Profile from "./components/Profile/Profile";
import ProfileProvider from "./contexts/ProfileProvider";
import theme from "./theme";
import Swiping from "./components/Swiping/Swiping";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Recommendations />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/swiping",
    element: <Swiping />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <ProfileProvider>
      <RouterProvider router={router} />
      <ToastContainer
        hideProgressBar
        position="bottom-center"
        autoClose={2000}
      />
    </ProfileProvider>
  </ThemeProvider>
);
