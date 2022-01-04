import { ProviderService } from '../../services/index.js';

/* Provider (PK) */

async function get(req, res, next) {
  const provider_id = req.params.provider;

  const provider = await ProviderService.getByProviderId(provider_id);

  res.status(200).json(provider);
}

async function create(req, res, next) {
  const imagefile = req.image;
  const {
    id, //
    password,
    nickname,
    oauth_token,
    access_token,
  } = req.body;

  const provider = await ProviderService.create(
    id, //
    password,
    nickname,
    imagefile,
    oauth_token,
    access_token,
  );

  res.status(200).json(provider);
}

async function update(req, res, next) {
  const provider_id = req.params.provider;
  const {
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  } = req.body;

  const provider = await ProviderService.update(
    provider_id, //
    id,
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(provider);
}

async function remove(req, res, next) {
  const provider_id = req.params.provider;

  await ProviderService.removeByProviderId(provider_id);

  res.sendStatus(200);
}

/* Team (Equal FK) */

async function getTeams(req, res, next) {
  const provider_id = req.params.provider;

  const teams = await ProviderService.getTeams(provider_id);

  res.status(200).json(teams);
}

async function joinTeam(req, res, next) {
  const provider_id = req.params.provider;
  const team_id = req.params.team;

  await ProviderService.joinTeam(provider_id, team_id);

  res.sendStatus(200);
}

async function leaveTeam(req, res, next) {
  const provider_id = req.params.provider;
  const team_id = req.params.team;

  await ProviderService.leaveTeam(provider_id, team_id);

  res.sendStatus(200);
}

export default {
  get,
  create,
  update,
  remove,
  getTeams,
  joinTeam,
  leaveTeam,
};
