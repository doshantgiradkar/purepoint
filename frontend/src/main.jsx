import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home";
import About from "./pages/About";
import Report from "./pages/Report";
import Contact from "./pages/Contact";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Error from "./pages/Error";
import Complaints from "./pages/Complaints.jsx";
import Donation from "./pages/Donation.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import VerifyOTP from "./pages/VerifyOTP.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import UserCompleteProfile from "./pages/UserCompleteProfile.jsx";
import AuthorityCompleteProfile from "./pages/AuthorityCompleteProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "leaderboard", element: <Leaderboard /> },
      { path: "profile/:id", element: <Profile /> },
      { path: "donation", element: <Donation /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      {
        path: "verify-otp", element: <VerifyOTP />,
      },{
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password/:token",
        element: <ResetPassword />,
      },{
        path : "complete-user-profile",
        element: <UserCompleteProfile/>
      },
      {
        path: " complete-authority-profile",
        element: <AuthorityCompleteProfile />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "complaints",
        element: <Complaints />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
