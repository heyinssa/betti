import { FeedbackService, VersionService } from '../../services/index.js';

/* Version (PK) */

async function get(req, res, next) {
  const version_id = req.params.version;

  const version = await VersionService.getByVersionId(version_id);

  res.status(200).json(version);
}

async function create(req, res, next) {
  const {
    introduce, //
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  } = req.body;

  const version = await VersionService.create(
    introduce, //
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  );

  res.status(200).json(version);
}

async function update(req, res, next) {
  const version_id = req.params.version;
  const {
    introduce, //
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  } = req.body;

  const version = await VersionService.update(
    version_id, //
    introduce,
    link,
    platform,
    start_date,
    end_date,
    max_number,
    team_id,
  );

  res.status(200).json(version);
}

async function remove(req, res, next) {
  const version_id = req.params.version;

  await VersionService.removeByVersionId(version_id);

  res.sendStatus(200);
}

/* Feedback (Lower FK) */

async function getFeedbacks(req, res, next) {
  const version_id = req.params.version;

  const feedbacks = await FeedbackService.getByVersionId(version_id);

  res.status(200).json(feedbacks);
}

/* VersionImage (Equal FK) */

async function getImages(req, res, next) {
  const version_id = req.params.version;

  const images = await VersionService.getImages(version_id);

  res.status(200).json(images);
}

async function addImage(req, res, next) {
  const version_id = req.params.version;
  const imagefile = req.image;

  await VersionService.addImage(version_id, imagefile);

  res.sendStatus(200);
}

async function updateImage(req, res, next) {
  const version_id = req.params.version;
  const old_image_id = req.body.old_image_id;
  const new_imagefile = req.image;

  await VersionService.updateImage(version_id, old_image_id, new_imagefile);

  res.sendStatus(200);
}

async function removeImage(req, res, next) {
  const version_id = req.params.version;
  const image_id = req.body.image_id;

  await VersionService.removeImage(version_id, image_id);

  res.sendStatus(200);
}

export default {
  get,
  create,
  update,
  remove,
  getFeedbacks,
  getImages,
  addImage,
  updateImage,
  removeImage,
};
