import express from 'express';
import 'express-async-errors';

import { ElementController } from '../../controllers/index.js';

const router = express.Router();

/* Element (PK) */

router.get('/:element', ElementController.get);
router.post('/', ElementController.create);
router.put('/:element', ElementController.update);
router.delete('/:element', ElementController.remove);

export default router;
