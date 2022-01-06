import { useEffect, useState } from 'react';
import TeamBarHeader from './TeamBarHeader';
import TeamBarBody from './TeamBarBody';
import Modal from '../../util/Modal';
import useModalHandle from '../../util/hooks/useModalHandle';
import { useDispatch } from 'react-redux';
import { addTeam, teamDataType } from '../../modules/Provider';
import './TeamBar.scss';

type TeamBarType = {
  teamData: teamDataType[];
};

const ProviderTeamBar = ({ teamData }: TeamBarType) => {
  const [open, close, isOpen] = useModalHandle();
  const [teamName, setTeamName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => setTeamName(''), [isOpen]);
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTeamName(e.currentTarget.value);
  };
  const addTeamEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (teamName === '') return;
    dispatch(addTeam(teamName));
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
          maxLength={12}
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

export default ProviderTeamBar;
