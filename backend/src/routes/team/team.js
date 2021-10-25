import express from 'express';
import 'express-async-errors';

import TeamControlelr from '../../controllers/team/team.js';

const router = express.Router();

/* Team (PK) */

router.get('/:team', TeamControlelr.get);
router.post('/', TeamControlelr.create);
router.put('/:team', TeamControlelr.update);
router.delete('/:team', TeamControlelr.remove);


/* Versions (Lower FK) */

router.get('/:team/versions', TeamControlelr.getVersions);


/* Providers (Equal FK) */

router.get('/:team/providers', TeamControlelr.getProviders);


export default router;
