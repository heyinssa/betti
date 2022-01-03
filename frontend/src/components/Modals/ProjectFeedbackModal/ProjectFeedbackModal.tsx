import { useState } from 'react';
import Rating from '@mui/material/Rating';

const ProjectFeedbackModal = () => {
  const [score, setScore] = useState<number | null>(0);
  const getFeedbackStars = (
    e: React.SyntheticEvent<Element, Event>,
    score: number | null,
  ) => {
    e.preventDefault;
    setScore(score);
  };
  return (
    <>
      <h1>피드백 남기기</h1>
      <form>
        <h2>파일 업로드</h2>
        <input type="file" name="review-image" accept="image/*" />
        <br />
        <br />
        <Rating name="review-stars" value={score} onChange={getFeedbackStars} />
        <div>{String(score)}점</div>
        <br />
        <textarea name="review-feedback"></textarea>
        <input type="submit" />
      </form>
    </>
  );
};

export default ProjectFeedbackModal;