import { FeedbackService, TesterService } from '../../services/index.js';

/* Tester (PK) */

async function get(req, res, next) {
  const tester_id = req.params.tester;

  const tester = await TesterService.getByTesterId(tester_id);

  res.status(200).json(tester);
}

async function create(req, res, next) {
  const {
    id, //
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  } = req.body;

  const tester = await TesterService.create(
    id, //
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(tester);
}

async function update(req, res, next) {
  const tester_id = req.params.tester;
  const {
    id, //
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  } = req.body;

  const tester = await TesterService.update(
    tester_id, //
    id,
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(tester);
}

async function remove(req, res, next) {
  const tester_id = req.params.tester;

  await TesterService.removeByTesterId(tester_id);

  res.sendStatus(200);
}

/* Feedback (Lower FK) */

async function getFeedbacks(req, res, next) {
  const tester_id = req.params.tester;

  const tester = await FeedbackService.getByTesterId(tester_id);

  res.status(200).json(tester);
}

export default {
  get,
  create,
  update,
  remove,
  getFeedbacks,
};
