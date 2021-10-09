import express from 'express';
import 'express-async-errors';

import UserController from '../../controllers/user/user.js';
import { validateUserBody } from '../../middleware/validator/validateUser.js';
import { validateError } from '../../middleware/validator/validateError.js';

const router = express.Router();

router.get('/:id', UserController.getUser);
router.post('/', validateUserBody, validateError, UserController.createUser);
router.put('/:id', validateUserBody, validateError, UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;
