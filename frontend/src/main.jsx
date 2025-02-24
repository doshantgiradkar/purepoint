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
import CompleteAccount from "./pages/completeAccount.jsx";
import Complaints from "./pages/Complaints.jsx";
import CompleteAccountAuthority from "./pages/complateAccountAuthority.jsx";
import Donation from "./pages/Donation.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

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
      { path: "completeAccount", element: <CompleteAccount /> },
      { path: "completeAccountAuthority", element: <CompleteAccountAuthority /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
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
