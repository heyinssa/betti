import { FeedbackModel } from '../../models/index.js';
import ElementService from 'element.js';
import ApiError from '../../modules/error.js';

async function getByFeedbackId(feedback_id) {
  const feedback = await FeedbackModel.getByFeedbackId(feedback_id);

  if (!feedback) throw new ApiError(404, `Feedback not found: ${feedback_id}`);

  return feedback;
}

async function getByVersionId(version_id) {
  const feedbacks = await FeedbackModel.getByVersionId(version_id);

  return feedbacks;
}

async function getByTesterId(tester_id) {
  const feedbacks = await FeedbackModel.getByTesterId(tester_id);

  return feedbacks;
}

async function create(
  state, //
  tester_id,
  version_id,
) {
  const feedback = await FeedbackModel.create(
    state, //
    tester_id,
    version_id,
  );

  return feedback;
}

async function update(
  feedback_id, //
  state,
  tester_id,
  version_id,
) {
  const feedback = await FeedbackModel.getByFeedbackId(feedback_id);

  if (!feedback) throw new ApiError(404, `Feedback not found: ${feedback_id}`);

  const updated = await FeedbackModel.update(
    feedback_id, //
    state,
    tester_id,
    version_id,
  );

  return updated;
}

async function removeByFeedbackId(feedback_id) {
  const feedback = await FeedbackModel.getByFeedbackId(feedback_id);

  if (!feedback) throw new ApiError(404, `Feedback not found: ${feedback_id}`);

  await ElementService.removeByFeedbackId(feedback_id);
  await FeedbackModel.remove(feedback_id);
}

async function removeByVersionId(version_id) {
  const feedbacks = await FeedbackModel.getByVersionId(version_id);

  feedbacks.forEach(feedback => removeByFeedbackId(feedback.feedback_id));
}

export default {
  getByFeedbackId,
  getByVersionId,
  getByTesterId,
  create,
  update,
  removeByFeedbackId,
  removeByVersionId,
};
