import express from 'express';
import 'express-async-errors';

import { uploadImage } from '../../middleware/upload/imageHandle.js';
import { TeamController } from '../../controllers/index.js';

const router = express.Router();

/* Team (PK) */

router.get('/:team', TeamController.get);
router.post('/', ...uploadImage('image'), TeamController.create);
router.put('/:team', TeamController.update);
router.delete('/:team', TeamController.remove);

/* Versions (Lower FK) */

router.get('/:team/versions', TeamController.getVersions);

/* Providers (Equal FK) */

router.get('/:team/providers', TeamController.getProviders);

export default router;
