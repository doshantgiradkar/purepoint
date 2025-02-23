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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Complaints from "./pages/Complaints.jsx";
import Donation from "./pages/Donation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "report",
        element: <Report />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "profile/:id",
        element: <Profile />,
      },
      {
        path: "complaints",
        element: <Complaints/>
      },
      {
        path: "donation",
        element: <Donation/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={router}
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  />
);
