import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules';

const ProviderTestDetailPage = () => {
  // const location = useLocation();
  // const curPath = location.pathname;
  // const parseTeam = curPath.substr(5, 1);
  // const parseTest = curPath.substr(7, 1);
  const state = useSelector((state: RootState) => state.Provider);
  const { curTeam, curTest } = state.stateData;
  const teamData = state.teamData;
  const showData = teamData[curTeam].test[curTest];
  console.log(curTeam, curTest);
  console.log(showData);


  return (
    <>
      <div>팀 이름 : {showData.name}</div>
      <div>팀 정보 : {showData.intro}</div>
      <div>팀 링크 : {showData.link}</div>
      <div>팀 플랫폼 : {showData.platform}</div>
      <div>{showData.members.map(e => { return (<text> {e} </text>) })}</div>
      <div>{showData.startDay} ~ {showData.endDay}</div>
    </>
  )
};

export default ProviderTestDetailPage;
