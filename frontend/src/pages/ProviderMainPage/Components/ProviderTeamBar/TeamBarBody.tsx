
import { changeTeam } from '../../../../modules/Provider'
import { TeamDataType, curStateAction } from '../../../../modules/Provider'

const TeamBarBody = ({ teamData, dispatch, open }: {
  teamData: TeamDataType[],
  dispatch: (action: curStateAction) => void
  open: () => void
}) => {
  return (
    <div className="team-body">
      {teamData.map((e: TeamDataType) => {
        return (
          <div
            className="team"
            key={e.index}
            onClick={() => dispatch(changeTeam(teamData[e.index]))}
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
