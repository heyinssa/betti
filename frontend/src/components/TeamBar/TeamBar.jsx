import { React, useState } from 'react';
import TeamBarHeader from './TeamBarHeader';
import TeamBarBody from './TeamBarBody';
import Modal from '../../util/Modal';
import useModalHandle from '../../util/hooks/useModalHandle';
import './TeamBar.scss';

const TeamBar = ({ teamData, dispatch }) => {
  const [open, close, isOpen] = useModalHandle();
  const [teamName, setTeamName] = useState('');

  const changeName = e => {
    setTeamName(e.currentTarget.value);
  };
  const addTeamEvent = e => {
    e.preventDefault();
    if (teamName === '') return;
    dispatch({ type: 'addTeam', name: teamName });
    setTeamName('');
    close();
  };

  const content = (
    <div className="team-modal">
      <form action="input" onSubmit={addTeamEvent}>
        <div>Create New Team</div>
        <div>Name Your Team Before choosing a new project.</div>
        <input
          onChange={changeName}
          maxLength="12"
          type="text"
          value={teamName}
        />
      </form>
    </div>
  );

  return (
    <div className="team-bar">
      <TeamBarHeader />
      <TeamBarBody teamData={teamData} dispatch={dispatch} open={open} />
      <Modal isOpen={isOpen} close={close} content={content} />
    </div>
  );
};

export default TeamBar;
