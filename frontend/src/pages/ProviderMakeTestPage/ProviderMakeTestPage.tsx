import {  useState } from 'react';

import './ProviderMakeTestPage.scss';

const ProviderMakeTestPage = () => {
  const [testName, setTestName] = useState('');
  const [testInfo, setTestInfo] = useState('');
  const [testLink, setTestLink] = useState('');
  const [testPlatform, setTestPlatform] = useState('');

  const [testScheduleStart, setTestScheduleStart] = useState('');
  const [testScheduleEnd, setTestScheduleEnd] = useState('');

  const [testMember, setTestMember] = useState('');

  const changeName = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestName(e.currentTarget.value);
  };
  const changeInfo = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestInfo(e.currentTarget.value);
  };

  const changeLink = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestLink(e.currentTarget.value);
  };
  const changePlatform = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestPlatform(e.currentTarget.value);
  };
  const changeScheduleStart = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestScheduleStart(e.currentTarget.value);
  };
  const changeScheduleEnd = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestScheduleEnd(e.currentTarget.value);
  };
  const changeMember = (e : React.ChangeEvent<HTMLInputElement>) => {
    setTestMember(e.currentTarget.value);
  };

  return (
    <>
      <div className="make-test">
        <input
          onChange={changeName}
          maxLength={12}
          type="text"
          value={testName}
          placeholder="서비스 이름"
        />
        <h1>소개</h1>
        <div>서비스를 소개해주세요!</div>
        <input
          onChange={changeInfo}
          maxLength={12}
          type="text"
          value={testInfo}
        />
        <h1>소개</h1>
        <div>서비스를 테스트 해볼 수 있는 링크를 첨부 하여 주세요!</div>

        <input
          onChange={changeLink}
          maxLength={12}
          type="text"
          value={testLink}
        />
        <h1>플랫폼</h1>
        <div>서비스가 구동되는 플랫폼을 선택해주세요!</div>
        <input
          onChange={changePlatform}
          maxLength={12}
          type="text"
          value={testPlatform}
        />
        <h1>일정</h1>
        <div>베타 테스트를 진행할 일정을 지정해주세요!</div>
        <input
          onChange={changeScheduleStart}
          maxLength={12}
          type="number"
          value={testScheduleStart}
        />
        <input
          onChange={changeMember}
          maxLength={12}
          type="number"
          value={testMember}
        />
        <h1>인원</h1>
        <div>베타 테스트를 진행할 최대 인원을 지정해주세요!</div>

        <input
          onChange={changeScheduleEnd}
          maxLength={12}
          type="number"
          value={testScheduleEnd}
        />
      </div>
    </>
  );
};

export default ProviderMakeTestPage;
