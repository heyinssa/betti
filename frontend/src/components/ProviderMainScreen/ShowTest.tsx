import { TestType } from '../../modules/Provider';
type ShowTestType = {
  testData: TestType;
};
const ShowTest = ({ testData }: ShowTestType) => {
  console.log(testData);
  return (
    <div className="main-screen-test-info">
      {testData && (
        <>
          <h1>팀 이름 : {testData.name}</h1>
          <h1>팀 정보 : {testData.intro}</h1>
          <h1>팀 링크 : {testData.link}</h1>
          <h1>팀 플랫폼 : {testData.platform}</h1>
          <h1>{testData.members.map(e => { return (<text> {e} </text>) })}</h1>
          <h1>{testData.startDay} ~ {testData.endDay}</h1>
        </>
      )}
    </div>
  );
};
export default ShowTest;
