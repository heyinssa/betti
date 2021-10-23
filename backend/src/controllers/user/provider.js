import ProviderService from '../../services/user/provider.js';

/**
 * @method GET /api/providers/:provider
 */
async function get(req, res, next) {
  const provider_id = req.params.provider;

  const provider = await ProviderService.getByProviderId(provider_id);

  res.status(200).json(provider);
}

/**
 * @method POST /api/providers
 */
async function create(req, res, next) {
  const {
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  } = req.body;

  const provider = await ProviderService.create(
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(provider);
}

/**
 * @method PUT /api/providers/:provider
 */
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
    provider_id,
    id, //
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(provider);
}

/**
 * @method DELETE /api/providers/:id
 */
async function remove(req, res, next) {
  const provider_id = req.params.provider;

  await ProviderService.removeByProviderId(provider_id);

  res.sendStatus(200);
}

/**
 * @method GET /api/providers/:provider/teams
 */
async function getTeams(req, res, next) {
  const provider_id = req.params.provider;

  const teams = await ProviderService.getTeams(provider_id);

  res.status(200).json(teams);
}

/**
 * @method POST /api/providers/:provider/teams/:team
 */
async function joinTeam(req, res, next) {
  const provider_id = req.params.provider;
  const team_id = req.params.team;

  await ProviderService.joinTeams(provider_id, team_id);

  res.sendStatus(200);
}

/**
 * @method DELETE /api/providers/:provider/teams/:team
 */
async function leaveTeam(req, res, next) {
  const provider_id = req.params.provider;
  const team_id = req.params.team;

  await ProviderService.getTeams(provider_id, team_id);

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
