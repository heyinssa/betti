import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, List } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

import { addTest, TestType } from '../../modules/Provider';

const MakeTestForms = () => {
  // useState<string | null>('');
  const [testName, setTestName] = useState('');
  const [testInfo, setTestInfo] = useState('');
  const [testLink, setTestLink] = useState('');
  const [testPlatform, setTestPlatform] = useState('');
  const [testSchedule, setTestSchedule] = useState<Date | Date[]>();
  const [testMember, setTestMember] = useState('');
  const [formState, setformState] = useState('first');
  const dispatch = useDispatch();
  let val: Date | Date[] | null | undefined;

  const isEmtpy = (
    state: string | number | Date | Date[] | undefined,
    data: string,
  ) => {
    if (formState === 'wrong' && (state === '' || state === 0)) {
      return { content: `${data} 입력하세요`, pointing: 'left' };
    }
    return false;
  };
  const handleSumbitTest = () => {
    console.log(formState);
    console.log(testSchedule);
    console.log(val);
    // const testScheduleStart = testSchedule === undefined ? 0 : testSchedule[0];
    // const testScheduleEnd = testSchedule === undefined ? 0 : testSchedule[1];
    // console.log(testScheduleStart.toLocaleString);
    val = null;
    if (
      testName === '' ||
      testInfo === '' ||
      testLink === '' ||
      testPlatform === ''
      // testScheduleStart === '' ||
      // testScheduleEnd === ''
    ) {
      setformState('wrong');
    } else {
      const form: TestType = {
        name: testName,
        intro: testInfo,
        link: testLink,
        platform: testPlatform,
        startDay: 0,
        endDay: 0,
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
  const changeSchedule = (
    event: React.SyntheticEvent<Element, Event> | undefined,
    data: any,
  ) => {
    setTestSchedule(data.value);
  };

  const changeMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestMember(e.currentTarget.value);
  };
  return (
    <>
      <Form>
        <div>
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
          <SemanticDatepicker
            locale="en-US"
            label="일정"
            onChange={changeSchedule}
            type="range"
            value={val}
          />
          {testSchedule === undefined && formState === 'wrong' && (
            <div className="ui left pointing red basic label">
              Please enter a value
            </div>
          )}
        </div>

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
      {/* {formState === 'cleared' && <Redirect to="/pro" />} */}
    </>
  );
};

export default MakeTestForms;
