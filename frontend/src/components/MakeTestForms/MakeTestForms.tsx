import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, List, Label, Icon, Grid } from 'semantic-ui-react';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { addTest, TestType } from '../../modules/Provider';

const returnMonth = (month: string): string => {
  switch (month) {
    case 'Jan':
      return '01';
    case 'Feb':
      return '02';
    case 'Mar':
      return '03';
    case 'Apr':
      return '04';
    case 'May':
      return '05';
    case 'Jun':
      return '06';
    case 'Jul':
      return '07';
    case 'Aug':
      return '08';
    case 'Sep':
      return '09';
    case 'Oct':
      return '10';
    case 'Nov':
      return '11';
    case 'Dec':
      return '12';
    default:
      return '00';
  }
};

const returnDate = (data: string): number => {
  if (data === undefined) return -1;
  const year = data.substr(11, 4);
  const month = returnMonth(data.substr(4, 3));
  const day = data.substr(8, 2);
  return parseInt(year + month + day);
};

const MakeTestForms = () => {
  const [testName, setTestName] = useState('');
  const [testInfo, setTestInfo] = useState('');
  const [testLink, setTestLink] = useState('');
  const [testPlatform, setTestPlatform] = useState('');
  const [testSchedule, setTestSchedule] = useState<any | null | undefined>(
    null,
  );
  const [testMember, setTestMember] = useState('');
  const [testMembers, setTestMembers] = useState<string[]>([]);
  const [formState, setformState] = useState('first');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isEmpty = (data: string | number, message: string) => {
    if (formState === 'wrong' && (data === '' || data === 0)) {
      return { content: `${message} 입력하세요`, pointing: 'left' };
    }
    return false;
  };

  const isEmptyArray = (data: string[]) => {
    if (formState === 'wrong' && data.length === 0) {
      return { content: `멤버를 추가하세요`, pointing: 'left' };
    }
    return false;
  };

  const handleSumbitTest = () => {
    console.log(testSchedule);
    if (testSchedule === null || testSchedule === undefined) {
      setformState('wrong');
      return;
    }
    const testScheduleStart = returnDate(testSchedule[0]?.toString());
    const testScheduleEnd = returnDate(testSchedule[1]?.toString());
    if (testScheduleEnd === -1) setTestSchedule(undefined);
    if (
      testName === '' ||
      testInfo === '' ||
      testLink === '' ||
      testPlatform === '' ||
      testSchedule === undefined ||
      testMembers.length === 0
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
        members: testMembers,
      };
      dispatch(addTest(form));
      // setformState('cleared');
      navigate('/pro');
    }
  };

  const handleSumbitMember = () => {
    if (testMember !== '') {
      setTestMembers(prevArray => {
        return [...prevArray, testMember];
      });
      setTestMember('');
    }
  };

  const handleRemoveMember = (remove: string) => {
    const tempArray = testMembers;
    setTestMembers(
      tempArray.filter(member => {
        return remove !== member;
      }),
    );
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
  const changeMember = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTestMember(e.currentTarget.value);
  };
  const changeSchedule = (
    event: React.SyntheticEvent<Element, Event> | undefined,
    data: any,
  ) => {
    console.log(data.value);
    setTestSchedule(data.value);
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
            error={isEmpty(testName, '이름을')}
          />
          <Form.Field
            control="input"
            label="서비스 소개"
            type="string"
            placeholder="서비스 소개"
            onChange={changeInfo}
            error={isEmpty(testInfo, '정보를')}
          />
          <Form.Field
            control="input"
            label="서비스 링크"
            type="string"
            placeholder="링크"
            onChange={changeLink}
            error={isEmpty(testLink, '링크를')}
          />
          <Form.Field
            control="input"
            label="플랫폼"
            type="string"
            placeholder="플랫폼"
            onChange={changePlatform}
            error={isEmpty(testPlatform, '플랫폼을')}
          />
          <Grid>
            <Form.Field
              control="input"
              label="멤버"
              type="string"
              placeholder="멤버 이름"
              value={testMember}
              onChange={changeMember}
              error={isEmptyArray(testMembers)}
            />
            <Form.Field control={Button} onClick={handleSumbitMember}>
              멤버 추가
            </Form.Field>
            {testMembers.map(e => (
              <Label>
                {e}
                <Icon name="delete" onClick={() => handleRemoveMember(e)} />
              </Label>
            ))}
          </Grid>

          <SemanticDatepicker
            locale="en-US"
            label="일정"
            format="YYYY-MM-DD"
            datePickerOnly
            onChange={changeSchedule}
            type="range"
          />
          {(testSchedule === undefined || testSchedule === null) &&
            formState === 'wrong' && (
              <div className="ui left pointing red basic label">
                날짜를 입력해주세요
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
