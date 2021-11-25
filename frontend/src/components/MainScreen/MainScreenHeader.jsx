import React from 'react';
const MainScreenHeader = ({ teamData, curTeam }) => {
  return (
    <div className="main-screen-header">
      <div className="main-screen-team">{teamData[curTeam].name}</div>
      <div className="main-screen-option">
        <img src="assets/teamIcon.png" />
        <div>+ {teamData[curTeam].test.length}</div>
        <img src="assets/etc.png" />
      </div>
    </div>
  );
};

export default MainScreenHeader;
