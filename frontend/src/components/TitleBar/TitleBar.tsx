
import { useState } from 'react';
import TitleLogo from './TitleLogo';
import TitleBarNotifIcon from './TitleBarNotifIcon';
import TitleBarProfileIcon from './TitleBarProfileIcon';
import TitleBarSwitchIcon from './TitleBarSwitchButton';
import NotificationCenter from '../NotificationCenter';
import './Titlebar.scss';

const TitleBar = () => {
  const [ifNotif, setIfNotif] = useState(false);
  const handleAlertClick = () => {
    if (ifNotif === false) setIfNotif(true);
    else setIfNotif(false);
  };

  return (
    <>
      <div className="titlebar">
        <TitleLogo />
        <div className="titlebar-align-right">
          <TitleBarSwitchIcon />
          <TitleBarNotifIcon onClick={handleAlertClick} />
          {ifNotif ? <NotificationCenter /> : null}
          <TitleBarProfileIcon />
        </div>
      </div>
    </>
  );
};

export default TitleBar;
