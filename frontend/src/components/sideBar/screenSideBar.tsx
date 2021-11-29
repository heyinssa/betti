import { React } from "react";
import SideBarTeamIcon from "./sideBarTeamIcon";
import SideBarAddIcon from "./sideBarAddIcon";
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
