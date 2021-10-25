import express from 'express';
import 'express-async-errors';

import { TeamController } from '../../controllers/index.js';

const router = express.Router();

/* Team (PK) */

router.get('/:team', TeamController.get);
router.post('/', TeamController.create);
router.put('/:team', TeamController.update);
router.delete('/:team', TeamController.remove);

/* Versions (Lower FK) */

router.get('/:team/versions', TeamController.getVersions);

/* Providers (Equal FK) */

router.get('/:team/providers', TeamController.getProviders);

export default router;
