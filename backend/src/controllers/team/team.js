import { TeamService, VersionService } from '../../services/index.js';

/* Team (PK) */

async function get(req, res, next) {
  const team_id = req.params.team;

  const team = await TeamService.getByTeamId(team_id);

  res.status(200).json(team);
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

  const team = await TeamService.create(
    id, //
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(team);
}

async function update(req, res, next) {
  const team_id = req.params.team;
  const { id, password, birth, nickname, image_id, oauth_token, access_token } =
    req.body;

  const team = await TeamService.update(
    team_id, //
    id,
    password,
    birth,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  res.status(200).json(team);
}

async function remove(req, res, next) {
  const team_id = req.params.team;

  await TeamService.removeByTeamId(team_id);

  res.sendStatus(200);
}

/* Versions (Lower FK) */

async function getVersions(req, res, next) {
  const team_id = req.params.team;

  const versions = await VersionService.getByTeamId(team_id);

  res.status(200).json(versions);
}

/* Providers (Equal FK) */

async function getProviders(req, res, next) {
  const team_id = req.params.team;

  const providers = await TeamService.getProviders(team_id);

  res.status(200).json(providers);
}

export default {
  get,
  create,
  update,
  remove,
  getVersions,
  getProviders,
};
