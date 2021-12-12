import { useState } from "react";

type FeedbackStarsType = {
  getScoreFunc: Function;
};

const TesterFeedbackStars = ({ getScoreFunc }: FeedbackStarsType) => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault();
    let clickStates = [...clicked];
    let score = 0;
    for (let i = 0; i < 5; i++) {
      if (i <= index) {
        clickStates[i] = true;
        score = i + 1;
      } else clickStates[i] = false;
    }
    getScoreFunc(score);
  };
  return (
    <div className="tester-feedback-stars">
      <h2>별점</h2>
      <div>
        <i
          onClick={(e) => handleStarClick(e, 0)}
          className={clicked[0] ? "star icon clicked" : "star icon"}></i>
        <i
          onClick={(e) => handleStarClick(e, 1)}
          className={clicked[1] ? "star icon clicked" : "star icon"}></i>
        <i
          onClick={(e) => handleStarClick(e, 2)}
          className={clicked[2] ? "star icon clicked" : "star icon"}></i>
        <i
          onClick={(e) => handleStarClick(e, 3)}
          className={clicked[3] ? "star icon clicked" : "star icon"}></i>
        <i
          onClick={(e) => handleStarClick(e, 4)}
          className={clicked[4] ? "star icon clicked" : "star icon"}></i>
      </div>
    </div>
  );
};

export default TesterFeedbackStars;
