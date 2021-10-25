import { ElementService, FeedbackService } from '../../services/index.js';

/* Feedback (PK) */

async function get(req, res, next) {
  const feedback_id = req.params.feedback;

  const feedback = await FeedbackService.getByFeedbackId(feedback_id);

  res.status(200).json(feedback);
}

async function create(req, res, next) {
  const {
    state, //
    tester_id,
    version_id,
  } = req.body;

  const feedback = await FeedbackService.create(
    state, //
    tester_id,
    version_id,
  );

  res.status(200).json(feedback);
}

async function update(req, res, next) {
  const feedback_id = req.params.feedback;
  const {
    state, //
    tester_id,
    version_id,
  } = req.body;

  const feedback = await FeedbackService.update(
    feedback_id, //
    state,
    tester_id,
    version_id,
  );

  res.status(200).json(feedback);
}

async function remove(req, res, next) {
  const feedback_id = req.params.feedback;

  await FeedbackService.removeByFeedbackId(feedback_id);

  res.sendStatus(200);
}

/* Element (Lower FK) */

async function getElements(req, res, next) {
  const team_id = req.params.team;

  const elements = await ElementService.getByTeamId(team_id);

  res.status(200).json(elements);
}

export default {
  get,
  create,
  update,
  remove,
  getElements,
};
