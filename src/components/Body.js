import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="body-div">
      <SideBar />
      <Outlet />
      {/* <MainContainer />  */}
    </div>
  );
};

export default Body;
