import express from 'express';
import 'express-async-errors';

import { uploadImage } from '../../middleware/upload/imageHandle.js';
import { UserController } from '../../controllers/index.js';

const router = express.Router();

/* User (PK) */

router.get('/:user', UserController.get);
router.post('/', ...uploadImage('image'), UserController.create);
router.put('/:user', UserController.update);
router.delete('/:user', UserController.remove);

// /* Team (Equal FK) */

// router.get('/:user/teams', UserController.getTeams);
// router.post('/:user/teams/:team', UserController.joinTeam);
// router.delete('/:user/teams/:team', UserController.leaveTeam);

export default router;
