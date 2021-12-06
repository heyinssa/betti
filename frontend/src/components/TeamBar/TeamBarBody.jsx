import React from 'react';
import {changeTeam } from '../../modules/Provider'
const TeamBarBody = ({ teamData, dispatch, open }) => {
  return (
    <div className="team-body">
      {teamData.map(e => {
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
