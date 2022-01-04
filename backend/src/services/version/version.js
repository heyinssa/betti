import { VersionModel, VersionImageModel } from '../../models/index.js';
import { ImageService, FeedbackService } from '../index.js';
import ApiError from '../../modules/error.js';

/* Version (PK) */

async function getByVersionId(version_id) {
  const version = await VersionModel.getByVersionId(version_id);

  if (!version) throw new ApiError(404, `Version not found: ${version_id}`);

  return version;
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
  await getByVersionId(version_id);

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
  await VersionImageModel.removeByVersionId(version_id);
  await VersionModel.remove(version_id);
}

/* Team (Upper FK) */

async function getByTeamId(team_id) {
  const versions = await VersionModel.getByTeamId(team_id);

  return versions;
}

async function removeByTeamId(team_id) {
  const versions = await VersionModel.getByVersionId(team_id);

  if (versions)
    versions.forEach(version => removeByVersionId(version.version_id));
}

/* VersionImage (Equal FK) */

async function getImages(version_id) {
  await getByVersionId(version_id);

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

async function addImage(version_id, imagefile) {
  await getByVersionId(version_id);

  const image = await ImageService.create(
    imagefile.file_name, //
    imagefile.file_path,
    imagefile.file_type,
    imagefile.file_size,
  );

  await VersionImageModel.create(version_id, image.image_id);
}

async function updateImage(version_id, old_image_id, new_imagefile) {
  await getByVersionId(version_id);

  await removeImage(version_id, old_image_id);
  await addImage(version_id, new_imagefile);
}

async function removeImage(version_id, image_id) {
  await getByVersionId(version_id);
  await ImageService.getByImageId(image_id);

  await ImageService.removeByImageId(image_id);
  await VersionImageModel.remove(version_id, image_id);
}

export default {
  getByVersionId,
  create,
  update,
  removeByVersionId,
  getByTeamId,
  removeByTeamId,
  getImages,
  addImage,
  updateImage,
  removeImage,
};
