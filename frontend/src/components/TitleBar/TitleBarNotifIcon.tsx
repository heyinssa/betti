
type NotifType = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const TitleBarNotifIcon = ({ onClick }: NotifType) => {
  return (
    <div className="titlebar-icon" onClick={onClick}>
      <a>
        <i className="bell icon"></i>
      </a>
    </div>
  );
};

export default TitleBarNotifIcon;
