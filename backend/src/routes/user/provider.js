import express from 'express';
import 'express-async-errors';

import ProviderController from '../../controllers/user/provider.js';

const router = express.Router();

/* Provider (PK) */

router.get('/:provider', ProviderController.get);
router.post('/', ProviderController.create);
router.put('/:provider', ProviderController.update);
router.delete('/:provider', ProviderController.remove);


/* Team (Equal FK) */

router.get('/:provider/teams', ProviderController.getTeams);
router.post('/:provider/teams/:team', ProviderController.joinTeam);
router.delete('/:provider/teams/:team', ProviderController.leaveTeam);

export default router;
