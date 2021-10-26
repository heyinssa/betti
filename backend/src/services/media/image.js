import { ImageModel } from '../../models/index.js';
import ApiError from '../../modules/error.js';

/* Image (PK) */

async function getByImageId(image_id) {
  const image = await ImageModel.getByImageId(image_id);

  if (!image) throw new ApiError(404, `Image not found: ${image_id}`);

  return image;
}

async function create(
  file_name, //
  file_path,
  file_type,
  file_size,
) {
  const image = await ImageModel.create(
    file_size, //
    file_name,
    file_type,
    file_path,
  );

  return image;
}

async function update(
  image_id, //
  file_size,
  file_name,
  file_type,
  file_path,
) {
  const image = await ImageModel.getByImageId(image_id);

  if (!image) throw new ApiError(404, `Image not found: ${image_id}`);

  const updated = await ImageModel.update(
    image_id, //
    file_size,
    file_name,
    file_type,
    file_path,
  );

  return updated;
}

async function removeByImageId(image_id) {
  const image = await ImageModel.getByImageId(image_id);
  // delete actual file

  if (!image) throw new ApiError(404, `Image not found: ${image_id}`);

  await ImageModel.remove(image_id);
}

export default {
  getByImageId,
  create,
  update,
  removeByImageId,
};
