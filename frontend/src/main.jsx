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
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

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

      // 🛡️ Protected Routes - Require Authentication
      {
        path: "report",
        element: (
          <SignedIn>
            <Report />
          </SignedIn>
        ),
      },
      {
        path: "complaints",
        element: (
          <SignedIn>
            <Complaints />
          </SignedIn>
        ),
      },

      // If not signed in, redirect to Clerk sign-in page
      {
        path: "*",
        element: (
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
  </ClerkProvider>
);
