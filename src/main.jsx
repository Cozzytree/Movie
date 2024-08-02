import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./routes/LandingPage";
import SignUp from "./routes/Signup";
import SeatSelection from "./routes/SeatSelectionPage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import SignIn from "./routes/Signin";

const router = createBrowserRouter([
   { element: <LandingPage />, path: "/", children: [] },
   { element: <SignIn />, path: "/sign_in", children: [] },
   { element: <SignUp />, path: "/sign_up", children: [] },
   { element: <SeatSelection />, path: "/seats", children: [] },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NextUIProvider>
         <RouterProvider router={router} />
      </NextUIProvider>
   </React.StrictMode>,
);
