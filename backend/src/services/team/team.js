import { TeamModel, ProviderTeamModel } from '../../models/index.js';
import { ImageService, VersionService } from '../index.js';
import ApiError from '../../modules/error.js';

/* Team (PK) */

async function getByTeamId(team_id) {
  const team = await TeamModel.getByTeamId(team_id);

  if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

  return team;
}

async function create(
  name, //
  introduce,
  imagefile,
) {
  let image_id = null;

  if (imagefile) {
    const image = await ImageService.create(
      imagefile.file_name, //
      imagefile.file_path,
      imagefile.file_type,
      imagefile.file_size,
    );
    image_id = image.image_id;
  }

  const team = await TeamModel.create(
    name, //
    introduce,
    image_id,
  ).catch(async err => {
    if (image_id) await ImageService.removeByImageId(image_id);

    throw new ApiError(406, 'DB ERROR: ' + err);
  });

  return team;
}

async function update(
  team_id, //
  name,
  introduce,
  image_id,
) {
  await getByTeamId(team_id);

  const updated = await TeamModel.update(
    team_id, //
    name,
    introduce,
    image_id,
  );

  return updated;
}

async function removeByTeamId(team_id) {
  const team = await getByTeamId(team_id);

  await VersionService.removeByTeamId(team_id);
  await ProviderTeamModel.removeByTeamId(team_id);
  await TeamModel.remove(team_id);
  await ImageService.removeByImageId(team.image_id);
}

/* Provider (Equal FK) */

async function getProviders(team_id) {
  await getByTeamId(team_id);

  const providers = await ProviderTeamModel.getByProviderId(team_id);

  return providers;
}

export default {
  getByTeamId,
  create,
  update,
  removeByTeamId,
  getProviders,
};
