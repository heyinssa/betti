
import { TeamDataType } from "../../modules/Provider"
import { template } from "@babel/core";

const MainScreenHeader = ({ curTeam }: { curTeam: TeamDataType }) => {
  const name = curTeam ? curTeam.name : "temp";
  const len = curTeam.version ? curTeam.version.length : "temp"
  return (
    <>
      {curTeam && (
        <div className="main-screen-header">
          <div className="main-screen-team">{name}</div>
          <div className="main-screen-option">
            <img src="assets/teamIcon.png" />
            <div>+ {curTeam.version.length}</div>
            <img src="assets/etc.png" />
          </div>
        </div>)
      } </>
  );
};

export default MainScreenHeader;
