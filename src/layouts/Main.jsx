import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  return (
    <div className="font-Roboto">
      <Navbar />
      <main className="container mx-auto">
        <Outlet />
      </main>
      <footer className="text-center mt-20">
        <p className="read-the-docs">
          Raha Wallet - A Mobile Finance Service (MFS)
        </p>
      </footer>
    </div>
  );
};

export default Main;
