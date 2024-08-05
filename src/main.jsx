import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BuyTickets from "./routes/buyTickets";
import Cenimas from "./routes/Cenimas";
import EditProfilepage from "./routes/editProfilePage";
import ExplorePage from "./routes/explorePage";
import LandingPage from "./routes/LandingPage";
import MoviePage from "./routes/movie";
import MovieInHalls from "./routes/MovieInHalls";
import SeatSelection from "./routes/SeatSelectionPage";
import SignUp from "./routes/Signup";
import UserProfilePage from "./routes/userProfile";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import MovieInDetail from "./routes/movieInDetail";
import SignIn from "./routes/Signin";

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
   {
      element: <BuyTickets />,
      path: "/buy_tickets",
      children: [
         {
            element: <MovieInHalls />,
            path: "movie/:movie_name/:movie_id/:extra_details",
         },
         {
            element: <Cenimas />,
            path: "cenima/:cenima_name/:cenima_id/:extra_details",
         },
      ],
   },
   {
      element: <UserProfilePage />,
      path: "/my_profile",
      children: [],
   },
   {
      element: <EditProfilepage />,
      path: "/my_profile/edit",
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NextUIProvider>
         <RouterProvider router={router} />
      </NextUIProvider>
   </React.StrictMode>,
);
