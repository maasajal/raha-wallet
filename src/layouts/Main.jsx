import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import useAuth from "../hooks/useAuth";
import MobileNavbar from "./MobileNavbar";

const Main = () => {
  const { user } = useAuth();
  return (
    <div className="font-Roboto">
      {user && <Navbar />}
      <main className="container mx-auto px-2 sm:px-1">
        <Outlet />
      </main>
      <footer className="text-center my-14 bg-[#994d66] text-white py-4 space-y-2">
        <p className="read-the-docs">
          Raha Wallet - A Mobile Finance Service (MFS)
        </p>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Raha
          Wallet
        </p>
      </footer>
      <div className="flex sm:hidden container mx-auto">
        <MobileNavbar />
      </div>
    </div>
  );
};

export default Main;
