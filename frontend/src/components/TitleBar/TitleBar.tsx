import TitleLogo from "./TitleLogo";
import TitleBarNotifIcon from "./TitleBarNotifIcon";
import TitleBarProfileIcon from "./TitleBarProfileIcon";

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
