import { Navbar } from "../shared/Navbar";
// import { AppProviderProps } from "../../types/app";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid grid-cols-10 h-full">
      <div className="col-span-1 ">
        <Navbar />
      </div>
      <div className="max-w-screen-2xl w-full mx-auto col-span-9 flex-1 pr-10">
        <div className="col-span-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
