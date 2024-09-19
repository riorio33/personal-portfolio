import { Outlet } from "react-router-dom";
import MainAppBar from "../components/Navbar/MainAppBar";

const AppFrame: React.FC = () => {
  return (
    <>
      <div className="font=[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee]">
        <MainAppBar />
        <Outlet />
      </div>
    </>
  );
};

export default AppFrame;
