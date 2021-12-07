import { changeTeam } from '../../modules/Provider'
import {  teamDataType, curStateAction} from '../../modules/Provider'

type TeamBarBodyType = {
  teamData: teamDataType[],
  dispatch: (action : curStateAction) => void
  open : () => void
}
const TeamBarBody = ({ teamData, dispatch, open } : TeamBarBodyType) => {
  return (
    <div className="team-body">
      {teamData.map((e : teamDataType) => {
        return (
          <div
            className="team"
            key={e.index}
            onClick={() => dispatch(changeTeam(e.index))}
          >
            {e.name}
          </div>
        );
      })}
      <div className="separation">{}</div>
      <div className="team team-add" onClick={open}>
        +
      </div>
    </div>
  );
};

export default TeamBarBody;
