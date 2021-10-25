import { ElementModel } from '../../models/index.js';
import { ImageService } from '../index.js';
import ApiError from '../../modules/error.js';

/* Element (Upper FK) */

async function getByElementId(element_id) {
  const element = await ElementModel.getByElementId(element_id);

  if (!element) throw new ApiError(404, `Element not found: ${element_id}`);

  return element;
}

async function create(
  content, //
  apply_state,
  image_id,
  feedback_id,
) {
  const element = await ElementModel.create(
    content, //
    apply_state,
    image_id,
    feedback_id,
  );
  return element;
}

async function update(
  element_id, //
  content,
  apply_state,
  image_id,
  feedback_id,
) {
  const element = await ElementModel.getByElementId(element_id);

  if (!element) throw new ApiError(404, `Element not found: ${element_id}`);

  const updated = await ElementModel.update(
    element_id, //
    content,
    apply_state,
    image_id,
    feedback_id,
  );

  return updated;
}

async function removeByElementId(element_id) {
  const element = await ElementModel.getByElementId(element);

  if (!element) throw new ApiError(404, `element not found: ${element_id}`);

  await ImageService.removeByImageId(element.image_id);
  await ElementModel.remove(element_id);
}


/* Feedback (Upper FK) */

async function getByFeedbackId(feedback_id) {
  const elements = await ElementModel.getByFeedbackId(feedback_id);

  return elements;
}

async function removeByFeedbackId(feedback_id) {
  const elements = await ElementModel.getByFeedbackId(feedback_id);

  elements.forEach(element => removeByElementId(element.element_id));
}

export default {
  getByElementId,
  create,
  update,
  removeByElementId,
  getByFeedbackId,
  removeByFeedbackId,
};
