import TitleLogo from "./TitleLogo";
import TitleBarNotifIcon from "./TitleBarNotifIcon";
import TitleBarProfileIcon from "./TitleBarProfileIcon";
import TitleBarSwitchIcon from "./TitleBarSwitchButton";
import "./Titlebar.scss";

const TitleBar = () => {
  return (
    <div className="titlebar">
      <TitleLogo />
      <div className="titlebar-align-right">
        <TitleBarSwitchIcon />
        <TitleBarNotifIcon />
        <TitleBarProfileIcon />
      </div>
    </div>
  );
};

export default TitleBar;
