import express from 'express';
import 'express-async-errors';

import { uploadImage } from '../../middleware/upload/imageHandle.js';
import { VersionController } from '../../controllers/index.js';

const router = express.Router();

/* Version (PK) */

router.get('/:version', VersionController.get);
router.post('/', VersionController.create);
router.put('/:version', VersionController.update);
router.delete('/:version', VersionController.remove);

/* Feedback (Lower FK) */

router.get('/:version/feedbacks', VersionController.getFeedbacks);

/* VersionImage (Equal FK) */

router.get('/:version/images', VersionController.getImages);
router.post(
  '/:version/image',
  ...uploadImage('image'),
  VersionController.addImage,
);
router.put(
  '/:version/images/:image',
  ...uploadImage('image'),
  VersionController.updateImage,
);
router.delete('/:version/images/:image', VersionController.removeImage);

export default router;
