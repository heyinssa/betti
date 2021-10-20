import { TesterModel } from '../../models/index.js';
import ApiError from '../../modules/error.js';

async function getByTesterId(tester_id) {
  const tester = await TesterModel.getByTesterId(tester_id);

  if (!tester) throw new ApiError(404, `Tester not found: ${tester_id}`);

  return tester;
}

async function create(
  id, //
  password,
  birth,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  const tester = await TesterModel.create(
    id, //
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  return tester;
}

async function update(
  tester_id, //
  id,
  password,
  birth,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  const tester = await TesterModel.getByTesterId(tester_id);

  if (!tester) throw new ApiError(404, `Tester not found: ${tester_id}`);

  const updated = await TesterModel.update(
    tester_id, //
    id,
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  return updated;
}

async function removeByTesterId(tester_id) {
  const tester = await TesterModel.getByTesterId(tester_id);

  if (!tester) throw new ApiError(404, `Tester not found: ${tester_id}`);

  await TesterModel.remove(tester_id);
}

export default {
  getByTesterId,
  create,
  update,
  removeByTesterId,
};