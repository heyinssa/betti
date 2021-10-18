import {
  ProviderModel,
  ProviderTeamModel,
  TeamModel,
} from '../../models/index.js';
import ApiError from '../../modules/error.js';

async function getProvider(provider_id) {
  const provider = await ProviderModel.getByProviderId(provider_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);

  return provider;
}

async function createProvider(
  id, //
  password,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  const provider = await ProviderModel.create(
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  return provider;
}

async function updateProvider(
  provider_id, //
  id,
  password,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  const provider = await ProviderModel.getByProviderId(provider_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);

  const updated = await ProviderModel.update(
    provider_id, //
    id,
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  return updated;
}

async function getTeams(provider_id) {
  const provider = await ProviderModel.getByProviderId(provider_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);

  const teams = await ProviderTeamModel.getByProviderId(provider_id);

  return teams;
}

async function joinTeam(provider_id, team_id) {
  const provider = await ProviderModel.getByProviderId(provider_id);
  const team = await TeamModel.getByTeamId(team_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);
  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  const join = await ProviderTeamModel.create(provider_id, team_id);

  return join;
}

async function leaveTeam(provider_id, team_id) {
  const provider = await ProviderModel.getByProviderId(provider_id);
  const team = await TeamModel.getByteamId(team_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);
  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  await ProviderTeamModel.remove(provider_id, team_id);
}

async function deleteProvider(provider_id) {
  const provider = await ProviderModel.getByProviderId(provider_id);

  if (!provider) throw new ApiError(404, `Provider not found: ${provider_id}`);

  await ProviderModel.remove(provider_id);
}

export default {
  getProvider,
  createProvider,
  updateProvider,
  getTeams,
  joinTeam,
  leaveTeam,
  deleteProvider,
};
