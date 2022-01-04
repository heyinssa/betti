import { useState } from 'react';
import { useFormik } from 'formik';
import Rating from '@mui/material/Rating';
import TextareaAutosize from 'react-textarea-autosize';
import './ProjectFeedbackModal.scss';

type feedbackType = {
  review_stars: number;
  review_feedback: string;
};

const ProjectFeedbackModal = () => {
  const [score, setScore] = useState<number | null>(0);
  const [ifUpdate, setIfUpdate] = useState<boolean>(false);
  const getFeedbackStars = (
    e: React.SyntheticEvent<Element, Event>,
    score: number | null,
  ) => {
    e.preventDefault;
    setScore(score);
    feedbackForm.handleChange(e);
  };
  const validateValues = (value: feedbackType) => {
    var errors: any = {};
    if (value.review_feedback.length < 10)
      errors.review_feedback = '피드백 길이가 너무 짧습니다';
    if (value.review_stars < 0 || value.review_stars > 5)
      errors.review_stars = '';
  };
  const feedbackForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      review_stars: 0,
      review_feedback: '',
    },
    validate: validateValues,
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);
      //axios
      console.log(values);
      setSubmitting(false);
    },
  });
  return (
    <>
      <h1>피드백 남기기</h1>
      <form onSubmit={feedbackForm.handleSubmit}>
        <h2>파일 업로드</h2>
        <input type="file" name="review_image" accept="image/*" />
        <br />
        <br />
        <Rating
          name="review_stars"
          value={Number(feedbackForm.values.review_stars)}
          onChange={getFeedbackStars}
        />
        <div>{String(score)}점</div>
        <br />
        <TextareaAutosize
          id="review-feedback"
          name="review_feedback"
          value={feedbackForm.values.review_feedback}
          onChange={feedbackForm.handleChange}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default ProjectFeedbackModal;
