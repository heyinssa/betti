import express from 'express';
import 'express-async-errors';

import ProviderController from '../../controllers/user/tester.js';

const router = express.Router();

router.get('/:provider', ProviderController.get);
router.post('/', ProviderController.create);
router.put('/:provider', ProviderController.update);
router.delete('/:provider', ProviderController.remove);

router.get('/:provider/teams', ProviderController.getTeams);
router.post('/:provider/teams/:team', ProviderController.joinTeam);
router.delete('/:provider/teams/:team', ProviderController.leaveTeam);

export default router;
