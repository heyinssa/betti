import TesterFeedbackStars from "./TesterFeedbackStars";
import "./TesterFeedbackContainer.scss";

const TesterFeedbackContainer = () => {
  return (
    <div className="tester-feedback-container">
      <h1>피드백 남기기</h1>
      <form>
        <h2>파일 업로드</h2>
        <input type="file" accept="image/*" />
        <TesterFeedbackStars />
      </form>
    </div>
  );
};

export default TesterFeedbackContainer;
