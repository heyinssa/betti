import { React } from "react";
import TitleLogo from "./titleLogo";
import TitleBarNotifIcon from "./titleBarNotifIcon";
import TitleBarProfileIcon from "./titleBarProfileIcon";

const TitleBar = () => {
  return (
    <div className="titlebar">
      <TitleLogo />
      <TitleBarNotifIcon />
      <TitleBarProfileIcon />
    </div>
  );
};

export default TitleBar;
