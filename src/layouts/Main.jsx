import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-Roboto">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Main;
