import { TeamModel, ProviderTeamModel } from '../../models/index.js';
import ApiError from '../../modules/error.js';

async function getByTeamId(team_id) {
  const team = await TeamModel.getByTeamId(team_id);

  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  return team;
}

async function create(
  name, //
  introduce,
  image_id,
) {
  const team = await TeamModel.create(
    name, //
    introduce,
    image_id,
  );

  return team;
}

async function update(
  team_id, //
  name,
  introduce,
  image_id,
) {
  const team = await TeamModel.getByTeamId(team_id);

  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  const updated = await TeamModel.update(
    team_id, //
    name,
    introduce,
    image_id,
  );

  return updated;
}

async function getProviders(team_id) {
  const team = await TeamModel.getByTeamId(team_id);

  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  const teams = await ProviderTeamModel.getByProviderId(team_id);

  return teams;
}

async function removeByTeamId(team_id) {
  const team = await TeamModel.getByTeamId(team_id);

  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  await TeamModel.remove(team_id);
}

export default {
  getByTeamId,
  create,
  update,
  getProviders,
  removeByTeamId,
};
