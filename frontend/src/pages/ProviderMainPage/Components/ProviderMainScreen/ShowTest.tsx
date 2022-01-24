
import { VersionType } from '../../../../modules/Provider';
type ShowVersionType = {
  versionData: VersionType;
};
const ShowTest = ({ versionData }: ShowVersionType) => {
  console.log(versionData);
  return (
    <div className="main-screen-test-info">
      {versionData && (
        <>
          <h1>팀 이름 : {versionData.name}</h1>
          <h1>팀 정보 : {versionData.intro}</h1>
          <h1>팀 링크 : {versionData.link}</h1>
          <h1>팀 플랫폼 : {versionData.platform}</h1>
          <h1>{versionData.members.map(e => { return (<text> {e} </text>) })}</h1>
          <h1>{versionData.startDay} ~ {versionData.endDay}</h1>
        </>
      )}
    </div>
  );
};
export default ShowTest;
