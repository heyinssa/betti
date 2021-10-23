import { VersionModel, VersionImageModel } from '../../models/index.js';
import { ImageService, FeedbackService } from '../index.js';
import ApiError from '../../modules/error.js';

async function getByVersionId(version_id) {
  const version = await VersionModel.getByVersionId(version_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);

  return version;
}

async function getByTeamId(team_id) {
  const versions = await VersionModel.getByVersionId(team_id);

  return versions;
}

async function create(
  introduce, //
  link,
  platform,
  start_date,
  end_date,
  max_number,
  team_id,
) {
  const version = await VersionModel.create(
    introduce, //
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  );

  return version;
}

async function update(
  version_id,
  introduce,
  link,
  platform,
  start_date,
  end_date,
  max_number,
  team_id,
) {
  const version = await VersionModel.getByVersionId(version_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);

  const updated = await VersionModel.update(
    version_id,
    introduce,
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  );

  return updated;
}

async function removeByVersionId(version_id) {
  const version = await VersionModel.getByVersionId(version_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);

  await FeedbackService.removeByVersionId(version_id);
  await VersionModel.remove(version_id);
}

async function removeByTeamId(team_id) {
  const versions = await VersionModel.getByVersionId(team_id);

  versions.forEach(version => removeByVersionId(version.version_id));
}

async function getImages(version_id) {
  const version = await VersionModel.getByVersionId(version_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);

  const versionImages = await VersionImageModel.getByVersionId(version_id);

  // await 들어가야댐...? 잘 모름 ㅎ
  const images = versionImages.map(versionImage =>
    ImageService.getByImageId(versionImage.image_id),
  );

  /*
    const images = Promise.all(
    versionImages.map(
      async versionImage =>
        await ImageService.getByImageId(versionImage.image_id),
    ),
  );
  */

  return images;
}

async function addImage(version_id, image_id) {
  const version = await VersionModel.getByVersitonID(version_id);
  const image = await ImageService.getByImageId(image_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);
  if (!image) throw new ApiError(404, `Image not found: ${image_id}`);

  const versionImage = await VersionImageModel.create(version_id, image_id);

  return versionImage;
}

async function updateImage(version_id, old_image_id, new_image_id) {
  const version = await VersionModel.getByVersitonID(version_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);

  await removeImage(version_id, old_image_id);
  await addImage(version_id, new_image_id);
}

async function removeImage(version_id, image_id) {
  const version = await VersionModel.getByVersitonID(version_id);
  const image = await ImageService.getByImageId(image_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);
  if (!image) throw new ApiError(404, `Image not found: ${image_id}`);

  await ImageService.removeByImageId(image_id);
  await VersionImageModel.remove(version_id, image_id);
}

export default {
  getByVersionId,
  getByTeamId,
  create,
  update,
  removeByVersionId,
  removeByTeamId,
  getImages,
  addImage,
  updateImage,
  removeImage,
};
