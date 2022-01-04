import { UserModel } from '../../models/index.js';
import { ImageService } from '../index.js';
// UserService
import ApiError from '../../modules/error.js';

/* User (PK) */

async function getByUserId(user_id) {
  const user = await UserModel.getByUserId(user_id);

  if (!user) throw new ApiError(404, `User not found: ${user_id}`);

  return user;
}

async function create(
  id, //
  password,
  nickname,
  imagefile,
  oauth_token,
  access_token,
) {
  const image = await ImageService.create(
    imagefile.file_name, //
    imagefile.file_path,
    imagefile.file_type,
    imagefile.file_size,
  );

  const user = await UserModel.create(
    id, //
    password,
    nickname,
    image.image_id,
    oauth_token,
    access_token,
  );

  return user;
}

async function update(
  user_id, //
  id,
  password,
  nickname,
  image_id,
  oauth_token,
  access_token,
) {
  const user = await UserModel.getByUserId(user_id);

  if (!user) throw new ApiError(404, `User not found: ${user_id}`);

  const updated = await UserModel.update(
    user_id, //
    id,
    password,
    nickname,
    image_id,
    oauth_token,
    access_token,
  );

  return updated;
}

async function removeByUserId(user_id) {
  const user = await UserModel.getByUserId(user_id);

  if (!user) throw new ApiError(404, `User not found: ${user_id}`);

  await ImageService.removeByImageId(user.image_id);
  // await UserTeamModel.removeByUserId(user_id);
  await UserModel.remove(user_id);
}

// /* Team (Equal FK) */

// async function getTeams(user_id) {
//   const user = await UserModel.getByUserId(user_id);

//   if (!user) throw new ApiError(404, `User not found: ${user_id}`);

//   const teams = await UserTeamModel.getByUserId(user_id);

//   return teams;
// }

// async function joinTeam(user_id, team_id) {
//   const user = await UserModel.getByUserId(user_id);
//   const team = await TeamService.getByTeamId(team_id);

//   if (!user) throw new ApiError(404, `User not found: ${user_id}`);
//   if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

//   const join = await UserTeamModel.create(user_id, team_id);

//   return join;
// }

// async function leaveTeam(user_id, team_id) {
//   const user = await UserModel.getByUserId(user_id);
//   const team = await TeamService.getByteamId(team_id);

//   if (!user) throw new ApiError(404, `User not found: ${user_id}`);
//   if (!team) throw new ApiError(404, `Team not found: ${team_id}`);

//   await UserTeamModel.remove(user_id, team_id);
// }

export default {
  getByUserId,
  create,
  update,
  removeByUserId,
  // getTeams,
  // joinTeam,
  // leaveTeam,
};
