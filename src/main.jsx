import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import "./index.css";
import BuyTickets from "./routes/buyTickets";
import SeatSelection from "./routes/SeatSelectionPage";
// Lazy loading components
const EditProfilepage = lazy(() => import('./routes/editProfilePage'));
const ExplorePage = lazy(() => import('./routes/explorePage'));
const LandingPage = lazy(() => import('./routes/LandingPage'));
const MoviePage = lazy(() => import('./routes/movie'));
const SignUp = lazy(() => import('./routes/Signup'));
const UserProfilePage = lazy(() => import('./routes/userProfile'));
const MovieInDetail = lazy(() => import('./routes/movieInDetail'));
const OrderSummary = lazy(() => import('./routes/order_summary'));
const Orders = lazy(() => import('./routes/orders'));
const SignIn = lazy(() => import('./routes/Signin'));
const VerifyEmail = lazy(() => import('./routes/verifyEmail'));
const VerifyPhone = lazy(() => import('./routes/verifyPhone'));
const PaymentPage = lazy(() => import('./routes/paymentPage'));
const OrderConfirmed = lazy(() => import('./routes/orderConfirmedPage'));
const AccountSettings = lazy(() => import('./routes/accountSettings'));
const SelectRegionPage = lazy(() => import('./routes/selectRegion'));
const LoadingPage = lazy(() => import("./routes/loadingPage"))
const PageNotFound = lazy(() => import("./routes/pagenotFound"))

import { NextUIProvider } from "@nextui-org/react";
import { Navigate } from "react-router-dom";
import { Suspense } from "react";
import { Spinner } from "@nextui-org/spinner"

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
         { element: <AccountSettings />, path: "settings" }
      ],
   },
   {
      element: <PaymentPage />,
      path: "/payment"
   },
   {
      element: <OrderConfirmed />,
      path: "/order_confirmed"
   },
   {
      element: <SelectRegionPage />,
      path: "/select/region"
   },
   { path: "*", element: <PageNotFound /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <NextUIProvider>
         <Suspense fallback={<LoadingPage />}>
            <RouterProvider router={router} />
         </Suspense>
      </NextUIProvider>
   </React.StrictMode>,
);
