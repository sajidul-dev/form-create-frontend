import { Navbar } from "../shared/Navbar";
import { AppProviderProps } from "../../types/app";

const Layout = ({ children }: AppProviderProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
