import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = ({collapse , setCollapse}) => {
  return (
    <div className="body-div">
      <SideBar collapse={collapse}  setCollapse={setCollapse} />
      <MainContainer />
    </div>
  );
};

export default Body;
