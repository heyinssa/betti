import React from 'react';

const TeamBarBody = ({ teamData, dispatch, open }) => {
  return (
    <div className="team-body">
      {teamData.map(e => {
        return (
          <div
            className="team"
            key={e.index}
            onClick={() => dispatch({ type: 'changeTeam', dst: e.index })}
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
