
import { TeamDataType } from "../../../../modules/Provider"

const MainScreenHeader = ({ curTeam }: { curTeam: TeamDataType }) => {
  const name = curTeam.name;
  const len = curTeam.version.length;
  return (
    <div className="main-screen-header">
      <div className="main-screen-team">{name}</div>
      <div className="main-screen-option">
        <img src="assets/teamIcon.png" />
        <div>+ {curTeam.version.length}</div>
        <img src="assets/etc.png" />
      </div>
    </div>
  );
};

export default MainScreenHeader;
