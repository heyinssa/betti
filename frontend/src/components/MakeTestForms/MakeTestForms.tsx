import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button, List } from 'semantic-ui-react';
import { addTest, TestType } from '../../modules/Provider';

const MakeTestForms = () => {
  // useState<string | null>('');
  const [testName, setTestName] = useState('');
  const [testInfo, setTestInfo] = useState('');
  const [testLink, setTestLink] = useState('');
  const [testPlatform, setTestPlatform] = useState('');
  const [testScheduleStart, setTestScheduleStart] = useState(0);
  const [testScheduleEnd, setTestScheduleEnd] = useState(0);
  const [testMember, setTestMember] = useState('');
  const [formState, setformState] = useState('first');
  const dispatch = useDispatch();

  const isEmtpy = (state: string | number, data: string) => {
    if (formState === 'wrong' && (state === '' || state === 0)) {
      return { content: `${data} 입력하세요`, pointing: 'left' };
    }
    return false;
  };
  const handleSumbitTest = () => {
    console.log(formState);
    if (
      testName === '' ||
      testInfo === '' ||
      testLink === '' ||
      testPlatform === '' ||
      testScheduleStart === 0 ||
      testScheduleEnd === 0
    ) {
      setformState('wrong');
    } else {
      const form: TestType = {
        name: testName,
        intro: testInfo,
        link: testLink,
        platform: testPlatform,
        startDay: testScheduleStart,
        endDay: testScheduleEnd,
      };
      dispatch(addTest(form));
      setformState('cleared');
    }
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setTestName(e.currentTarget.value);
  };
  const changeInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestInfo(e.currentTarget.value);
  };

  const changeLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestLink(e.currentTarget.value);
  };
  const changePlatform = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestPlatform(e.currentTarget.value);
  };
  const changeScheduleStart = (e: any) => {
    setTestScheduleStart(e.currentTarget.value);
  };
  const changeScheduleEnd = (e: any) => {
    setTestScheduleEnd(e.currentTarget.value);
  };
  const changeMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestMember(e.currentTarget.value);
  };
  return (
    <>
      <Form>
        <Form.Field
          control="input"
          label="서비스 이름"
          type="string"
          placeholder="서비스 이름"
          onChange={changeName}
          error={isEmtpy(testName, '이름을')}
        />

        <Form.Field
          control="input"
          label="서비스 소개"
          type="string"
          placeholder="서비스 소개"
          onChange={changeInfo}
          error={isEmtpy(testInfo, '정보를')}
        />
        <Form.Field
          control="input"
          label="서비스 링크"
          type="string"
          placeholder="링크"
          onChange={changeLink}
          error={isEmtpy(testLink, '링크를')}
        />
        <Form.Field
          control="input"
          label="플랫폼"
          type="string"
          placeholder="플랫폼"
          onChange={changePlatform}
          error={isEmtpy(testPlatform, '플랫폼을')}
        />
        <Form.Input
          control="input"
          label="시작 일정"
          type="number"
          placeholder="일정"
          onChange={changeScheduleStart}
          error={isEmtpy(testScheduleStart, '시작 날짜를')}
        />
        <Form.Field
          control="input"
          label="종료 일정"
          type="number"
          placeholder="일정"
          onChange={changeScheduleEnd}
          error={isEmtpy(testScheduleEnd, '끝나는 날짜를')}
        />
        <List horizontal>
          <List.Item>
            <Form.Field control={Button} onClick={handleSumbitTest}>
              입력하기
            </Form.Field>
          </List.Item>
          <List.Item>
            <Link to="/pro">
              <Form.Field control={Button}>취소하기</Form.Field>
            </Link>
          </List.Item>
        </List>
      </Form>
      {formState === 'cleared' && <Redirect to="/pro" />}
    </>
  );
};

export default MakeTestForms;
