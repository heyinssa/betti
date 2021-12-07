import SideBarTeamIcon from "./SideBarTeamIcon";
import SideBarAddIcon from "./SideBarAddIcon";
import "./sideBar.scss";

const FrontPage = () => {
  return (
    <div className="sidebar">
      <SideBarTeamIcon />
      <SideBarTeamIcon />
      <SideBarTeamIcon />
      <SideBarAddIcon />
    </div>
  );
};

export default FrontPage;
