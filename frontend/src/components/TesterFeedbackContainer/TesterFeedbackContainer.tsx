import { useState } from "react";
import TesterFeedbackStars from "./TesterFeedbackStars";
import "./TesterFeedbackContainer.scss";

const TesterFeedbackContainer = () => {
  const [score, setScore] = useState(0);
  const getFeedbackStars = (score: number) => {
    console.log(score);
    setScore(score);
  };

  return (
    <div className="tester-feedback-container">
      <h1>피드백 남기기</h1>
      <form>
        <h2>파일 업로드</h2>
        <input type="file" accept="image/*" />
        <TesterFeedbackStars getScoreFunc={getFeedbackStars} /> {String(score)}
        점
      </form>
    </div>
  );
};

export default TesterFeedbackContainer;
