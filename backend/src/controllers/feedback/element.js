import { ElementService } from '../../services/index.js';

/* Element (PK) */

async function get(req, res, next) {
  const element_id = req.params.element;

  const element = await ElementService.getByElementId(element_id);

  res.status(200).json(element);
}

async function create(req, res, next) {
  const {
    content, //
    apply_state,
    image_id,
    feedback_id,
  } = req.body;

  const element = await ElementService.create(
    content, //
    apply_state,
    image_id,
    feedback_id,
  );

  res.status(200).json(element);
}

async function update(req, res, next) {
  const element_id = req.params.element;
  const {
    content, //
    apply_state,
    image_id,
    feedback_id,
  } = req.body;

  const element = await ElementService.update(
    element_id, //
    content,
    apply_state,
    image_id,
    feedback_id,
  );

  res.status(200).json(element);
}

async function remove(req, res, next) {
  const element_id = req.params.element;

  await ElementService.removeByElementId(element_id);

  res.sendStatus(200);
}

export default {
  get,
  create,
  update,
  remove,
};
