import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./routes/LandingPage";
import SignUp from "./routes/Signup";
import SeatSelection from "./routes/SeatSelectionPage";
import MoviePage from "./routes/movie";
import ExplorePage from "./routes/explorePage";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import SignIn from "./routes/Signin";
import { Navigate } from "react-router-dom";
import MovieInDetail from "./routes/movieInDetail";

const router = createBrowserRouter([
   { element: <LandingPage />, path: "/", children: [] },
   { element: <SignIn />, path: "/sign_in", children: [] },
   { element: <SignUp />, path: "/sign_up", children: [] },
   { element: <SeatSelection />, path: "/seats", children: [] },
   {
      element: <ExplorePage />,
      path: "/explore",
      children: [
         { element: <Navigate to="/explore/movies" />, index: true },
         {
            element: <MoviePage />,
            path: "movies",
            children: [],
         }, // Note: Use relative path,
         { element: <MovieInDetail />, path: "movies/:name/:id" },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NextUIProvider>
         <RouterProvider router={router} />
      </NextUIProvider>
   </React.StrictMode>,
);
