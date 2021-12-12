import { useState } from "react";
import TesterFeedbackStars from "./TesterFeedbackStars";
import "./TesterFeedbackContainer.scss";

const TesterFeedbackContainer = () => {
  const [score, setScore] = useState(0);
  const getFeedbackStars = (score: number) => {
    setScore(score);
  };

  return (
    <div className="tester-feedback-container">
      <h1>피드백 남기기</h1>
      <form>
        <h2>파일 업로드</h2>
        <input type="file" name="review-image" accept="image/*" />
        <TesterFeedbackStars getScoreFunc={getFeedbackStars} />
        <div>{String(score)}점</div>
        <textarea name="review-feedback"></textarea>
        <input type="submit" />
      </form>
    </div>
  );
};

export default TesterFeedbackContainer;
