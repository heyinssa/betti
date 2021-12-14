import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react';
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
    const dispatch = useDispatch();

    const handleSumbitTest = () => {
        console.log("click!");
        const form: TestType = { name: testName, intro: testInfo, link: testLink, platform: testPlatform, startDay: testScheduleStart, endDay: testScheduleEnd };
        dispatch(addTest(form));

    }

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <Form>
            <Form.Field control='input' label="서비스 이름" type='string' placeholder="서비스 이름" onChange={changeName} />
            <Form.Field control='input' label="서비스 소개" type='string' placeholder="서비스 소개" onChange={changeInfo} />
            <Form.Field control='input' label="서비스 링크" type='string' placeholder="링크" onChange={changeLink} />
            <Form.Field control='input' label="플랫폼" type='string' placeholder="플랫폼" onChange={changePlatform} />
            <Form.Field control='input' label="시작 일정" type='number' placeholder="일정" onChange={changeScheduleStart} />
            <Form.Field control='input' label="종료 일정" type='number' placeholder="일정" onChange={changeScheduleEnd} />
            <Link to='/pro'>
                <Form.Field control={Button} onClick={handleSumbitTest}>Submit</Form.Field>

            </Link>

        </Form>
    )
}

export default MakeTestForms;
