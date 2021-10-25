import express from 'express';
import 'express-async-errors';

import { FeedbackController } from '../../controllers/index.js';

const router = express.Router();

/* Feedback (PK) */

router.get('/:feedback', FeedbackController.get);
router.post('/', FeedbackController.create);
router.put('/:feedback', FeedbackController.update);
router.delete('/:feedback', FeedbackController.remove);


/* Element (Lower FK) */

router.get('/:feedback/elements', FeedbackController.getElements);

export default router;
