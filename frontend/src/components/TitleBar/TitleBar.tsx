import TitleLogo from "./TitleLogo";
import TitleBarNotifIcon from "./TitleBarNotifIcon";
import TitleBarProfileIcon from "./TitleBarProfileIcon";
import TitleBarSwitchIcon from "./TitleBarSwitchButton";

const TitleBar = () => {
  return (
    <div className="titlebar">
      <TitleLogo />
      <TitleBarSwitchIcon />
      <TitleBarNotifIcon />
      <TitleBarProfileIcon />
    </div>
  );
};

export default TitleBar;
