import { FeedbackService, UserService } from '../../services/index.js';
import jsonwebtoken from 'jsonwebtoken';

/* JWT  */
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

async function createToken(req, res, next) {
  const user_id = req.params.user;
  try {
    const user = await UserService.getByUserId(user_id);
    if (user.length) {
      const token = jsonwebtoken.sign(
        {
          user_id: user[0].user_id,
        },
        YOUR_SECRET_KEY,
        {
          expiresIn: '1h',
        },
      );
      res.cookie('user', token);
      res.status(201).json({
        result: 'ok',
        token,
      });
    } else {
      res.status(400).json({ error: 'invalid user' });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
}

/* User (PK) */

async function get(req, res, next) {
  const user_id = req.params.user;

  const user = await UserService.getByUserId(user_id);

  res.status(200).json(user);
}

async function create(req, res, next) {
  const imagefile = req.image;
  const {
    id, //
    password,
    birth,
    nickname,
    oauth_token,
    access_token,
  } = req.body;

  const user = await UserService.create(
    id, //
    password,
    birth,
    nickname,
    imagefile,
    oauth_token,
    access_token,
  );

  res.status(200).json(user);
}

async function update(req, res, next) {
  const user_id = req.params.user;
  const {
    id, //
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  } = req.body;

  const user = await UserService.update(
    user_id, //
    id,
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(user);
}

async function remove(req, res, next) {
  const user_id = req.params.user;

  await UserService.removeByUserId(user_id);

  res.sendStatus(200);
}

/* Feedback (Lower FK) */

async function getFeedbacks(req, res, next) {
  const user_id = req.params.user;

  const user = await FeedbackService.getByUserId(user_id);

  res.status(200).json(user);
}

export default {
  createToken,
  get,
  create,
  update,
  remove,
  getFeedbacks,
};
