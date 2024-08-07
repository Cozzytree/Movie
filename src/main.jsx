import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import BuyTickets from "./routes/buyTickets";
import SeatSelection from "./routes/SeatSelectionPage";
// import Cenimas from "./routes/Cenimas";
import EditProfilepage from "./routes/editProfilePage";
import ExplorePage from "./routes/explorePage";
import LandingPage from "./routes/LandingPage";
import MoviePage from "./routes/movie";
import SignUp from "./routes/Signup";
import UserProfilePage from "./routes/userProfile";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import MovieInDetail from "./routes/movieInDetail";
import SignIn from "./routes/Signin";
import OrderSummary from "./routes/order_summary";
import Orders from "./routes/orders";
import VerifyEmail from "./routes/verifyEmail";
import VerifyPhone from "./routes/verifyPhone";

const router = createBrowserRouter([
   { element: <LandingPage />, path: "/", children: [] },
   { element: <SignIn />, path: "/sign_in", children: [] },
   { element: <SignUp />, path: "/sign_up", children: [] },
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
      path: "/buy_tickets/:movie_name-location/:movie_id/:extra_details",
      children: [],
   },
   {
      element: <SeatSelection />,
      path: "/seat_layout/:location/:movieId/:hallId/:details",
   },
   {
      element: <OrderSummary />,
      path: "/order_summary/:movie_id/:cenima_id",
   },
   {
      element: <UserProfilePage />,
      path: "/my_profile",
      children: [
         { element: <Navigate to="/my_profile/edit" />, index: true },
         { element: <EditProfilepage />, path: "edit" },
         { element: <Orders />, path: "orders" },
         { element: <VerifyEmail />, path: "verify/email" },
         { element: <VerifyPhone />, path: "verify/phone" },
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
