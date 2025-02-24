import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import FloatingButton from "./components/Floating";
import { ContextProvider } from "../contexts/GlobalContext";
const App = () => {
  return (
    <ContextProvider>
      <div className="flex flex-col min-h-screen">
        <FloatingButton />
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ContextProvider>
  );
};

export default App;
