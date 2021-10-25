import { FeedbackModel } from '../../models/index.js';
import { ElementService } from '../index.js';
import ApiError from '../../modules/error.js';

/* Feedback (PK) */

async function getByFeedbackId(feedback_id) {
  const feedback = await FeedbackModel.getByFeedbackId(feedback_id);

  if (!feedback) throw new ApiError(404, `Feedback not found: ${feedback_id}`);

  return feedback;
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


/* Version (Upper FK) */

async function getByVersionId(version_id) {
  const feedbacks = await FeedbackModel.getByVersionId(version_id);

  return feedbacks;
}

async function removeByVersionId(version_id) {
  const feedbacks = await FeedbackModel.getByVersionId(version_id);

  feedbacks.forEach(feedback => removeByFeedbackId(feedback.feedback_id));
}


/* Tester (Upper FK) */

async function getByTesterId(tester_id) {
  const feedbacks = await FeedbackModel.getByTesterId(tester_id);

  return feedbacks;
}


export default {
  getByFeedbackId,
  create,
  update,
  removeByFeedbackId,
  getByVersionId,
  removeByVersionId,
  getByTesterId,
};
