import { TestType } from '../../modules/Provider';

type ShowTestType = {
    testData: TestType
};
const ShowTest = ({ testData }: ShowTestType) => {
    console.log(testData);
    return (
        <div className="main-screen-test-info">
            {testData &&
                (
                    <>
                        <h1>{testData.name}</h1>
                        <h1>{testData.intro}</h1>
                        <h1>{testData.link}</h1>
                        <h1>{testData.platform}</h1>
                        <h1>{testData.startDay}</h1>
                        <h1>{testData.endDay}</h1>
                    </>
                )
            }


        </div>
    )

}
export default ShowTest;