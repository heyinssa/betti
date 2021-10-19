import { TesterModel } from '../../models/index.js';
import ApiError from '../../modules/error.js';

async function getTester(tester_id) {
  const tester = await TesterModel.getByTesterId(tester_id);

  if (!tester) throw new ApiError(404, `Tester not found: ${tester_id}`);

  return tester;
}

async function createTester(
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

async function updateTester(
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

async function deleteTester(tester_id) {
  const tester = await TesterModel.getByTesterId(tester_id);

  if (!tester) throw new ApiError(404, `Tester not found: ${tester_id}`);

  await TesterModel.remove(tester_id);
}

export default {
  getTester,
  createTester,
  updateTester,
  deleteTester,
};
